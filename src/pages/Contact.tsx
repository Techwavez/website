import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Clock,
  MessageSquare,
  User,
  Building,
  ArrowLeft
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    t('services.aiAdvisory'),
    t('services.erpImplementation'), 
    t('services.businessAutomation'),
    t('contact.form.generalConsultation'),
    t('contact.form.other')
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      details: 'contact@techwaveoffice.com',
      description: t('contact.info.email.description'),
      link: 'mailto:contact@techwaveoffice.com'
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      details: '+1 (555) 123-4567',
      description: t('contact.info.phone.description'),
      link: 'tel:+1-555-123-4567'
    },
    {
      icon: MapPin,
      title: t('contact.info.visit.title'),
      details: '4 rue sergent bobillot, Créteil, Val-de-marne 94000',
      description: t('contact.info.visit.description'),
      link: 'https://maps.google.com'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-12 animate-slide-in-up">
            <div className="relative mb-8 inline-block">
              <CheckCircle className="w-20 h-20 text-gradient-lime-500 mx-auto" />
              <div className="absolute inset-0 w-20 h-20 bg-gradient-lime-500/20 rounded-full blur-2xl mx-auto"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('contact.success.title')}
            </h1>
            
            <p className="text-xl text-gray-300 font-inter mb-8 leading-relaxed">
              {t('contact.success.message')}
            </p>
            
            <div className="bg-neon-blue-500/10 border border-neon-blue-500/20 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-neon-blue-400" />
                <span className="text-neon-blue-400 font-inter font-medium">{t('contact.success.whatsNext')}</span>
              </div>
              <div className="space-y-2 text-gray-300 font-inter text-sm">
                <p>• {t('contact.success.step1')}</p>
                <p>• {t('contact.success.step2')}</p>
                <p>• {t('contact.success.step3')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetForm}
                className="group bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-6 py-3 rounded-lg font-inter font-semibold hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>{t('contact.success.sendAnother')}</span>
              </button>
              
              <a
                href="mailto:contact@techwaveoffice.com"
                className="border-2 border-neon-blue-500 text-neon-blue-500 px-6 py-3 rounded-lg font-inter font-semibold hover:bg-neon-blue-500/10 transition-all duration-300 text-center"
              >
                {t('contact.success.emailDirect')}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-lime-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold text-white mb-6 leading-tight">
              {t('contact.hero.title')}
              <span className="block bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent">
                {t('contact.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-neon-blue-500/50 transition-all duration-300 text-center animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6 inline-block">
                  <info.icon className="w-12 h-12 text-neon-blue-500 group-hover:text-gradient-lime-500 transition-colors duration-300" />
                  <div className="absolute inset-0 w-12 h-12 bg-neon-blue-500/20 rounded-full blur-md group-hover:bg-gradient-lime-500/20 transition-colors duration-300"></div>
                </div>
                
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-3">
                  {info.title}
                </h3>
                
                <p className="text-neon-blue-400 font-inter font-medium mb-3">
                  {info.details}
                </p>
                
                <p className="text-gray-300 font-inter text-sm leading-relaxed mb-6">
                  {info.description}
                </p>

                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center space-x-2 text-neon-blue-400 font-inter font-medium hover:text-gradient-lime-400 transition-colors duration-300"
                >
                  <span>{t('contact.info.getInTouch')}</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('contact.form.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter leading-relaxed">
              {t('contact.form.subtitle')}
            </p>
          </div>

          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 animate-slide-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-space-grotesk font-medium text-white mb-2">
                    {t('contact.form.fullName')} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg text-white font-inter placeholder-gray-400 focus:outline-none focus:border-neon-blue-500 focus:ring-2 focus:ring-neon-blue-500/20 transition-all duration-300"
                      placeholder={t('contact.form.fullNamePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-space-grotesk font-medium text-white mb-2">
                    {t('contact.form.emailAddress')} *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg text-white font-inter placeholder-gray-400 focus:outline-none focus:border-neon-blue-500 focus:ring-2 focus:ring-neon-blue-500/20 transition-all duration-300"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-space-grotesk font-medium text-white mb-2">
                    {t('contact.form.companyName')}
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg text-white font-inter placeholder-gray-400 focus:outline-none focus:border-neon-blue-500 focus:ring-2 focus:ring-neon-blue-500/20 transition-all duration-300"
                      placeholder={t('contact.form.companyPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-space-grotesk font-medium text-white mb-2">
                    {t('contact.form.phoneNumber')}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg text-white font-inter placeholder-gray-400 focus:outline-none focus:border-neon-blue-500 focus:ring-2 focus:ring-neon-blue-500/20 transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-space-grotesk font-medium text-white mb-2">
                  {t('contact.form.serviceOfInterest')} *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg text-white font-inter focus:outline-none focus:border-neon-blue-500 focus:ring-2 focus:ring-neon-blue-500/20 transition-all duration-300"
                >
                  <option value="">{t('contact.form.selectService')}</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-space-grotesk font-medium text-white mb-2">
                  {t('contact.form.projectDetails')} *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg text-white font-inter placeholder-gray-400 focus:outline-none focus:border-neon-blue-500 focus:ring-2 focus:ring-neon-blue-500/20 transition-all duration-300 resize-none"
                    placeholder={t('contact.form.projectPlaceholder')}
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-navy-900 border-t-transparent rounded-full animate-spin"></div>
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{t('contact.form.sendMessage')}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-gray-400 font-inter text-sm">
                  {t('contact.form.privacyNote')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;