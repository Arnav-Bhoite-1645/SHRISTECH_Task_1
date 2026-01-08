import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle, 
  MessageSquare, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight,
  Star,
  Globe,
  Layout,
  MousePointer2
} from 'lucide-react';
import About from './About.jsx';
import Pricing from './components/Pricing.jsx';
import Privacy from './components/Privacy.jsx';
import Terms from './components/Terms.jsx';

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

        /* Navigation */
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

        /* Hero */
        .hero {
          position: relative;
          padding-top: 8rem;
          padding-bottom: 5rem;
          text-align: center;
          overflow: hidden;
        }

        .hero-blobs {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 80rem;
          height: 100%;
          z-index: -1;
          opacity: 0.2;
          pointer-events: none;
        }

        .blob-1 {
          position: absolute;
          top: 0;
          right: 0;
          width: 500px;
          height: 500px;
          background: #818cf8;
          border-radius: 50%;
          filter: blur(120px);
        }

        .blob-2 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 500px;
          height: 500px;
          background: #c084fc;
          border-radius: 50%;
          filter: blur(120px);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #eef2ff;
          border: 1px solid #e0e7ff;
          color: var(--primary);
          padding: 0.375rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 2rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .hero-title { font-size: 4.5rem; }
        }

        .gradient-text {
          background: linear-gradient(to right, #4f46e5, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: var(--slate-600);
          max-width: 42rem;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 640px) {
          .hero-actions { flex-direction: row; }
        }

        .btn-hero-primary {
          width: 100%;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          box-shadow: 0 20px 25px -5px rgba(79, 70, 229, 0.2);
        }

        @media (min-width: 640px) {
          .btn-hero-primary { width: auto; }
        }

        .btn-hero-outline {
          width: 100%;
          padding: 1rem 2rem;
          background: white;
          color: var(--slate-700);
          border: 1px solid var(--slate-200);
          border-radius: 1rem;
          font-weight: 700;
          font-size: 1.125rem;
          text-decoration: none;
          transition: all 0.2s;
        }

        @media (min-width: 640px) {
          .btn-hero-outline { width: auto; }
        }

        .social-proof {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(226, 232, 240, 0.6);
        }

        .social-proof-text {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--slate-400);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }

        .social-logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          opacity: 0.4;
          filter: grayscale(1);
        }

        @media (min-width: 768px) {
          .social-logos { gap: 4rem; }
        }

        .logo-item {
          font-size: 1.5rem;
          font-weight: 900;
        }

        /* Features */
        .features-section {
          padding: 6rem 0;
          background: white;
        }

        .section-header {
          text-align: center;
          max-width: 48rem;
          margin: 0 auto 5rem;
        }

        .section-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .section-title { font-size: 2.25rem; }
        }

        .features-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .features-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .feature-card {
          padding: 2rem;
          border-radius: 1.5rem;
          background: var(--slate-50);
          border: 1px solid var(--slate-100);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          background: white;
          border-color: #e0e7ff;
          box-shadow: 0 25px 50px -12px rgba(79, 70, 229, 0.1);
          transform: translateY(-5px);
        }

        .feature-icon-wrapper {
          padding: 1rem;
          background: white;
          border-radius: 1rem;
          display: inline-block;
          margin-bottom: 1.5rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        /* Testimonial */
        .testimonial-section {
          padding: 6rem 0;
          background: var(--primary);
          color: white;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .testimonial-quote {
          font-size: 1.875rem;
          font-weight: 500;
          margin-bottom: 2.5rem;
          line-height: 1.3;
        }

        @media (min-width: 768px) {
          .testimonial-quote { font-size: 2.25rem; }
        }

        /* Registration Card */
        .register-section {
          padding: 6rem 0;
        }

        .register-card {
          background: white;
          border-radius: 2.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .register-card { flex-direction: row; }
        }

        .register-info {
          padding: 2.5rem;
          flex: 1;
          border-bottom: 1px solid var(--slate-100);
        }

        @media (min-width: 768px) {
          .register-info { padding: 3.5rem; border-bottom: none; border-right: 1px solid var(--slate-100); }
        }

        .register-form-area {
          padding: 2.5rem;
          flex: 1;
          background: rgba(248, 250, 252, 0.5);
        }

        @media (min-width: 768px) {
          .register-form-area { padding: 3.5rem; }
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: 1rem;
          border: 1px solid var(--slate-200);
          outline: none;
          transition: all 0.2s;
        }

        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
        }

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

      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-blobs">
          <div className="blob-1"></div>
          <div className="blob-2"></div>
        </div>

        <div className="container">
          <div className="badge">
            <span style={{height: '8px', width: '8px', background: 'var(--primary)', borderRadius: '50%'}}></span>
            New: Spark AI v2.0 is live
          </div>
          
          <h1 className="hero-title">
            Design faster with <br />
            <span className="gradient-text">Automated Creativity</span>
          </h1>
          
          <p className="hero-subtitle">
            The world's first AI platform built specifically for high-performance marketing teams. Automate your workflow, not your vision.
          </p>

          <div className="hero-actions">
            <a href="#register" className="btn-primary btn-hero-primary">
              Get Started for Free <ArrowRight size={20} />
            </a>
            <a href="#features" className="btn-hero-outline">
              Explore Features
            </a>
          </div>

          <div className="social-proof">
            <p className="social-proof-text">Trusted by 2,000+ modern teams</p>
            <div className="social-logos">
              <span className="logo-item">VELOCITY</span>
              <span className="logo-item">NEXUS</span>
              <span className="logo-item">PRISM</span>
              <span className="logo-item">ORBIT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Powerful tools for elite creators</h2>
            <p style={{color:'var(--slate-600)'}}>Stop wasting time on repetitive tasks. Our platform handles the heavy lifting so you can focus on strategy.</p>
          </div>

          <div className="features-grid">
            {[
              { icon: <Layout size={32} color="#4f46e5" />, title: "Smart Layouts", desc: "AI-driven design engine that suggests optimal arrangements for your content instantly." },
              { icon: <Globe size={32} color="#9333ea" />, title: "Global Sync", desc: "Deploy your assets across 50+ platforms with a single click, perfectly formatted every time." },
              { icon: <ShieldCheck size={32} color="#10b981" />, title: "Asset Security", desc: "Enterprise-grade encryption for all your creative work. Your data remains yours." },
              { icon: <MousePointer2 size={32} color="#f97316" />, title: "One-Click Edits", desc: "Batch update colors, typography, and logos across thousands of files simultaneously." },
              { icon: <MessageSquare size={32} color="#3b82f6" />, title: "Team Collab", desc: "Built-in feedback loops and versioning designed for fast-moving creative agencies." },
              { icon: <Zap size={32} color="#f59e0b" />, title: "Ultra Fast", desc: "Rendering engine that delivers production-ready assets in under 5 seconds." }
            ].map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 style={{fontSize:'1.25rem', fontWeight:'700', marginBottom:'0.75rem'}}>{feature.title}</h3>
                <p style={{color:'var(--slate-600)', fontSize:'0.9375rem'}}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container" style={{maxWidth:'64rem'}}>
          <div style={{display:'flex', justifyContent:'center', gap:'0.25rem', marginBottom:'2rem'}}>
            {[...Array(5)].map((_, i) => <Star key={i} fill="#facc15" color="#facc15" size={24} />)}
          </div>
          <blockquote className="testimonial-quote">
            "SparkFlow didn't just speed up our workflow; it transformed how our agency thinks about scale. We're producing 4x the content with the same headcount."
          </blockquote>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem'}}>
            <div style={{width:'56px', height:'56px', background:'#818cf8', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'700', fontSize:'1.25rem', border:'2px solid rgba(255,255,255,0.2)'}}>
              SM
            </div>
            <div style={{textAlign:'left'}}>
              <p style={{fontWeight:'700', fontSize:'1.125rem'}}>Sarah Jenkins</p>
              <p style={{color:'#e0e7ff'}}>CDO at Velocity Media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="register-section">
        <div className="container" style={{maxWidth:'56rem'}}>
          <div className="register-card">
            <div className="register-info">
              <h2 style={{fontSize:'1.875rem', fontWeight:'700', marginBottom:'1rem'}}>Start your free journey</h2>
              <p style={{color:'var(--slate-500)', marginBottom:'2rem'}}>Join thousands of creators who've already switched to a smarter workflow.</p>
              
              <ul style={{listStyle:'none', display:'grid', gap:'1rem', marginBottom:'2rem'}}>
                {[
                  "14-day full feature trial",
                  "No credit card required",
                  "Unlimited project exports",
                  "Cancel anytime with one click"
                ].map((item, i) => (
                  <li key={i} style={{display:'flex', alignItems:'center', gap:'0.75rem', color:'var(--slate-600)'}}>
                    <CheckCircle color="#4f46e5" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div style={{paddingTop:'2rem', borderTop:'1px solid var(--slate-50)'}}>
                <p style={{fontSize:'0.875rem', color:'var(--slate-400)', fontWeight:'500'}}>Need a custom plan?</p>
                <a href="#" style={{color:'var(--primary)', fontWeight:'700', textDecoration:'none'}}>Contact Sales</a>
              </div>
            </div>

            <div className="register-form-area">
              {formStatus === 'success' ? (
                <div style={{textAlign:'center', padding:'2rem 0'}}>
                  <div style={{width:'80px', height:'80px', background:'var(--emerald-100)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.5rem'}}>
                    <CheckCircle color="var(--emerald-600)" size={40} />
                  </div>
                  <h3 style={{fontSize:'1.5rem', fontWeight:'700', marginBottom:'0.5rem'}}>You're on the list!</h3>
                  <p style={{color:'var(--slate-600)'}}>Check your inbox to activate your account.</p>
                  <button onClick={() => setFormStatus('idle')} style={{background:'none', border:'none', color:'var(--primary)', fontWeight:'700', marginTop:'2rem', cursor:'pointer'}}>Register another team</button>
                </div>
              ) : (
                <form onSubmit={handleRegister}>
                  <div className="form-group">
                    <label className="form-label">Team Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Acme Agency"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group" style={{marginBottom:'1.5rem'}}>
                    <label className="form-label">Work Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="you@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <button 
                    className="btn-primary" 
                    style={{width:'100%', padding:'1.25rem', fontSize:'1.125rem', boxShadow: '0 20px 25px -5px rgba(79, 70, 229, 0.2)'}}
                    disabled={formStatus === 'loading'}
                  >
                    {formStatus === 'loading' ? 'Setting up...' : 'Create My Account'}
                  </button>
                  <p style={{textAlign:'center', fontSize:'0.75rem', color:'var(--slate-400)', marginTop:'1rem'}}>
                    By registering, you agree to our <Link to="/terms" style={{color:'inherit'}}>Terms</Link> and <Link to="/privacy" style={{color:'inherit'}}>Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
      } />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default App;