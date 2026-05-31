import React from 'react';
import { Metadata } from 'next';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = {
  title: 'Terms & Conditions | VSNEXOS',
  description: 'Please read our terms and conditions carefully before using the VSNEXOS GST calculator tools.',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="May 30, 2026">
      <section className="space-y-6">
        <p>Welcome to VSNEXOS! These terms and conditions outline the rules and regulations for the use of VSNEXOS's Website, located at free-gst-calculator.vsnexos.com.</p>

        <h2>1. Agreement to Terms</h2>
        <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use VSNEXOS if you do not agree to take all of the terms and conditions stated on this page.</p>

        <h2>2. Intellectual Property Rights</h2>
        <p>Other than the content you own, under these Terms, VSNEXOS and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.</p>

        <h2>3. Usage Limitations</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>Publishing any Website material in any other media without credit.</li>
          <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
          <li>Using this Website in any way that is or may be damaging to this Website.</li>
          <li>Using this Website in any way that impacts user access to this Website.</li>
        </ul>

        <h2>4. Calculator Accuracy Disclaimer</h2>
        <p>The calculators provided on VSNEXOS are for informational purposes only. While we strive for 100% accuracy based on the latest GST rules in India, we do not guarantee that the results are error-free. Users should verify all calculations independently before using them for official tax filings or financial decisions.</p>

        <h2>5. User Responsibilities</h2>
        <p>Users are responsible for ensuring that the data they input into the calculators is accurate. VSNEXOS is not responsible for any financial loss or legal issues arising from the use of incorrect data or reliance on the tool's output for official purposes.</p>

        <h2>6. Limitation of Liability</h2>
        <p>In no event shall VSNEXOS, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. VSNEXOS, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>

        <h2>7. Indemnification</h2>
        <p>You hereby indemnify to the fullest extent VSNEXOS from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>

        <h2>8. Variation of Terms</h2>
        <p>VSNEXOS is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>

        <h2>9. Governing Law & Jurisdiction</h2>
        <p>These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.</p>
      </section>
    </LegalLayout>
  );
}
