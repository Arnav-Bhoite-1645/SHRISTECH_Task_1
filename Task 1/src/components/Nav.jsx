import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const Nav = ({ isMenuOpen, setIsMenuOpen, isScrolled }) => {
  return (
    <>
      <style>{`
        nav {
          position: fixed;
          width: 100%;
          z-index: 50;
          transition: all 0.3s ease;
          padding: 1.25rem 0;
        }

        nav.scrolled {
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          padding: 0.75rem 0;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-icon {
          background-color: var(--primary);
          padding: 0.375rem;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .nav-links {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .nav-links { display: flex; }
        }

        .nav-link {
          text-decoration: none;
          color: var(--slate-600);
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .mobile-toggle {
          display: block;
          background: none;
          border: none;
          color: var(--slate-600);
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .mobile-toggle { display: none; }
        }

        .mobile-menu {
          position: absolute;
          width: 100%;
          left: 0;
          background: white;
          border-bottom: 1px solid var(--slate-100);
          padding: 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav-content">
          <div className="logo-area">
            <div className="logo-icon">
              <Zap className="text-white" size={24} />
            </div>
            <span className="logo-text">SparkFlow</span>
          </div>

          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it Works</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <Link to="/about" className="nav-link">About Us</Link>
            <a href="#register" className="btn-primary">Get Started</a>
          </div>

          <button 
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#features" className="nav-link" style={{display:'block', padding:'1rem 0'}} onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="nav-link" style={{display:'block', padding:'1rem 0'}} onClick={() => setIsMenuOpen(false)}>How it Works</a>
            <a href="#pricing" className="nav-link" style={{display:'block', padding:'1rem 0'}} onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <Link to="/about" className="nav-link" style={{display:'block', padding:'1rem 0'}} onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <a href="#register" className="btn-primary" style={{display:'block', textAlign:'center', marginTop:'1rem'}} onClick={() => setIsMenuOpen(false)}>Register Now</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;