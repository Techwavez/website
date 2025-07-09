import emailjs from '@emailjs/browser';
import { emailjsConfig, isEmailjsConfigured } from '../config/emailjs';
import type { FormData } from '../utils/formValidation';

// Email service response types
export interface EmailServiceResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  company_name: string;
  phone_number: string;
  service_type: string;
  message: string;
  to_email: string;
  reply_to: string;
}

// Email service class
class EmailService {
  private static instance: EmailService;
  
  private constructor() {
    // Initialize EmailJS with public key if configured
    if (isEmailjsConfigured()) {
      emailjs.init(emailjsConfig.publicKey);
    }
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  // Check if email service is properly configured
  public isConfigured(): boolean {
    return isEmailjsConfigured();
  }

  // Prepare template parameters from form data
  private prepareTemplateParams(formData: FormData): EmailTemplateParams {
    return {
      from_name: formData.name,
      from_email: formData.email,
      company_name: formData.company || 'Not provided',
      phone_number: formData.phone || 'Not provided',
      service_type: formData.service,
      message: formData.message,
      to_email: emailjsConfig.contactEmail,
      reply_to: formData.email
    };
  }

  // Send client confirmation email
  private async sendClientConfirmation(formData: FormData): Promise<EmailServiceResponse> {
    if (!emailjsConfig.clientTemplateId) {
      return {
        success: true,
        message: 'Client confirmation email skipped (template not configured)'
      };
    }

    try {
      const templateParams = this.prepareTemplateParams(formData);
      
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.clientTemplateId,
        {
          ...templateParams,
          to_email: formData.email, // Send to client
          customer_name: formData.name
        }
      );

      return {
        success: true,
        message: 'Client confirmation email sent successfully'
      };
    } catch (error) {
      console.error('Failed to send client confirmation email:', error);
      return {
        success: false,
        message: 'Failed to send confirmation email',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Send internal notification email
  private async sendInternalNotification(formData: FormData): Promise<EmailServiceResponse> {
    try {
      const templateParams = this.prepareTemplateParams(formData);
      
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.internalTemplateId || emailjsConfig.clientTemplateId,
        templateParams
      );

      return {
        success: true,
        message: 'Internal notification email sent successfully'
      };
    } catch (error) {
      console.error('Failed to send internal notification email:', error);
      return {
        success: false,
        message: 'Failed to send notification to TechWave team',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Main method to send contact form
  public async sendContactForm(formData: FormData): Promise<EmailServiceResponse> {
    // Check if email service is configured
    if (!this.isConfigured()) {
      return {
        success: false,
        message: 'Email service not configured',
        error: 'EMAILJS_NOT_CONFIGURED'
      };
    }

    try {
      // Send internal notification (primary email)
      const internalResult = await this.sendInternalNotification(formData);
      
      if (!internalResult.success) {
        return internalResult;
      }

      // Send client confirmation (secondary, non-critical)
      const clientResult = await this.sendClientConfirmation(formData);
      
      // Even if client confirmation fails, we still consider the main operation successful
      // since the team received the notification
      if (!clientResult.success) {
        console.warn('Client confirmation email failed:', clientResult.error);
      }

      return {
        success: true,
        message: 'Message sent successfully! We\'ll get back to you soon.'
      };

    } catch (error) {
      console.error('EmailJS send error:', error);
      
      // Parse specific error types
      if (error instanceof Error) {
        if (error.message.includes('network')) {
          return {
            success: false,
            message: 'Network error occurred',
            error: 'NETWORK_ERROR'
          };
        }
        
        if (error.message.includes('rate')) {
          return {
            success: false,
            message: 'Too many requests',
            error: 'RATE_LIMITED'
          };
        }
      }

      return {
        success: false,
        message: 'Failed to send message',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Test email configuration
  public async testConfiguration(): Promise<EmailServiceResponse> {
    if (!this.isConfigured()) {
      return {
        success: false,
        message: 'Email service not configured',
        error: 'EMAILJS_NOT_CONFIGURED'
      };
    }

    try {
      // Send a test email with minimal data
      const testData: FormData = {
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        phone: '+1234567890',
        service: 'General Consultation',
        message: 'This is a test message to verify EmailJS configuration.'
      };

      const result = await this.sendInternalNotification(testData);
      return result;

    } catch (error) {
      return {
        success: false,
        message: 'Test failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

// Export singleton instance
export const emailService = EmailService.getInstance();

// Export convenience functions
export const sendContactForm = (formData: FormData): Promise<EmailServiceResponse> => {
  return emailService.sendContactForm(formData);
};

export const testEmailConfiguration = (): Promise<EmailServiceResponse> => {
  return emailService.testConfiguration();
};

export const isEmailServiceConfigured = (): boolean => {
  return emailService.isConfigured();
}; 