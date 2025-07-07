import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-navy-800/50 border border-navy-700 hover:border-neon-blue-500/50 transition-all duration-300 group"
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      <Languages className="w-4 h-4 text-gray-400 group-hover:text-neon-blue-400 transition-colors duration-300" />
      <span className="text-sm font-inter font-medium text-gray-300 group-hover:text-neon-blue-400 transition-colors duration-300">
        {language === 'en' ? 'FR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;