import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
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
          --slate-800: #1e293b;
          --slate-900: #0f172a;
          --white: #ffffff;
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

        .py-16 { padding-top: 4rem; padding-bottom: 4rem; }

        .terms-header {
          text-align: center;
          padding: 4rem 0 2rem;
        }

        .terms-title {
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--slate-900);
        }

        .terms-subtitle {
          font-size: 1.125rem;
          color: var(--slate-600);
          max-width: 48rem;
          margin: 0 auto;
        }

        .terms-content {
          max-width: 65ch;
          margin: 0 auto;
          padding: 2rem 0 4rem;
          line-height: 1.7;
        }

        .terms-section {
          margin-bottom: 2.5rem;
        }

        .terms-section h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--slate-900);
        }

        .terms-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem;
          color: var(--slate-800);
        }

        .terms-section p {
          margin-bottom: 1rem;
          color: var(--slate-700);
        }

        .terms-section ul {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .terms-section li {
          margin-bottom: 0.5rem;
          color: var(--slate-700);
        }

        .btn-back {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--slate-100);
          color: var(--slate-700);
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }

        .btn-back:hover {
          background: var(--slate-200);
          color: var(--slate-900);
        }

        .last-updated {
          text-align: center;
          color: var(--slate-500);
          font-size: 0.875rem;
          margin-bottom: 2rem;
        }
      `}</style>

      <div className="container py-16">
        <div className="terms-header">
          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-subtitle">
            Please read these terms carefully before using our services.
          </p>
          <p className="last-updated">Last updated: January 8, 2026</p>
        </div>

        <div className="terms-content">
          <div className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using SparkFlow ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Description of Service</h2>
            <p>
              SparkFlow is an AI-powered platform designed to help marketing teams automate their creative workflows. Our services include content generation, design automation, asset management, and collaboration tools.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. User Accounts</h2>
            <h3>Account Creation</h3>
            <p>
              To use certain features of our Service, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3>Account Responsibilities</h3>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Be responsible for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>4. Acceptable Use Policy</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Use the Service for any fraudulent or illegal purpose</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>5. Intellectual Property</h2>
            <h3>Our Content</h3>
            <p>
              The Service and its original content, features, and functionality are owned by SparkFlow and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3>User Content</h3>
            <p>
              You retain ownership of content you create or upload to the Service. By using the Service, you grant us a limited license to use, store, and process your content as necessary to provide the Service.
            </p>

            <h3>AI-Generated Content</h3>
            <p>
              For content generated by our AI tools, you own the output but acknowledge that it may be based on training data and patterns learned by our AI systems.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Payment and Billing</h2>
            <h3>Fees</h3>
            <p>
              Some features of our Service require payment. All fees are clearly disclosed before you incur them.
            </p>

            <h3>Payment Terms</h3>
            <p>
              Payments are processed securely through third-party providers. You agree to pay all charges associated with your account.
            </p>

            <h3>Refunds</h3>
            <p>
              Refund policies vary by subscription plan and are detailed in our pricing information.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
            </p>
          </div>

          <div className="terms-section">
            <h2>8. Disclaimers</h2>
            <p>
              The Service is provided "as is" and "as available" without warranties of any kind. We do not guarantee that the Service will be uninterrupted, error-free, or secure.
            </p>
            <p>
              We are not responsible for any damages arising from your use of the Service, to the extent permitted by applicable law.
            </p>
          </div>

          <div className="terms-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              In no event shall SparkFlow be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service.
            </p>
          </div>

          <div className="terms-section">
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless SparkFlow from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.
            </p>
          </div>

          <div className="terms-section">
            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="terms-section">
            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Your continued use after changes constitutes acceptance.
            </p>
          </div>

          <div className="terms-section">
            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>Email: legal@sparkflow.com</li>
              <li>Address: 123 Innovation Drive, Tech City, TC 12345</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div style={{textAlign: 'center'}}>
          <button onClick={() => window.history.back()} className="btn-back">
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;