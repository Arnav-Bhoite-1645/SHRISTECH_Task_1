import React from 'react';
import { Star } from 'lucide-react';

const Testimonial = () => {
  return (
    <>
      <style>{`
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
      `}</style>

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
    </>
  );
};

export default Testimonial;