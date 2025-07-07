import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Database, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle,
  Star,
  ChevronRight,
  Workflow,
  Mail,
  Phone
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Brain,
      title: t('ai.title'),
      description: t('ai.description'),
      path: '/services/ai-advisory',
      features: [t('ai.feature1'), t('ai.feature2'), t('ai.feature3')],
    },
    {
      icon: Database,
      title: t('erp.title'),
      description: t('erp.description'),
      path: '/services/erp-implementation',
      features: [t('erp.feature1'), t('erp.feature2'), t('erp.feature3')],
    },
    {
      icon: Workflow,
      title: t('automation.title'),
      description: t('automation.description'),
      path: '/services/business-intelligence',
      features: [t('automation.feature1'), t('automation.feature2'), t('automation.feature3')],
    },
  ];

  const stats = [
    { number: '150+', label: t('stats.projectsDelivered') },
    { number: '98%', label: t('stats.clientSatisfaction') },
    { number: '50+', label: t('stats.enterpriseClients') },
    { number: '24/7', label: t('stats.supportAvailable') },
  ];

  const testimonials = [
    {
      quote: t('testimonials.quote1'),
      author: "Sarah Chen",
      role: "CTO, InnovateTech Corp",
      rating: 5,
    },
    {
      quote: t('testimonials.quote2'),
      author: "Michael Rodriguez",
      role: "Operations Director, Global Dynamics",
      rating: 5,
    },
    {
      quote: t('testimonials.quote3'),
      author: "Emma Thompson",
      role: "CEO, DataFlow Industries",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-lime-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-in-up">
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
              <span className="block bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>{t('hero.startTransformation')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="group border-2 border-neon-blue-500 text-neon-blue-500 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-neon-blue-500/10 transition-all duration-300 flex items-center space-x-2"
              >
                <span>{t('hero.learnMore')}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-space-grotesk font-bold text-neon-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-inter font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-neon-blue-500/50 hover:bg-navy-800/70 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <service.icon className="w-12 h-12 text-neon-blue-500 group-hover:text-gradient-lime-500 transition-colors duration-300" />
                  <div className="absolute inset-0 w-12 h-12 bg-neon-blue-500/20 rounded-full blur-md group-hover:bg-gradient-lime-500/20 transition-colors duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-4 group-hover:text-neon-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 font-inter leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-gradient-lime-500 flex-shrink-0" />
                      <span className="text-gray-300 font-inter text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.path}
                  className="inline-flex items-center space-x-2 text-neon-blue-400 font-inter font-medium group-hover:text-gradient-lime-400 transition-colors duration-300"
                >
                  <span>{t('common.learnMore')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
                {t('whyChoose.title')}
                <span className="block text-neon-blue-500">{t('whyChoose.titleHighlight')}</span>
              </h2>
              <p className="text-xl text-gray-300 font-inter leading-relaxed mb-8">
                {t('whyChoose.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-neon-blue-500/20 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-neon-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-space-grotesk font-semibold text-white mb-2">
                      {t('whyChoose.security.title')}
                    </h3>
                    <p className="text-gray-300 font-inter">
                      {t('whyChoose.security.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-lime-500/20 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-gradient-lime-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-space-grotesk font-semibold text-white mb-2">
                      {t('whyChoose.team.title')}
                    </h3>
                    <p className="text-gray-300 font-inter">
                      {t('whyChoose.team.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-neon-blue-500/20 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-neon-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-space-grotesk font-semibold text-white mb-2">
                      {t('whyChoose.deployment.title')}
                    </h3>
                    <p className="text-gray-300 font-inter">
                      {t('whyChoose.deployment.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8">
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                  {t('common.readyToTransform')}
                </h3>
                <p className="text-gray-300 font-inter mb-6 leading-relaxed">
                  {t('whyChoose.cta.description')}
                </p>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-6 py-3 rounded-lg font-inter font-semibold text-center block hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-300"
                >
                  {t('common.scheduleConsultation')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gradient-lime-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 font-inter leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-space-grotesk font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-neon-blue-400 font-inter text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-neon-blue-500/10 to-gradient-lime-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter mb-8 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                {t('common.getStartedToday')}
              </Link>
              <Link
                to="/services/ai-advisory"
                className="border-2 border-neon-blue-500 text-neon-blue-500 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-neon-blue-500/10 transition-all duration-300"
              >
                {t('common.exploreServices')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;