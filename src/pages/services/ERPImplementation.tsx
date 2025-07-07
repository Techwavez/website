import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Settings, 
  TrendingUp,
  Users,
  Shield,
  Clock,
  Target,
  BarChart3,
  Workflow,
  Cloud,
  Code,
  Layers,
  Server,
  GitBranch,
  Wrench
} from 'lucide-react';

const ERPImplementation: React.FC = () => {
  const { t } = useLanguage();
  const solutions = [
    {
      icon: Cloud,
      title: t('erp.services.cloudHosting.title'),
      description: t('erp.services.cloudHosting.description'),
    },
    {
      icon: GitBranch,
      title: t('erp.services.multiEnvironment.title'),
      description: t('erp.services.multiEnvironment.description'),
    },
    {
      icon: Code,
      title: t('erp.services.customDevelopment.title'),
      description: t('erp.services.customDevelopment.description'),
    },
    {
      icon: Workflow,
      title: t('erp.services.processOptimization.title'),
      description: t('erp.services.processOptimization.description'),
    },
    {
      icon: Users,
      title: t('erp.services.changeManagement.title'),
      description: t('erp.services.changeManagement.description'),
    },
    {
      icon: Shield,
      title: t('erp.services.securityCompliance.title'),
      description: t('erp.services.securityCompliance.description'),
    },
  ];

  const odooServices = [
    {
      icon: Server,
      title: t('erp.expertise.hosting.title'),
      features: [
        t('erp.expertise.hosting.feature1'),
        t('erp.expertise.hosting.feature2'),
        t('erp.expertise.hosting.feature3'),
        t('erp.expertise.hosting.feature4'),
        t('erp.expertise.hosting.feature5')
      ]
    },
    {
      icon: Layers,
      title: t('erp.expertise.multiEnvironment.title'),
      features: [
        t('erp.expertise.multiEnvironment.feature1'),
        t('erp.expertise.multiEnvironment.feature2'),
        t('erp.expertise.multiEnvironment.feature3'),
        t('erp.expertise.multiEnvironment.feature4'),
        t('erp.expertise.multiEnvironment.feature5')
      ]
    },
    {
      icon: Wrench,
      title: t('erp.expertise.customDevelopment.title'),
      features: [
        t('erp.expertise.customDevelopment.feature1'),
        t('erp.expertise.customDevelopment.feature2'),
        t('erp.expertise.customDevelopment.feature3'),
        t('erp.expertise.customDevelopment.feature4'),
        t('erp.expertise.customDevelopment.feature5')
      ]
    }
  ];

  const erpPlatforms = [
    {
      name: t('erp.platforms.enterprise.name'),
      description: t('erp.platforms.enterprise.description'),
      features: [
        t('erp.platforms.enterprise.feature1'),
        t('erp.platforms.enterprise.feature2'),
        t('erp.platforms.enterprise.feature3'),
        t('erp.platforms.enterprise.feature4')
      ]
    },
    {
      name: t('erp.platforms.community.name'),
      description: t('erp.platforms.community.description'),
      features: [
        t('erp.platforms.community.feature1'),
        t('erp.platforms.community.feature2'),
        t('erp.platforms.community.feature3'),
        t('erp.platforms.community.feature4')
      ]
    },
    {
      name: t('erp.platforms.custom.name'),
      description: t('erp.platforms.custom.description'),
      features: [
        t('erp.platforms.custom.feature1'),
        t('erp.platforms.custom.feature2'),
        t('erp.platforms.custom.feature3'),
        t('erp.platforms.custom.feature4')
      ]
    },
    {
      name: t('erp.platforms.odooSh.name'),
      description: t('erp.platforms.odooSh.description'),
      features: [
        t('erp.platforms.odooSh.feature1'),
        t('erp.platforms.odooSh.feature2'),
        t('erp.platforms.odooSh.feature3'),
        t('erp.platforms.odooSh.feature4')
      ]
    },
  ];

  const implementationPhases = [
    {
      phase: t('erp.process.phase1.title'),
      duration: t('erp.process.phase1.duration'),
      activities: [
        t('erp.process.phase1.activity1'),
        t('erp.process.phase1.activity2'),
        t('erp.process.phase1.activity3'),
        t('erp.process.phase1.activity4')
      ]
    },
    {
      phase: t('erp.process.phase2.title'),
      duration: t('erp.process.phase2.duration'),
      activities: [
        t('erp.process.phase2.activity1'),
        t('erp.process.phase2.activity2'),
        t('erp.process.phase2.activity3'),
        t('erp.process.phase2.activity4')
      ]
    },
    {
      phase: t('erp.process.phase3.title'),
      duration: t('erp.process.phase3.duration'),
      activities: [
        t('erp.process.phase3.activity1'),
        t('erp.process.phase3.activity2'),
        t('erp.process.phase3.activity3'),
        t('erp.process.phase3.activity4')
      ]
    },
    {
      phase: t('erp.process.phase4.title'),
      duration: t('erp.process.phase4.duration'),
      activities: [
        t('erp.process.phase4.activity1'),
        t('erp.process.phase4.activity2'),
        t('erp.process.phase4.activity3'),
        t('erp.process.phase4.activity4')
      ]
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: t('erp.results.fasterDeployment'),
      description: t('erp.results.fasterDescription')
    },
    {
      icon: Clock,
      title: t('erp.results.uptime'),
      description: t('erp.results.uptimeDescription')
    },
    {
      icon: Target,
      title: t('erp.results.customSolutions'),
      description: t('erp.results.customDescription')
    },
    {
      icon: Shield,
      title: t('erp.results.secureCompliant'),
      description: t('erp.results.secureDescription')
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-lime-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-8 h-8 text-gradient-lime-500" />
                <span className="text-gradient-lime-400 font-inter font-medium">{t('services.erpImplementation')}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold text-white mb-6 leading-tight">
                {t('erp.hero.title')}
                <span className="block bg-gradient-to-r from-gradient-lime-500 to-neon-blue-500 bg-clip-text text-transparent">
                  {t('erp.hero.titleHighlight')}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 font-inter mb-8 leading-relaxed">
                {t('erp.hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-gradient-lime-500 to-neon-blue-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold hover:shadow-2xl hover:shadow-gradient-lime-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>{t('erp.hero.startJourney')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-gradient-lime-500 text-gradient-lime-500 px-8 py-4 rounded-lg font-inter font-semibold hover:bg-gradient-lime-500/10 transition-all duration-300 text-center"
                >
                  {t('erp.hero.viewDemo')}
                </Link>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                    {t('erp.hero.stackTitle')}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-navy-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Cloud className="w-5 h-5 text-gradient-lime-500" />
                        <span className="text-white font-inter">{t('erp.hero.cloudHosting')}</span>
                      </div>
                      <span className="text-gradient-lime-400 font-inter text-sm">{t('erp.hero.active')}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-navy-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <GitBranch className="w-5 h-5 text-neon-blue-500" />
                        <span className="text-white font-inter">{t('erp.hero.multiEnvironment')}</span>
                      </div>
                      <span className="text-neon-blue-400 font-inter text-sm">{t('erp.hero.configured')}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-navy-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Code className="w-5 h-5 text-gradient-lime-500" />
                        <span className="text-white font-inter">{t('erp.hero.customDevelopment')}</span>
                      </div>
                      <span className="text-gradient-lime-400 font-inter text-sm">{t('erp.hero.ready')}</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-lime-500/10 rounded-lg border border-gradient-lime-500/20">
                    <p className="text-gradient-lime-400 font-inter text-sm">
                      <strong>{t('erp.hero.completeSolution')}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('erp.services.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('erp.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-gradient-lime-500/50 hover:bg-navy-800/70 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <solution.icon className="w-12 h-12 text-gradient-lime-500 group-hover:text-neon-blue-500 transition-colors duration-300" />
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-lime-500/20 rounded-full blur-md group-hover:bg-neon-blue-500/20 transition-colors duration-300"></div>
                </div>
                
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-4 group-hover:text-gradient-lime-400 transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-gray-300 font-inter leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Odoo Services Detail Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('erp.expertise.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('erp.expertise.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {odooServices.map((service, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-gradient-lime-500/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative">
                        <service.icon className="w-10 h-10 text-gradient-lime-500" />
                        <div className="absolute inset-0 w-10 h-10 bg-gradient-lime-500/20 rounded-full blur-md"></div>
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

      {/* Odoo Platforms Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('erp.platforms.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('erp.platforms.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {erpPlatforms.map((platform, index) => (
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

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('erp.results.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('erp.results.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6 inline-block">
                  <benefit.icon className="w-16 h-16 text-gradient-lime-500 mx-auto" />
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-lime-500/20 rounded-full blur-md mx-auto"></div>
                </div>
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('erp.process.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('erp.process.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {implementationPhases.map((phase, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-lime-500/20 rounded-full flex items-center justify-center">
                        <span className="text-gradient-lime-400 font-space-grotesk font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-space-grotesk font-bold text-white">
                          {phase.phase}
                        </h3>
                        <p className="text-gradient-lime-400 font-inter text-sm">
                          {phase.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-gradient-lime-500 flex-shrink-0" />
                          <span className="text-gray-300 font-inter text-sm">{activity}</span>
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
      <section className="py-24 bg-gradient-to-r from-gradient-lime-500/10 to-neon-blue-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-in-up">
            <Database className="w-16 h-16 text-gradient-lime-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('erp.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter mb-8 leading-relaxed">
              {t('erp.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-gradient-lime-500 to-neon-blue-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-gradient-lime-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Cloud className="w-5 h-5" />
                <span>{t('erp.cta.startProject')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPImplementation;