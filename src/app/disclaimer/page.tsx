import React from 'react';
import { Metadata } from 'next';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = {
  title: 'Disclaimer | VSNEXOS',
  description: 'Legal disclaimer for VSNEXOS GST Calculator regarding accuracy, liability and usage of the tool.',
};

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="May 30, 2026">
      <h2>1. No Professional Advice</h2>
      <p>The information provided by VSNEXOS on this website is for general informational purposes only and does not constitute professional financial, tax, or legal advice. While we strive to provide accurate and up-to-date information, users should consult a qualified professional for advice tailored to their specific circumstances.</p>

      <h2>2. Accuracy of Calculations</h2>
      <p>We provide GST calculation tools to help estimate taxes. Although great care is taken to ensure the calculator functions correctly, we do not guarantee calculations will be completely error-free. Always verify calculations independently before relying on them for official filings.</p>

      <h2>3. Limitation of Liability</h2>
      <p>VSNEXOS and its affiliates will not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this site or reliance on any information provided.</p>

      <h2>4. External Links</h2>
      <p>Our website may contain links to external sites. We are not responsible for the content or practices of those third-party websites.</p>

      <h2>5. Changes to the Disclaimer</h2>
      <p>We may update this disclaimer at any time. Users are encouraged to review this page periodically for changes.</p>
    </LegalLayout>
  );
}
