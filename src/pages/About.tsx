import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Globe,
  Shield,
  TrendingUp,
  Brain,
  Database,
  BarChart3
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: Shield,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description')
    },
    {
      icon: Users,
      title: t('about.values.clientSuccess.title'),
      description: t('about.values.clientSuccess.description')
    },
    {
      icon: TrendingUp,
      title: t('about.values.growth.title'),
      description: t('about.values.growth.description')
    }
  ];

  const team = [
    {
      name: 'Severine Dick',
      role: t('about.team.ceo.role'),
      expertise: t('about.team.ceo.expertise'),
      experience: '16+ years',
      description: t('about.team.ceo.description'),
    },
    {
      name: 'Pincemail Sebastien',
      role: t('about.team.cto.role'),
      expertise: t('about.team.cto.expertise'),
      experience: '14+ years',
      description: t('about.team.cto.description'),
    },
    {
      name: 'Wefactorit',
      role: t('about.team.head.role'),
      expertise: t('about.team.head.expertise'),
      experience: '7+ years',
      description: t('about.team.head.description'),
    },
    {
      name: 'Webiconographie',
      role: t('about.team.principal.role'),
      expertise: t('about.team.principal.expertise'),
      experience: '13+ years',
      description: t('about.team.principal.description'),
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: t('about.achievements.recognition.title'),
      items: [
        t('about.achievements.recognition.item1'),
        t('about.achievements.recognition.item2'),
        t('about.achievements.recognition.item3'),
        t('about.achievements.recognition.item4')
      ]
    },
    {
      icon: Globe,
      title: t('about.achievements.reach.title'),
      items: [
        t('about.achievements.reach.item1'),
        t('about.achievements.reach.item2'),
        t('about.achievements.reach.item3'),
        t('about.achievements.reach.item4')
      ]
    },
    {
      icon: Users,
      title: t('about.achievements.team.title'),
      items: [
        t('about.achievements.team.item1'),
        t('about.achievements.team.item2'),
        t('about.achievements.team.item3'),
        t('about.achievements.team.item4')
      ]
    }
  ];

  const services = [
    {
      icon: Brain,
      title: t('services.aiAdvisory'),
      description: t('about.services.ai.description')
    },
    {
      icon: Database,
      title: t('services.erpImplementation'),
      description: t('about.services.erp.description')
    },
    {
      icon: BarChart3,
      title: t('services.businessAutomation'),
      description: t('about.services.automation.description')
    }
  ];

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
              {t('about.hero.title')}
              <span className="block bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent">
                {t('about.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-8">
                {t('about.mission.title')}
              </h2>
              <p className="text-xl text-gray-300 font-inter leading-relaxed mb-8">
                {t('about.mission.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gradient-lime-500" />
                  <span className="text-gray-300 font-inter">{t('about.mission.point1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gradient-lime-500" />
                  <span className="text-gray-300 font-inter">{t('about.mission.point2')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gradient-lime-500" />
                  <span className="text-gray-300 font-inter">{t('about.mission.point3')}</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8">
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                  {t('about.vision.title')}
                </h3>
                <p className="text-gray-300 font-inter leading-relaxed mb-6">
                  {t('about.vision.description')}
                </p>
                <div className="bg-gradient-to-r from-neon-blue-500/10 to-gradient-lime-500/10 rounded-lg p-6 border border-neon-blue-500/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="w-6 h-6 text-neon-blue-500" />
                    <span className="text-neon-blue-400 font-space-grotesk font-semibold">
                      {t('about.vision.futureReady')}
                    </span>
                  </div>
                  <p className="text-gray-300 font-inter text-sm">
                    {t('about.vision.futureDescription')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-neon-blue-500/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <value.icon className="w-10 h-10 text-neon-blue-500" />
                    <div className="absolute inset-0 w-10 h-10 bg-neon-blue-500/20 rounded-full blur-md"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-space-grotesk font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 font-inter leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-gradient-lime-500/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gradient-lime-400 font-inter font-medium mb-1">
                    {member.role}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 font-inter mb-4">
                    <span>{member.expertise}</span>
                    <span>•</span>
                    <span>{member.experience}</span>
                  </div>
                  <p className="text-gray-300 font-inter leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('about.achievements.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('about.achievements.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 text-center animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6 inline-block">
                  <achievement.icon className="w-12 h-12 text-neon-blue-500 mx-auto" />
                  <div className="absolute inset-0 w-12 h-12 bg-neon-blue-500/20 rounded-full blur-md mx-auto"></div>
                </div>
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-6">
                  {achievement.title}
                </h3>
                <div className="space-y-3">
                  {achievement.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3 justify-center">
                      <CheckCircle className="w-4 h-4 text-gradient-lime-500 flex-shrink-0" />
                      <span className="text-gray-300 font-inter text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('about.services.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
              {t('about.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 hover:border-neon-blue-500/50 transition-all duration-300 text-center animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6 inline-block">
                  <service.icon className="w-12 h-12 text-neon-blue-500 group-hover:text-gradient-lime-500 transition-colors duration-300" />
                  <div className="absolute inset-0 w-12 h-12 bg-neon-blue-500/20 rounded-full blur-md group-hover:bg-gradient-lime-500/20 transition-colors duration-300"></div>
                </div>
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 font-inter leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center animate-slide-in-up">
            <Link
              to="/services/ai-advisory"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>{t('about.services.exploreServices')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-neon-blue-500/10 to-gradient-lime-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-in-up">
            <img 
              src="/Techwave Office Logo Symbol.png" 
              alt="TechWave Office Logo" 
              className="object-contain mx-auto mb-6"
              style={{ width: '140px', height: '140px' }}
            />
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 font-inter mb-8 leading-relaxed">
              {t('about.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                {t('about.cta.startConversation')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;