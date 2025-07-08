import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: t('nav.home'), path: '/' },
    { 
      name: t('nav.services'), 
      path: '/services',
      subItems: [
        { name: t('services.aiAdvisory'), path: '/services/ai-advisory' },
        { name: t('services.erpImplementation'), path: '/services/erp-implementation' },
        { name: t('services.businessAutomation'), path: '/services/business-intelligence' },
        { name: t('services.financialServices'), path: '/services/financial-services' },
      ]
    },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-neon-blue-500 group-hover:text-gradient-lime-500 transition-colors duration-300" />
              <div className="absolute inset-0 w-8 h-8 bg-neon-blue-500/20 rounded-full blur-md group-hover:bg-gradient-lime-500/20 transition-colors duration-300"></div>
            </div>
            <span className="text-xl font-space-grotesk font-bold text-white group-hover:text-neon-blue-400 transition-colors duration-300">
              TechWave Office
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <div className="relative">
                    <button className={`font-inter font-medium transition-colors duration-300 hover:text-neon-blue-400 ${
                      isActivePath(item.path) ? 'text-neon-blue-500' : 'text-white'
                    }`}>
                      {item.name}
                    </button>
                    <div className="absolute top-full left-0 w-56 bg-navy-800/95 backdrop-blur-md rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                      <div className="py-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block px-4 py-3 text-sm font-inter transition-colors duration-300 hover:bg-neon-blue-500/10 hover:text-neon-blue-400 ${
                              isActivePath(subItem.path) ? 'text-neon-blue-500 bg-neon-blue-500/5' : 'text-white'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-inter font-medium transition-colors duration-300 hover:text-neon-blue-400 ${
                      isActivePath(item.path) ? 'text-neon-blue-500' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-6 py-2 rounded-lg font-inter font-medium hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              {t('nav.getStarted')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-navy-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-navy-800/95 backdrop-blur-md shadow-2xl rounded-b-lg">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <div>
                      <div className="text-white font-inter font-medium mb-2">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block py-2 text-sm font-inter transition-colors duration-300 hover:text-neon-blue-400 ${
                              isActivePath(subItem.path) ? 'text-neon-blue-500' : 'text-gray-300'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 font-inter font-medium transition-colors duration-300 hover:text-neon-blue-400 ${
                        isActivePath(item.path) ? 'text-neon-blue-500' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-navy-700">
                <LanguageSwitcher />
              </div>
              
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-6 py-2 rounded-lg font-inter font-medium mt-4"
              >
                {t('nav.getStarted')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;