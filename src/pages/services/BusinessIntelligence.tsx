import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Database, 
  Eye,
  PieChart,
  LineChart,
  Activity,
  Target,
  Zap,
  Brain,
  Filter,
  Globe,
  Workflow,
  Bot,
  Phone,
  Users,
  Mail,
  FileText,
  Settings,
  Clock,
  MessageSquare
} from 'lucide-react';

const BusinessIntelligence: React.FC = () => {
  const { t } = useLanguage();
  const capabilities = [
    {
      icon: Workflow,
      title: t('automation.feature1'),
      description: t('automation.capabilities.processAutomation.description'),
    },
    {
      icon: Mail,
      title: t('automation.feature2'),
      description: t('automation.capabilities.marketingAutomation.description'),
    },
    {
      icon: Phone,
      title: t('automation.feature3'),
      description: t('automation.capabilities.aiVocalAgents.description'),
    },
    {
      icon: Users,
      title: t('automation.capabilities.recruitmentAutomation.title'),
      description: t('automation.capabilities.recruitmentAutomation.description'),
    },
    {
      icon: FileText,
      title: t('automation.capabilities.opponentReporting.title'),
      description: t('automation.capabilities.opponentReporting.description'),
    },
    {
      icon: Settings,
      title: t('automation.capabilities.customIntegrations.title'),
      description: t('automation.capabilities.customIntegrations.description'),
    },
  ];

  const automationServices = [
    {
      icon: Workflow,
      title: t('automation.services.businessProcess.title'),
      features: [
        t('automation.services.businessProcess.feature1'),
        t('automation.services.businessProcess.feature2'),
        t('automation.services.businessProcess.feature3'),
        t('automation.services.businessProcess.feature4'),
        t('automation.services.businessProcess.feature5')
      ]
    },
    {
      icon: Mail,
      title: t('automation.services.marketingPlatform.title'),
      features: [
        t('automation.services.marketingPlatform.feature1'),
        t('automation.services.marketingPlatform.feature2'),
        t('automation.services.marketingPlatform.feature3'),
        t('automation.services.marketingPlatform.feature4'),
        t('automation.services.marketingPlatform.feature5')
      ]
    },
    {
      icon: Phone,
      title: t('automation.services.aiVocalSystem.title'),
      features: [
        t('automation.services.aiVocalSystem.feature1'),
        t('automation.services.aiVocalSystem.feature2'),
        t('automation.services.aiVocalSystem.feature3'),
        t('automation.services.aiVocalSystem.feature4'),
        t('automation.services.aiVocalSystem.feature5')
      ]
    }
  ];

  const automationTypes = [
    {
      icon: Workflow,
      title: t('automation.types.processAutomation.title'),
      description: t('automation.types.processAutomation.description'),
      useCases: [
        t('automation.types.processAutomation.useCase1'),
        t('automation.types.processAutomation.useCase2'),
        t('automation.types.processAutomation.useCase3'),
        t('automation.types.processAutomation.useCase4')
      ]
    },
    {
      icon: Mail,
      title: t('automation.types.marketingAutomation.title'),
      description: t('automation.types.marketingAutomation.description'),
      useCases: [
        t('automation.types.marketingAutomation.useCase1'),
        t('automation.types.marketingAutomation.useCase2'),
        t('automation.types.marketingAutomation.useCase3'),
        t('automation.types.marketingAutomation.useCase4')
      ]
    },
    {
      icon: Phone,
      title: t('automation.types.coldCalling.title'),
      description: t('automation.types.coldCalling.description'),
      useCases: [
        t('automation.types.coldCalling.useCase1'),
        t('automation.types.coldCalling.useCase2'),
        t('automation.types.coldCalling.useCase3'),
        t('automation.types.coldCalling.useCase4')
      ]
    },
    {
      icon: Users,
      title: t('automation.types.recruitmentAutomation.title'),
      description: t('automation.types.recruitmentAutomation.description'),
      useCases: [
        t('automation.types.recruitmentAutomation.useCase1'),
        t('automation.types.recruitmentAutomation.useCase2'),
        t('automation.types.recruitmentAutomation.useCase3'),
        t('automation.types.recruitmentAutomation.useCase4')
      ]
    },
  ];

  const platforms = [
    {
      name: t('automation.platforms.zapier.name'),
      description: t('automation.platforms.zapier.description'),
      features: [
        t('automation.platforms.zapier.feature1'),
        t('automation.platforms.zapier.feature2'),
        t('automation.platforms.zapier.feature3'),
        t('automation.platforms.zapier.feature4')
      ]
    },
    {
      name: t('automation.platforms.powerAutomate.name'),
      description: t('automation.platforms.powerAutomate.description'),
      features: [
        t('automation.platforms.powerAutomate.feature1'),
        t('automation.platforms.powerAutomate.feature2'),
        t('automation.platforms.powerAutomate.feature3'),
        t('automation.platforms.powerAutomate.feature4')
      ]
    },
    {
      name: t('automation.platforms.customAI.name'),
      description: t('automation.platforms.customAI.description'),
      features: [
        t('automation.platforms.customAI.feature1'),
        t('automation.platforms.customAI.feature2'),
        t('automation.platforms.customAI.feature3'),
        t('automation.platforms.customAI.feature4')
      ]
    },
    {
      name: t('automation.platforms.hubspot.name'),
      description: t('automation.platforms.hubspot.description'),
      features: [
        t('automation.platforms.hubspot.feature1'),
        t('automation.platforms.hubspot.feature2'),
        t('automation.platforms.hubspot.feature3'),
        t('automation.platforms.hubspot.feature4')
      ]
    },
  ];

  const implementationSteps = [
    {
      step: t('automation.implementation.step1.title'),
      description: t('automation.implementation.step1.description'),
      deliverables: [
        t('automation.implementation.step1.deliverable1'),
        t('automation.implementation.step1.deliverable2'),
        t('automation.implementation.step1.deliverable3')
      ]
    },
    {
      step: t('automation.implementation.step2.title'),
      description: t('automation.implementation.step2.description'),
      deliverables: [
        t('automation.implementation.step2.deliverable1'),
        t('automation.implementation.step2.deliverable2'),
        t('automation.implementation.step2.deliverable3')
      ]
    },
    {
      step: t('automation.implementation.step3.title'),
      description: t('automation.implementation.step3.description'),
      deliverables: [
        t('automation.implementation.step3.deliverable1'),
        t('automation.implementation.step3.deliverable2'),
        t('automation.implementation.step3.deliverable3')
      ]
    },
    {
      step: t('automation.implementation.step4.title'),
      description: t('automation.implementation.step4.description'),
      deliverables: [
        t('automation.implementation.step4.deliverable1'),
        t('automation.implementation.step4.deliverable2'),
        t('automation.implementation.step4.deliverable3')
      ]
    },
  ];

  const metrics = [
    { value: '75%', label: t('automation.results.timeSavings'), description: t('automation.results.timeSavingsDescription') },
    { value: '90%', label: t('automation.results.accuracyRate'), description: t('automation.results.accuracyDescription') },
    { value: '300%', label: t('automation.results.roiIncrease'), description: t('automation.results.roiDescription') },
    { value: '24/7', label: t('automation.results.operation'), description: t('automation.results.operationDescription') },
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
                <BarChart3 className="w-8 h-8 text-neon-blue-500" />
                <span className="text-neon-blue-400 font-inter font-medium">{t('services.businessAutomation')}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold text-white mb-6 leading-tight">
                {t('automation.hero.title')}
                <span className="block bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent">
                  {t('automation.hero.titleHighlight')}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 font-inter mb-8 leading-relaxed">
                {t('automation.hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>{t('automation.hero.automateBusiness')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-neon-blue-500 text-neon-blue-500 px-8 py-4 rounded-lg font-inter font-semibold hover:bg-neon-blue-500/10 transition-all duration-300 text-center"
                >
                  {t('automation.hero.viewDemo')}
                </Link>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                    {t('automation.hero.controlCenter')}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-navy-700/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300 font-inter text-sm">{t('automation.hero.activeWorkflows')}</span>
                          <Workflow className="w-4 h-4 text-gradient-lime-500" />
                        </div>
                        <div className="text-2xl font-space-grotesk font-bold text-white">47</div>
                        <div className="text-gradient-lime-400 font-inter text-xs">+12 this month</div>
                      </div>
                      
                      <div className="bg-navy-700/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300 font-inter text-sm">{t('automation.hero.aiCalls')}</span>
                          <Phone className="w-4 h-4 text-neon-blue-500" />
                        </div>
                        <div className="text-2xl font-space-grotesk font-bold text-white">1.2K</div>
                        <div className="text-neon-blue-400 font-inter text-xs">{t('automation.hero.today')}</div>
                      </div>
                    </div>

                    <div className="bg-navy-700/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-300 font-inter text-sm">{t('automation.hero.performance')}</span>
                        <TrendingUp className="w-4 h-4 text-neon-blue-500" />
                      </div>
                      <div className="h-20 bg-gradient-to-r from-neon-blue-500/20 to-gradient-lime-500/20 rounded flex items-end space-x-1 p-2">
                        {[60, 75, 55, 90, 70, 95, 85].map((height, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-t from-neon-blue-500 to-gradient-lime-500 rounded-sm flex-1"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-navy-700/50 rounded-lg p-3">
                        <div className="text-lg font-space-grotesk font-bold text-gradient-lime-500">98%</div>
                        <div className="text-xs text-gray-400 font-inter">{t('automation.hero.uptime')}</div>
                      </div>
                      <div className="bg-navy-700/50 rounded-lg p-3">
                        <div className="text-lg font-space-grotesk font-bold text-neon-blue-500">75%</div>
                        <div className="text-xs text-gray-400 font-inter">{t('automation.hero.timeSaved')}</div>
                      </div>
                      <div className="bg-navy-700/50 rounded-lg p-3">
                        <div className="text-lg font-space-grotesk font-bold text-gradient-lime-500">24/7</div>
                        <div className="text-xs text-gray-400 font-inter">{t('automation.hero.active')}</div>
                      </div>
                    </div>
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
              {t('automation.capabilities.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('automation.capabilities.subtitle')}
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

      {/* Automation Services Detail Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('automation.services.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('automation.services.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {automationServices.map((service, index) => (
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

      {/* Automation Types Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('automation.solutions.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('automation.solutions.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-gradient-lime-500/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <type.icon className="w-10 h-10 text-gradient-lime-500" />
                    <div className="absolute inset-0 w-10 h-10 bg-gradient-lime-500/20 rounded-full blur-md"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-300 font-inter leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-space-grotesk font-semibold text-neon-blue-400 mb-3">
                    Key Use Cases:
                  </h4>
                  {type.useCases.map((useCase, useCaseIndex) => (
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

      {/* Platforms Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('automation.platforms.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('automation.platforms.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-gradient-lime-500/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-3">
                  {platform.name}
                </h3>
                <p className="text-gray-300 font-inter mb-6 leading-relaxed">
                  {platform.description}
                </p>
                
                <div className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-gradient-lime-500 flex-shrink-0" />
                      <span className="text-gray-300 font-inter text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('automation.results.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('automation.results.subtitle')}
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

      {/* Implementation Process Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('automation.process.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('automation.process.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-neon-blue-500/20 rounded-full flex items-center justify-center">
                        <span className="text-neon-blue-400 font-space-grotesk font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-space-grotesk font-bold text-white">
                        {step.step}
                      </h3>
                    </div>
                    <p className="text-gray-300 font-inter leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-space-grotesk font-semibold text-neon-blue-400 mb-3">
                      {t('automation.implementation.keyDeliverables')}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-gradient-lime-500 flex-shrink-0" />
                          <span className="text-gray-300 font-inter text-sm">{deliverable}</span>
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-neon-blue-500/10 to-gradient-lime-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-in-up">
            <Bot className="w-16 h-16 text-neon-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('automation.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter mb-8 leading-relaxed">
              {t('automation.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Workflow className="w-5 h-5" />
                <span>{t('automation.cta.startJourney')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligence;