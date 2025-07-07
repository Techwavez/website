import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Info, RefreshCw, Trash2, Settings } from 'lucide-react';

const LanguageDebugger: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [debugInfo, setDebugInfo] = useState<any>({});

  useEffect(() => {
    const gatherDebugInfo = () => {
      setDebugInfo({
        // Current state
        currentLanguage: language,
        savedPreference: localStorage.getItem('preferred-language'),
        
        // Browser info
        browserLanguage: navigator.language,
        browserLanguages: navigator.languages,
        
        // Detection logic simulation
        detectedLanguage: detectLanguageSimulation(),
        
        // Additional info
        userAgent: navigator.userAgent.split(' ').slice(-2).join(' '), // Last 2 parts for brevity
        timestamp: new Date().toLocaleString(),
      });
    };

    const detectLanguageSimulation = () => {
      const saved = localStorage.getItem('preferred-language');
      if (saved) return `${saved} (from localStorage)`;
      
      const browserLangs = navigator.languages || [navigator.language];
      for (const lang of browserLangs) {
        const code = lang.split('-')[0].toLowerCase();
        if (code === 'fr') return `fr (from browser: ${lang})`;
        if (code === 'en') return `en (from browser: ${lang})`;
      }
      return 'en (fallback)';
    };

    gatherDebugInfo();
  }, [language]);

  const clearPreference = () => {
    localStorage.removeItem('preferred-language');
    window.location.reload();
  };

  const simulateLanguage = (lang: string) => {
    // This would normally require changing browser settings
    alert(`To test ${lang}:\n1. Open browser settings\n2. Change language preference to ${lang}\n3. Clear localStorage\n4. Refresh page`);
  };

  const testScenarios = [
    {
      name: 'French Browser',
      description: 'Browser set to French (fr-FR, fr-CA, etc.)',
      expected: 'Should auto-detect French',
      action: () => simulateLanguage('French')
    },
    {
      name: 'English Browser',
      description: 'Browser set to English (en-US, en-GB, etc.)',
      expected: 'Should auto-detect English',
      action: () => simulateLanguage('English')
    },
    {
      name: 'Other Language',
      description: 'Browser set to German, Spanish, etc.',
      expected: 'Should fallback to English',
      action: () => simulateLanguage('German/Spanish')
    },
    {
      name: 'Clear Preference',
      description: 'Remove saved language preference',
      expected: 'Should re-detect from browser',
      action: clearPreference
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-navy-800/95 backdrop-blur-md border border-navy-700 rounded-xl p-6 max-w-md shadow-2xl">
        <div className="flex items-center space-x-3 mb-4">
          <Globe className="w-5 h-5 text-neon-blue-500" />
          <h3 className="text-lg font-space-grotesk font-bold text-white">Language Debug Panel</h3>
        </div>

        {/* Current Status */}
        <div className="bg-navy-700/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-neon-blue-400 mb-2 flex items-center">
            <Info className="w-4 h-4 mr-2" />
            Current Status
          </h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Active Language:</span>
              <span className="text-white font-semibold">{debugInfo.currentLanguage?.toUpperCase()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Browser Language:</span>
              <span className="text-white">{debugInfo.browserLanguage}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Saved Preference:</span>
              <span className="text-white">{debugInfo.savedPreference || 'None'}</span>
            </div>
            <div className="pt-2 border-t border-navy-600">
              <span className="text-gray-300">Detection Result:</span>
              <div className="text-gradient-lime-400 text-xs mt-1">{debugInfo.detectedLanguage}</div>
            </div>
          </div>
        </div>

        {/* Browser Languages */}
        <div className="bg-navy-700/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-neon-blue-400 mb-2">Browser Language Stack</h4>
          <div className="space-y-1">
            {debugInfo.browserLanguages?.map((lang: string, index: number) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-300">#{index + 1}:</span>
                <span className="text-white">{lang}</span>
                <span className={`text-xs px-2 py-1 rounded ${
                  lang.startsWith('fr') ? 'bg-green-500/20 text-green-400' :
                  lang.startsWith('en') ? 'bg-blue-500/20 text-blue-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {lang.startsWith('fr') ? 'FR' : lang.startsWith('en') ? 'EN' : 'OTHER'}
                </span>
              </div>
            )) || []}
          </div>
        </div>

        {/* Test Actions */}
        <div className="bg-navy-700/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-neon-blue-400 mb-3 flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Test Actions
          </h4>
          <div className="space-y-2">
            <button
              onClick={clearPreference}
              className="w-full flex items-center justify-center space-x-2 bg-red-500/20 text-red-400 px-3 py-2 rounded text-sm hover:bg-red-500/30 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Saved Preference</span>
            </button>
            
            <button
              onClick={() => window.location.reload()}
              className="w-full flex items-center justify-center space-x-2 bg-neon-blue-500/20 text-neon-blue-400 px-3 py-2 rounded text-sm hover:bg-neon-blue-500/30 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh & Re-detect</span>
            </button>
          </div>
        </div>

        {/* Manual Test Controls */}
        <div className="flex space-x-2">
          <button
            onClick={() => setLanguage('en')}
            className={`flex-1 px-3 py-2 rounded text-sm transition-colors ${
              language === 'en' 
                ? 'bg-neon-blue-500 text-navy-900 font-semibold' 
                : 'bg-navy-700 text-white hover:bg-navy-600'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('fr')}
            className={`flex-1 px-3 py-2 rounded text-sm transition-colors ${
              language === 'fr' 
                ? 'bg-gradient-lime-500 text-navy-900 font-semibold' 
                : 'bg-navy-700 text-white hover:bg-navy-600'
            }`}
          >
            Français
          </button>
        </div>

        <div className="mt-3 text-xs text-gray-400 text-center">
          Last updated: {debugInfo.timestamp}
        </div>
      </div>
    </div>
  );
};

export default LanguageDebugger; 