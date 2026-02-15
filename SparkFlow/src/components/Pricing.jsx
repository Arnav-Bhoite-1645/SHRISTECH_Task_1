import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'Starter',
      price: '199/-',
      period: 'per month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic integrations',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '499/-',
      period: 'per month',
      description: 'Ideal for growing agencies and teams',
      features: [
        'Up to 25 team members',
        '100GB storage',
        'Advanced integrations',
        'Priority support',
        'Custom templates',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '999/-',
      period: 'per month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'All integrations',
        '24/7 phone support',
        'White-label solution',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" style={{
      padding: '6rem 0',
      background: 'linear-gradient(to bottom, #f8fafc, #ffffff)'
    }}>
      <div className="container">
        <div className="section-header" style={{textAlign: 'center', maxWidth: '48rem', margin: '0 auto 5rem'}}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'var(--slate-900)'
          }}>
            Choose the perfect plan for your team
          </h2>
          <p style={{
            color: 'var(--slate-600)',
            fontSize: '1.125rem',
            lineHeight: '1.6'
          }}>
            Start free and scale as you grow. All plans include a 14-day trial.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gap: '2rem',
          maxWidth: '64rem',
          margin: '0 auto'
        }}>
          {plans.map((plan, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--slate-200)',
              position: 'relative',
              boxShadow: plan.popular ? '0 25px 50px -12px rgba(79, 70, 229, 0.25)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              transform: plan.popular ? 'scale(1.05)' : 'none'
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <Star size={14} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  color: 'var(--slate-900)'
                }}>
                  {plan.name}
                </h3>
                <p style={{
                  color: 'var(--slate-600)',
                  marginBottom: '1.5rem'
                }}>
                  {plan.description}
                </p>
                <div style={{marginBottom: '1rem'}}>
                  <span style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: 'var(--slate-900)'
                  }}>
                    {plan.price}
                  </span>
                  <span style={{
                    color: 'var(--slate-600)',
                    fontSize: '1rem'
                  }}>
                    {' '}{plan.period}
                  </span>
                </div>
              </div>

              <ul style={{
                listStyle: 'none',
                marginBottom: '2rem'
              }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                    color: 'var(--slate-700)'
                  }}>
                    <Check size={20} color="#10b981" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleScrollTo('register')}
                style={{
                width: '100%',
                padding: '1rem 2rem',
                background: plan.popular ? 'var(--primary)' : 'white',
                color: plan.popular ? 'white' : 'var(--slate-700)',
                border: plan.popular ? 'none' : '1px solid var(--slate-200)',
                borderRadius: '0.75rem',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: plan.popular ? '0 10px 15px -3px rgba(79, 70, 229, 0.2)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (plan.popular) {
                  e.target.style.background = 'var(--primary-hover)';
                } else {
                  e.target.style.background = 'var(--slate-50)';
                }
              }}
              onMouseLeave={(e) => {
                if (plan.popular) {
                  e.target.style.background = 'var(--primary)';
                } else {
                  e.target.style.background = 'white';
                }
              }}>
                {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          paddingTop: '3rem',
          borderTop: '1px solid var(--slate-200)'
        }}>
          <p style={{
            color: 'var(--slate-600)',
            marginBottom: '1rem'
          }}>
            Need a custom solution?
          </p>
          <button 
            onClick={() => handleScrollTo('register')}
            style={{
            color: 'var(--primary)',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '1.125rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}>
            Contact our sales team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
