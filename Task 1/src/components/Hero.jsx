import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
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
      `}</style>

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
            <button 
              onClick={() => handleScrollTo('register')}
              className="btn-primary btn-hero-primary"
              style={{border: 'none', cursor: 'pointer'}}
            >
              Get Started for Free <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => handleScrollTo('features')}
              className="btn-hero-outline"
              style={{border: '1px solid var(--slate-200)', cursor: 'pointer'}}
            >
              Explore Features
            </button>
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
    </>
  );
};

export default Hero;