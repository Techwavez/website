// Form validation utilities for the contact form

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export interface ValidationErrors {
  [key: string]: string;
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

// Validation rules for each field
export const validationRules: ValidationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-ZÀ-ÿ\s\-'\.]+$/
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    required: false,
    pattern: /^[\+]?[0-9\s\-\(\)]{10,}$/
  },
  service: {
    required: true
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000
  }
};

// Validation error messages (these will be translated in the component)
export const getValidationError = (field: string, rule: string, t: (key: string) => string): string => {
  const errorKey = `contact.form.validation.${field}${rule.charAt(0).toUpperCase() + rule.slice(1)}`;
  return t(errorKey);
};

// Validate a single field
export const validateField = (
  field: string, 
  value: string, 
  rules: ValidationRule,
  t: (key: string) => string
): string | null => {
  // Required validation
  if (rules.required && (!value || value.trim() === '')) {
    return getValidationError(field, 'required', t);
  }

  // Skip other validations if field is empty and not required
  if (!value || value.trim() === '') {
    return null;
  }

  // Min length validation
  if (rules.minLength && value.length < rules.minLength) {
    return getValidationError(field, 'minLength', t);
  }

  // Max length validation
  if (rules.maxLength && value.length > rules.maxLength) {
    return getValidationError(field, 'maxLength', t);
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value)) {
    return getValidationError(field, 'invalid', t);
  }

  // Custom validation
  if (rules.custom && !rules.custom(value)) {
    return getValidationError(field, 'invalid', t);
  }

  return null;
};

// Validate entire form
export const validateForm = (
  formData: FormData,
  t: (key: string) => string
): ValidationErrors => {
  const errors: ValidationErrors = {};

  Object.keys(validationRules).forEach((field) => {
    const value = formData[field as keyof FormData];
    const rules = validationRules[field];
    const error = validateField(field, value, rules, t);
    
    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};

// Check if form is valid
export const isFormValid = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length === 0;
};

// Sanitize form data to prevent XSS
export const sanitizeFormData = (formData: FormData): FormData => {
  const sanitized: FormData = {} as FormData;
  
  Object.keys(formData).forEach((key) => {
    const value = formData[key as keyof FormData];
    // Basic sanitization - remove any HTML tags and trim whitespace
    sanitized[key as keyof FormData] = value
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<[^>]*>/g, '')
      .trim();
  });

  return sanitized;
};

// Rate limiting helper (client-side)
class RateLimiter {
  private static instance: RateLimiter;
  private lastSubmission: number = 0;
  private readonly cooldownMs: number = 30000; // 30 seconds

  private constructor() {}

  public static getInstance(): RateLimiter {
    if (!RateLimiter.instance) {
      RateLimiter.instance = new RateLimiter();
    }
    return RateLimiter.instance;
  }

  public canSubmit(): boolean {
    const now = Date.now();
    return now - this.lastSubmission >= this.cooldownMs;
  }

  public recordSubmission(): void {
    this.lastSubmission = Date.now();
  }

  public getRemainingCooldown(): number {
    const now = Date.now();
    const remaining = this.cooldownMs - (now - this.lastSubmission);
    return Math.max(0, remaining);
  }
}

export const rateLimiter = RateLimiter.getInstance(); 