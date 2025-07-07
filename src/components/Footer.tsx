import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-800 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <Zap className="w-8 h-8 text-neon-blue-500" />
              <span className="text-xl font-space-grotesk font-bold text-white">
                TechWave Office
              </span>
            </Link>
            <p className="text-gray-300 font-inter text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-space-grotesk font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/ai-advisory"
                  className="text-gray-300 hover:text-neon-blue-400 font-inter text-sm transition-colors duration-300"
                >
                  {t('services.aiAdvisory')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/erp-implementation"
                  className="text-gray-300 hover:text-neon-blue-400 font-inter text-sm transition-colors duration-300"
                >
                  {t('services.erpImplementation')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/business-intelligence"
                  className="text-gray-300 hover:text-neon-blue-400 font-inter text-sm transition-colors duration-300"
                >
                  {t('services.businessAutomation')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-space-grotesk font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-neon-blue-400 font-inter text-sm transition-colors duration-300"
                >
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-neon-blue-400 font-inter text-sm transition-colors duration-300"
                >
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-space-grotesk font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-neon-blue-500" />
                <a
                  href="mailto:contact@techwaveoffice.com"
                  className="text-gray-300 hover:text-neon-blue-400 font-inter text-sm transition-colors duration-300"
                >
                  contact@techwaveoffice.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-neon-blue-500" />
                <a
                  href="tel:+1-555-123-4567"
                  className="text-gray-300 hover:text-neon-blue-400 font-inter text-sm transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-neon-blue-500 mt-0.5" />
                <span className="text-gray-300 font-inter text-sm">
                  4 rue sergent bobillot<br />
                  Créteil, Val-de-marne 94000
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-inter text-sm">
              © 2024 TechWave Office. {t('footer.allRightsReserved')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-neon-blue-400 font-inter text-sm transition-colors duration-300"
              >
                {t('footer.privacyPolicy')}
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-neon-blue-400 font-inter text-sm transition-colors duration-300"
              >
                {t('footer.termsOfService')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;