import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Zap, Search, Users, Mail } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-lime-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-in-up">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-space-grotesk font-bold bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>

          {/* Icon */}
          <div className="relative mb-8 inline-block">
            <Search className="w-16 h-16 text-neon-blue-500 mx-auto" />
            <div className="absolute inset-0 w-16 h-16 bg-neon-blue-500/20 rounded-full blur-2xl mx-auto"></div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 font-inter mb-8 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring our innovative tech solutions.
          </p>

          {/* Navigation Options */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-space-grotesk font-semibold text-white mb-6">
              Where would you like to go?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/"
                className="flex items-center space-x-3 p-4 bg-navy-700/50 rounded-lg hover:bg-neon-blue-500/10 hover:border-neon-blue-500/50 border border-transparent transition-all duration-300"
              >
                <Home className="w-5 h-5 text-neon-blue-500" />
                <div className="text-left">
                  <div className="text-white font-inter font-medium">Homepage</div>
                  <div className="text-gray-400 font-inter text-sm">Explore our services</div>
                </div>
              </Link>
              
              <Link
                to="/services/ai-advisory"
                className="flex items-center space-x-3 p-4 bg-navy-700/50 rounded-lg hover:bg-neon-blue-500/10 hover:border-neon-blue-500/50 border border-transparent transition-all duration-300"
              >
                <Zap className="w-5 h-5 text-gradient-lime-500" />
                <div className="text-left">
                  <div className="text-white font-inter font-medium">AI Advisory</div>
                  <div className="text-gray-400 font-inter text-sm">AI solutions & strategy</div>
                </div>
              </Link>
              
              <Link
                to="/about"
                className="flex items-center space-x-3 p-4 bg-navy-700/50 rounded-lg hover:bg-neon-blue-500/10 hover:border-neon-blue-500/50 border border-transparent transition-all duration-300"
              >
                <Users className="w-5 h-5 text-neon-blue-500" />
                <div className="text-left">
                  <div className="text-white font-inter font-medium">About Us</div>
                  <div className="text-gray-400 font-inter text-sm">Our team & mission</div>
                </div>
              </Link>
              
              <Link
                to="/contact"
                className="flex items-center space-x-3 p-4 bg-navy-700/50 rounded-lg hover:bg-neon-blue-500/10 hover:border-neon-blue-500/50 border border-transparent transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-gradient-lime-500" />
                <div className="text-left">
                  <div className="text-white font-inter font-medium">Contact</div>
                  <div className="text-gray-400 font-inter text-sm">Get in touch</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="group bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Back to Homepage</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group border-2 border-neon-blue-500 text-neon-blue-500 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-neon-blue-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-gray-400 font-inter text-sm">
            <p>
              If you believe this is an error, please{' '}
              <Link to="/contact" className="text-neon-blue-400 hover:text-gradient-lime-400 transition-colors duration-300">
                contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;