import React from 'react';
import { Layout, Globe, ShieldCheck, MousePointer2, MessageSquare, Zap } from 'lucide-react';

const Features = () => {
  return (
    <>
      <style>{`
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
      `}</style>

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
    </>
  );
};

export default Features;