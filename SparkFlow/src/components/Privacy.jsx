import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
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

        .privacy-header {
          text-align: center;
          padding: 4rem 0 2rem;
        }

        .privacy-title {
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--slate-900);
        }

        .privacy-subtitle {
          font-size: 1.125rem;
          color: var(--slate-600);
          max-width: 48rem;
          margin: 0 auto;
        }

        .privacy-content {
          max-width: 65ch;
          margin: 0 auto;
          padding: 2rem 0 4rem;
          line-height: 1.7;
        }

        .privacy-section {
          margin-bottom: 2.5rem;
        }

        .privacy-section h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--slate-900);
        }

        .privacy-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem;
          color: var(--slate-800);
        }

        .privacy-section p {
          margin-bottom: 1rem;
          color: var(--slate-700);
        }

        .privacy-section ul {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .privacy-section li {
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
        <div className="privacy-header">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="last-updated">Last updated: January 8, 2026</p>
        </div>

        <div className="privacy-content">
          <div className="privacy-section">
            <h2>1. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:
            </p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials and profile information</li>
              <li>Payment information (processed securely by third-party providers)</li>
              <li>Communications you send to us</li>
            </ul>

            <h3>Usage Information</h3>
            <p>
              We automatically collect certain information about your use of our services, including:
            </p>
            <ul>
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Performance data (load times, error reports)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our services</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication requirements</li>
              <li>Secure data centers and infrastructure</li>
            </ul>
            <p>
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          <div className="privacy-section">
            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </div>

          <div className="privacy-section">
            <h2>6. Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
              <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          <div className="privacy-section">
            <h2>7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage, and assist in our marketing efforts. You can control cookie settings through your browser preferences, though disabling cookies may affect service functionality.
            </p>
          </div>

          <div className="privacy-section">
            <h2>8. Third-Party Services</h2>
            <p>
              Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external parties. We encourage you to review their privacy policies.
            </p>
          </div>

          <div className="privacy-section">
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
            </p>
          </div>

          <div className="privacy-section">
            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.
            </p>
          </div>

          <div className="privacy-section">
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div className="privacy-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us:
            </p>
            <ul>
              <li>Email: privacy@sparkflow.com</li>
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

export default Privacy;
