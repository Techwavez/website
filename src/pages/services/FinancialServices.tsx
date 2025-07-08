import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  DollarSign, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  TrendingUp,
  FileCheck,
  Target,
  Users,
  Clock,
  MapPin,
  Banknote,
  Briefcase,
  Award,
  Handshake,
  Building2,
  Calculator
} from 'lucide-react';

const FinancialServices: React.FC = () => {
  const { t } = useLanguage();

  const serviceOfferings = [
    {
      icon: FileCheck,
      title: t('financial.services.eligibilityTests.title'),
      description: t('financial.services.eligibilityTests.description'),
      features: [
        t('financial.services.eligibilityTests.feature1'),
        t('financial.services.eligibilityTests.feature2'),
        t('financial.services.eligibilityTests.feature3'),
        t('financial.services.eligibilityTests.feature4')
      ]
    },
    {
      icon: MapPin,
      title: t('financial.services.strategicRoadmap.title'),
      description: t('financial.services.strategicRoadmap.description'),
      features: [
        t('financial.services.strategicRoadmap.feature1'),
        t('financial.services.strategicRoadmap.feature2'),
        t('financial.services.strategicRoadmap.feature3'),
        t('financial.services.strategicRoadmap.feature4')
      ]
    },
    {
      icon: Handshake,
      title: t('financial.services.endToEndManagement.title'),
      description: t('financial.services.endToEndManagement.description'),
      features: [
        t('financial.services.endToEndManagement.feature1'),
        t('financial.services.endToEndManagement.feature2'),
        t('financial.services.endToEndManagement.feature3'),
        t('financial.services.endToEndManagement.feature4')
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: t('financial.process.step1.title'),
      description: t('financial.process.step1.description'),
      duration: t('financial.process.step1.duration'),
    },
    {
      number: '02',
      title: t('financial.process.step2.title'),
      description: t('financial.process.step2.description'),
      duration: t('financial.process.step2.duration'),
    },
    {
      number: '03',
      title: t('financial.process.step3.title'),
      description: t('financial.process.step3.description'),
      duration: t('financial.process.step3.duration'),
    },
    {
      number: '04',
      title: t('financial.process.step4.title'),
      description: t('financial.process.step4.description'),
      duration: t('financial.process.step4.duration'),
    },
  ];

  const fundingTypes = [
    {
      icon: Banknote,
      title: t('financial.fundingTypes.subsidies.title'),
      description: t('financial.fundingTypes.subsidies.description'),
      benefits: [
        t('financial.fundingTypes.subsidies.benefit1'),
        t('financial.fundingTypes.subsidies.benefit2'),
        t('financial.fundingTypes.subsidies.benefit3')
      ]
    },
    {
      icon: Building2,
      title: t('financial.fundingTypes.governmentLoans.title'),
      description: t('financial.fundingTypes.governmentLoans.description'),
      benefits: [
        t('financial.fundingTypes.governmentLoans.benefit1'),
        t('financial.fundingTypes.governmentLoans.benefit2'),
        t('financial.fundingTypes.governmentLoans.benefit3')
      ]
    },
    {
      icon: TrendingUp,
      title: t('financial.fundingTypes.grants.title'),
      description: t('financial.fundingTypes.grants.description'),
      benefits: [
        t('financial.fundingTypes.grants.benefit1'),
        t('financial.fundingTypes.grants.benefit2'),
        t('financial.fundingTypes.grants.benefit3')
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: t('financial.whyChoose.expertise.title'),
      description: t('financial.whyChoose.expertise.description')
    },
    {
      icon: Shield,
      title: t('financial.whyChoose.compliance.title'),
      description: t('financial.whyChoose.compliance.description')
    },
    {
      icon: Users,
      title: t('financial.whyChoose.support.title'),
      description: t('financial.whyChoose.support.description')
    },
    {
      icon: TrendingUp,
      title: t('financial.whyChoose.success.title'),
      description: t('financial.whyChoose.success.description')
    }
  ];

  const metrics = [
    { value: '95%', label: t('financial.results.successRate'), description: t('financial.results.successDescription') },
    { value: '€85K+', label: t('financial.results.totalFunding'), description: t('financial.results.fundingDescription') },
    { value: '25+', label: t('financial.results.clientsHelped'), description: t('financial.results.clientsDescription') },
    { value: '30', label: t('financial.results.avgDays'), description: t('financial.results.daysDescription') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-lime-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <DollarSign className="w-8 h-8 text-neon-blue-500" />
                <span className="text-neon-blue-400 font-inter font-medium">{t('services.financialServices')}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-orbitron">
                {t('financial.hero.title')} <span className="text-gradient">{t('financial.hero.titleHighlight')}</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 font-inter leading-relaxed">
                {t('financial.hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="btn-primary flex items-center space-x-2 text-center justify-center"
                >
                  <span>{t('financial.hero.cta')}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-secondary flex items-center space-x-2 text-center justify-center"
                >
                  <Calculator className="w-5 h-5" />
                  <span>{t('financial.hero.freeTest')}</span>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-lg blur-2xl opacity-20"></div>
                <div className="relative bg-navy-800/50 backdrop-blur-sm border border-neon-blue-500/20 rounded-lg p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <DollarSign className="w-12 h-12 text-neon-blue-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white font-orbitron">€85K+</div>
                      <div className="text-sm text-gray-400 font-inter">{t('financial.hero.fundingSecured')}</div>
                    </div>
                    <div className="text-center">
                      <Award className="w-12 h-12 text-gradient-lime-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white font-orbitron">95%</div>
                      <div className="text-sm text-gray-400 font-inter">{t('financial.hero.successRate')}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-12 h-12 text-neon-blue-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white font-orbitron">25+</div>
                      <div className="text-sm text-gray-400 font-inter">{t('financial.hero.clientsHelped')}</div>
                    </div>
                    <div className="text-center">
                      <Clock className="w-12 h-12 text-gradient-lime-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white font-orbitron">30</div>
                      <div className="text-sm text-gray-400 font-inter">{t('financial.hero.avgDays')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-orbitron">
              {t('financial.offerings.title')} <span className="text-gradient">{t('financial.offerings.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              {t('financial.offerings.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceOfferings.map((service, index) => (
              <div key={index} className="group bg-navy-900/50 border border-neon-blue-500/20 rounded-lg p-8 hover:border-neon-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue-500/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-orbitron group-hover:text-neon-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 font-inter">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gradient-lime-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-orbitron">
              {t('financial.process.title')} <span className="text-gradient">{t('financial.process.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              {t('financial.process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-neon-blue-500 to-transparent z-0"></div>
                )}
                
                <div className="relative bg-navy-800/50 border border-neon-blue-500/20 rounded-lg p-6 text-center hover:border-neon-blue-500/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white font-orbitron">{step.number}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 font-orbitron">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 font-inter">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-neon-blue-400">
                    <Clock className="w-4 h-4" />
                    <span className="font-inter">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Types Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-orbitron">
              {t('financial.fundingTypes.title')} <span className="text-gradient">{t('financial.fundingTypes.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              {t('financial.fundingTypes.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fundingTypes.map((type, index) => (
              <div key={index} className="bg-navy-900/50 border border-neon-blue-500/20 rounded-lg p-8 hover:border-neon-blue-500/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-orbitron">{type.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 font-inter text-center">
                  {type.description}
                </p>
                
                <ul className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gradient-lime-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 font-inter">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-orbitron">
              {t('financial.whyChoose.title')} <span className="text-gradient">{t('financial.whyChoose.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              {t('financial.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4 font-orbitron group-hover:text-neon-blue-400 transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-gray-300 font-inter">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-orbitron">
              {t('financial.results.title')} <span className="text-gradient">{t('financial.results.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              {t('financial.results.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="bg-navy-900/50 border border-neon-blue-500/20 rounded-lg p-8 hover:border-neon-blue-500/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-neon-blue-500/10">
                  <div className="text-4xl font-bold text-gradient mb-2 font-orbitron">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2 font-orbitron">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-400 font-inter">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue-500/10 to-gradient-lime-500/10 border-t border-neon-blue-500/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-orbitron">
            {t('financial.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-inter">
            {t('financial.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-primary flex items-center space-x-2 text-center justify-center"
            >
              <Calculator className="w-5 h-5" />
              <span>{t('financial.cta.freeTest')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary flex items-center space-x-2 text-center justify-center"
            >
              <Users className="w-5 h-5" />
              <span>{t('financial.cta.consultation')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServices; 