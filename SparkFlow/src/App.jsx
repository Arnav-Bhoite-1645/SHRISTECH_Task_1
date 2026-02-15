import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About.jsx';
import Pricing from './components/Pricing.jsx';
import Privacy from './components/Privacy.jsx';
import Terms from './components/Terms.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Testimonial from './components/Testimonial.jsx';
import Register from './components/Register.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '' });
    }, 1500);
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="app-container">
      <style>{`
        :root {
          --primary: #4f46e5;
          --primary-hover: #4338ca;
          --slate-50: #f8fafc;
          --slate-100: #f1f5f9;
          --slate-200: #e2e8f0;
          --slate-400: #94a3b8;
          --slate-500: #64748b;
          --slate-600: #475569;
          --slate-700: #334155;
          --slate-900: #0f172a;
          --white: #ffffff;
          --emerald-100: #d1fae5;
          --emerald-600: #059669;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', -apple-system, sans-serif;
          color: var(--slate-900);
          background-color: var(--slate-50);
          line-height: 1.5;
        }

        .app-container {
          min-height: 100vh;
          overflow-x: hidden;
        }

        .container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .btn-primary {
          background-color: var(--primary);
          color: var(--white);
          padding: 0.625rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          background-color: var(--primary-hover);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .btn-primary:active {
          transform: scale(0.95);
        }
      `}</style>

      {/* Navigation */}
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isScrolled={isScrolled} />

      {/* Hero Section */}
      <Hero />

      {/* Features Grid */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Registration Section */}
      <Register formData={formData} setFormData={setFormData} formStatus={formStatus} setFormStatus={setFormStatus} handleRegister={handleRegister} />

      {/* Footer */}
      <Footer />
    </div>
      } />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default App;