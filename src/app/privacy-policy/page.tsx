import React from 'react';
import { Metadata } from 'next';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = {
  title: 'Privacy Policy | VSNEXOS',
  description: 'Our privacy policy explains how we handle your data, our use of cookies, and our commitment to your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 30, 2026">
      <section className="space-y-6">
        <p>At VSNEXOS, accessible from free-gst-calculator.vsnexos.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by VSNEXOS and how we use it.</p>

        <h2>1. Information We Collect</h2>
        <p>VSNEXOS follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>

        <h2>2. Cookies and Web Beacons</h2>
        <p>Like any other website, VSNEXOS uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

        <h2>3. Google DoubleClick DART Cookie</h2>
        <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></p>

        <h2>4. Our Advertising Partners</h2>
        <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners include:</p>
        <ul>
          <li>Google AdSense</li>
        </ul>
        <p>Each of our advertising partners has their own Privacy Policy for their policies on user data.</p>

        <h2>5. Third Party Privacy Policies</h2>
        <p>VSNEXOS's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

        <h2>6. Data Retention</h2>
        <p>We retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>

        <h2>7. User Rights (GDPR/CCPA)</h2>
        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <ul>
          <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
          <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
          <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
        </ul>

        <h2>8. Contact Us</h2>
        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>business@vsnexos.com</strong>.</p>
      </section>
    </LegalLayout>
  );
}
