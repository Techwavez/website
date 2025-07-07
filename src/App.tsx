import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import AIAdvisory from './pages/services/AIAdvisory';
import ERPImplementation from './pages/services/ERPImplementation';
import BusinessIntelligence from './pages/services/BusinessIntelligence';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/ai-advisory" element={<AIAdvisory />} />
            <Route path="/services/erp-implementation" element={<ERPImplementation />} />
            <Route path="/services/business-intelligence" element={<BusinessIntelligence />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;