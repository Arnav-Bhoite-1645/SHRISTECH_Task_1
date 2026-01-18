import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: white;
          padding: 5rem 0 2rem;
          border-top: 1px solid var(--slate-100);
        }

        .footer-grid {
          display: grid;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div style={{gridColumn: 'span 2'}}>
              <div className="logo-area" style={{marginBottom:'1.5rem'}}>
                <div className="logo-icon" style={{padding:'0.25rem'}}>
                  <Zap className="text-white" size={20} />
                </div>
                <span className="logo-text">SparkFlow</span>
              </div>
              <p style={{color:'var(--slate-500)', maxWidth:'24rem', marginBottom:'1.5rem'}}>
                Leading the next generation of creative production with AI-powered tools for teams that refuse to move slow.
              </p>
            </div>
            
            <div>
              <h4 style={{fontSize:'0.75rem', fontWeight:'700', textTransform:'uppercase', color:'var(--slate-900)', marginBottom:'1.5rem', letterSpacing:'0.1em'}}>Product</h4>
              <ul style={{listStyle:'none', display:'grid', gap:'1rem', color:'var(--slate-500)', fontSize:'0.875rem'}}>
                <li>Integrations</li>
                <li>API Docs</li>
                <li>Case Studies</li>
              </ul>
            </div>

            <div>
              <h4 style={{fontSize:'0.75rem', fontWeight:'700', textTransform:'uppercase', color:'var(--slate-900)', marginBottom:'1.5rem', letterSpacing:'0.1em'}}>Company</h4>
              <ul style={{listStyle:'none', display:'grid', gap:'1rem', color:'var(--slate-500)', fontSize:'0.875rem'}}>
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          
          <div style={{paddingTop:'2rem', borderTop:'1px solid var(--slate-100)', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'0.875rem', color:'var(--slate-400)'}}>
            <p>© 2024 SparkFlow Technologies. All rights reserved.</p>
            <div style={{display:'flex', gap:'2rem'}}>
              <Link to="/privacy" style={{color: 'inherit', textDecoration: 'none'}}>Privacy</Link>
              <Link to="/terms" style={{color: 'inherit', textDecoration: 'none'}}>Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;