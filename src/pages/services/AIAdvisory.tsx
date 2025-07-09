import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  TrendingUp,
  Cpu,
  Database,
  Network,
  Target,
  Users,
  Clock,
  MessageSquare,
  Bot,
  Layers,
  GitBranch,
  Lock,
  Workflow
} from 'lucide-react';

const AIAdvisory: React.FC = () => {
  const { t } = useLanguage();
  const capabilities = [
    {
      icon: Layers,
      title: t('ai.capabilities.multiModel.title'),
      description: t('ai.capabilities.multiModel.description'),
    },
    {
      icon: MessageSquare,
      title: t('ai.capabilities.privateChatbots.title'),
      description: t('ai.capabilities.privateChatbots.description'),
    },
    {
      icon: Bot,
      title: t('ai.capabilities.aiAgentDesign.title'),
      description: t('ai.capabilities.aiAgentDesign.description'),
    },
    {
      icon: Shield,
      title: t('ai.capabilities.aiEthics.title'),
      description: t('ai.capabilities.aiEthics.description'),
    },
    {
      icon: Database,
      title: t('ai.capabilities.dataInfrastructure.title'),
      description: t('ai.capabilities.dataInfrastructure.description'),
    },
    {
      icon: Network,
      title: t('ai.capabilities.aiIntegration.title'),
      description: t('ai.capabilities.aiIntegration.description'),
    },
  ];

  const aiServices = [
    {
      icon: Layers,
      title: t('ai.services.multiModelStrategy.title'),
      features: [
        t('ai.services.multiModelStrategy.feature1'),
        t('ai.services.multiModelStrategy.feature2'),
        t('ai.services.multiModelStrategy.feature3'),
        t('ai.services.multiModelStrategy.feature4'),
        t('ai.services.multiModelStrategy.feature5')
      ]
    },
    {
      icon: Lock,
      title: t('ai.services.privateChatbotDevelopment.title'),
      features: [
        t('ai.services.privateChatbotDevelopment.feature1'),
        t('ai.services.privateChatbotDevelopment.feature2'),
        t('ai.services.privateChatbotDevelopment.feature3'),
        t('ai.services.privateChatbotDevelopment.feature4'),
        t('ai.services.privateChatbotDevelopment.feature5')
      ]
    },
    {
      icon: Workflow,
      title: t('ai.services.aiAgentDesign.title'),
      features: [
        t('ai.services.aiAgentDesign.feature1'),
        t('ai.services.aiAgentDesign.feature2'),
        t('ai.services.aiAgentDesign.feature3'),
        t('ai.services.aiAgentDesign.feature4'),
        t('ai.services.aiAgentDesign.feature5')
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: t('ai.process.step1.title'),
      description: t('ai.process.step1.description'),
      duration: t('ai.process.step1.duration'),
    },
    {
      number: '02',
      title: t('ai.process.step2.title'),
      description: t('ai.process.step2.description'),
      duration: t('ai.process.step2.duration'),
    },
    {
      number: '03',
      title: t('ai.process.step3.title'),
      description: t('ai.process.step3.description'),
      duration: t('ai.process.step3.duration'),
    },
    {
      number: '04',
      title: t('ai.process.step4.title'),
      description: t('ai.process.step4.description'),
      duration: t('ai.process.step4.duration'),
    },
  ];

  const aiSolutions = [
    {
      icon: MessageSquare,
      title: t('ai.solutions.enterpriseChatbots.title'),
      description: t('ai.solutions.enterpriseChatbots.description'),
      useCases: [
        t('ai.solutions.enterpriseChatbots.useCase1'),
        t('ai.solutions.enterpriseChatbots.useCase2'),
        t('ai.solutions.enterpriseChatbots.useCase3'),
        t('ai.solutions.enterpriseChatbots.useCase4')
      ]
    },
    {
      icon: Bot,
      title: t('ai.solutions.businessAiAgents.title'),
      description: t('ai.solutions.businessAiAgents.description'),
      useCases: [
        t('ai.solutions.businessAiAgents.useCase1'),
        t('ai.solutions.businessAiAgents.useCase2'),
        t('ai.solutions.businessAiAgents.useCase3'),
        t('ai.solutions.businessAiAgents.useCase4')
      ]
    },
    {
      icon: Layers,
      title: t('ai.solutions.multiModelSystems.title'),
      description: t('ai.solutions.multiModelSystems.description'),
      useCases: [
        t('ai.solutions.multiModelSystems.useCase1'),
        t('ai.solutions.multiModelSystems.useCase2'),
        t('ai.solutions.multiModelSystems.useCase3'),
        t('ai.solutions.multiModelSystems.useCase4')
      ]
    },
    {
      icon: Network,
      title: t('ai.solutions.aiIntegrationPlatform.title'),
      description: t('ai.solutions.aiIntegrationPlatform.description'),
      useCases: [
        t('ai.solutions.aiIntegrationPlatform.useCase1'),
        t('ai.solutions.aiIntegrationPlatform.useCase2'),
        t('ai.solutions.aiIntegrationPlatform.useCase3'),
        t('ai.solutions.aiIntegrationPlatform.useCase4')
      ]
    },
  ];

  const industries = [
    t('ai.industries.financialServices'),
    t('ai.industries.healthcare'),
    t('ai.industries.manufacturing'),
    t('ai.industries.retail'),
    t('ai.industries.energy'),
    t('ai.industries.transportation'),
  ];

  const metrics = [
    { value: '60%', label: t('ai.results.costReduction'), description: t('ai.results.costDescription') },
    { value: '85%', label: t('ai.results.automationRate'), description: t('ai.results.automationDescription') },
    { value: '24/7', label: t('ai.results.availability'), description: t('ai.results.availabilityDescription') },
    { value: '99.9%', label: t('ai.results.dataSecurity'), description: t('ai.results.dataSecurityDescription') },
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
                <Brain className="w-8 h-8 text-neon-blue-500" />
                <span className="text-neon-blue-400 font-inter font-medium">{t('services.aiAdvisory')}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold text-white mb-6 leading-tight">
                {t('ai.hero.title')}
                <span className="block bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent">
                  {t('ai.hero.titleHighlight')}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 font-inter mb-8 leading-relaxed">
                {t('ai.hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>{t('ai.hero.startJourney')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-neon-blue-500 text-neon-blue-500 px-8 py-4 rounded-lg font-inter font-semibold hover:bg-neon-blue-500/10 transition-all duration-300 text-center"
                >
                  {t('ai.hero.viewDemo')}
                </Link>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                    {t('ai.hero.stackTitle')}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-navy-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Layers className="w-5 h-5 text-neon-blue-500" />
                        <span className="text-white font-inter">{t('ai.hero.multiModel')}</span>
                      </div>
                      <span className="text-neon-blue-400 font-inter text-sm">{t('ai.hero.optimized')}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-navy-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="w-5 h-5 text-gradient-lime-500" />
                        <span className="text-white font-inter">{t('ai.hero.privateChatbots')}</span>
                      </div>
                      <span className="text-gradient-lime-400 font-inter text-sm">{t('ai.hero.secure')}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-navy-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Bot className="w-5 h-5 text-neon-blue-500" />
                        <span className="text-white font-inter">{t('ai.hero.aiAgents')}</span>
                      </div>
                      <span className="text-neon-blue-400 font-inter text-sm">{t('ai.hero.intelligent')}</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-neon-blue-500/10 rounded-lg border border-neon-blue-500/20">
                    <p className="text-neon-blue-400 font-inter text-sm">
                      <strong>{t('ai.hero.readinessScore')}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('ai.capabilities.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('ai.capabilities.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-neon-blue-500/50 hover:bg-navy-800/70 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <capability.icon className="w-12 h-12 text-neon-blue-500 group-hover:text-gradient-lime-500 transition-colors duration-300" />
                  <div className="absolute inset-0 w-12 h-12 bg-neon-blue-500/20 rounded-full blur-md group-hover:bg-gradient-lime-500/20 transition-colors duration-300"></div>
                </div>
                
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-4 group-hover:text-neon-blue-400 transition-colors duration-300">
                  {capability.title}
                </h3>
                
                <p className="text-gray-300 font-inter leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Detail Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('ai.services.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('ai.services.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-neon-blue-500/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative">
                        <service.icon className="w-10 h-10 text-neon-blue-500" />
                        <div className="absolute inset-0 w-10 h-10 bg-neon-blue-500/20 rounded-full blur-md"></div>
                      </div>
                      <h3 className="text-xl font-space-grotesk font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-gradient-lime-500 flex-shrink-0" />
                          <span className="text-gray-300 font-inter text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('ai.solutions.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('ai.solutions.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-gradient-lime-500/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <solution.icon className="w-10 h-10 text-gradient-lime-500" />
                    <div className="absolute inset-0 w-10 h-10 bg-gradient-lime-500/20 rounded-full blur-md"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 font-inter leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-space-grotesk font-semibold text-neon-blue-400 mb-3">
                    {t('ai.solutions.keyUseCases')}
                  </h4>
                  {solution.useCases.map((useCase, useCaseIndex) => (
                    <div key={useCaseIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-gradient-lime-500 flex-shrink-0" />
                      <span className="text-gray-300 font-inter text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('ai.results.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('ai.results.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center bg-navy-800/30 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-space-grotesk font-bold text-neon-blue-500 mb-2">
                  {metric.value}
                </div>
                <h3 className="text-xl font-space-grotesk font-semibold text-white mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-300 font-inter text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('ai.process.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('ai.process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 h-full hover:border-neon-blue-500/50 transition-all duration-300">
                  <div className="text-6xl font-space-grotesk font-bold text-neon-blue-500/30 mb-4">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-space-grotesk font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 font-inter leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="flex items-center space-x-2 text-neon-blue-400">
                    <Clock className="w-4 h-4" />
                    <span className="font-inter text-sm">{step.duration}</span>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-neon-blue-500/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
                {t('ai.industries.title')}
                <span className="block text-neon-blue-500">{t('ai.industries.titleHighlight')}</span>
              </h2>
              <p className="text-xl text-gray-300 font-inter leading-relaxed mb-8">
                {t('ai.industries.subtitle')}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gradient-lime-500" />
                  <span className="text-gray-300 font-inter">{t('ai.industries.feature1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gradient-lime-500" />
                  <span className="text-gray-300 font-inter">{t('ai.industries.feature2')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gradient-lime-500" />
                  <span className="text-gray-300 font-inter">{t('ai.industries.feature3')}</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-6 py-3 rounded-lg font-inter font-semibold hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-300"
              >
                <span>{t('ai.industries.discussIndustry')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 hover:border-neon-blue-500/50 transition-all duration-300 text-center"
                  >
                    <Target className="w-8 h-8 text-neon-blue-500 mx-auto mb-3" />
                    <h3 className="font-space-grotesk font-semibold text-white text-sm">
                      {industry}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-neon-blue-500/10 to-gradient-lime-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-in-up">
            <img 
              src="/Techwave Office Logo Symbol 800x600.jpg" 
              alt="TechWave Office Logo" 
              className="w-20 h-20 object-contain mx-auto mb-6"
            />
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('ai.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter mb-8 leading-relaxed">
              {t('ai.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Bot className="w-5 h-5" />
                <span>{t('ai.cta.startImplementation')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAdvisory;