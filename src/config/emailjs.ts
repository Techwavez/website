// EmailJS Configuration
// Make sure to create a .env.local file with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  clientTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLIENT || '',
  internalTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_INTERNAL || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  
  // Email addresses
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'contact@techwaveoffice.com',
  adminEmail: import.meta.env.VITE_ADMIN_EMAIL || 'admin@techwaveoffice.com',
};

// Validation function to check if EmailJS is properly configured
export const isEmailjsConfigured = (): boolean => {
  return !!(
    emailjsConfig.serviceId &&
    emailjsConfig.clientTemplateId &&
    emailjsConfig.publicKey
  );
};

// Development fallback - remove this in production
export const isDevelopment = import.meta.env.DEV;

if (isDevelopment && !isEmailjsConfigured()) {
  console.warn('⚠️ EmailJS not configured. Please set up your .env.local file with EmailJS credentials.');
  console.log('Required environment variables:');
  console.log('- VITE_EMAILJS_SERVICE_ID');
  console.log('- VITE_EMAILJS_TEMPLATE_ID_CLIENT');
  console.log('- VITE_EMAILJS_TEMPLATE_ID_INTERNAL (optional)');
  console.log('- VITE_EMAILJS_PUBLIC_KEY');
} 