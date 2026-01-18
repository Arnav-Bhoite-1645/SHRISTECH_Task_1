import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Register = ({ formData, setFormData, formStatus, setFormStatus, handleRegister }) => {
  return (
    <>
      <style>{`
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
      `}</style>

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
    </>
  );
};

export default Register;