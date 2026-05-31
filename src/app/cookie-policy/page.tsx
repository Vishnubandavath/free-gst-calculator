import React from 'react';
import { Metadata } from 'next';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = {
  title: 'Cookie Policy | VSNEXOS',
  description: 'Learn about how we use cookies to improve your experience on our website.',
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="May 28, 2026">
      <h2>1. What Are Cookies</h2>
      <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience.</p>

      <h2>2. How We Use Cookies</h2>
      <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>

      <h2>3. The Cookies We Set</h2>
      <ul>
        <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it.</li>
        <li><strong>Theme cookies:</strong> We use cookies to remember your preference for dark or light mode.</li>
      </ul>

      <h2>4. Third Party Cookies</h2>
      <p>In some special cases we also use cookies provided by trusted third parties.</p>
      <ul>
        <li><strong>Google Analytics:</strong> This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience.</li>
        <li><strong>Google AdSense:</strong> The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.</li>
      </ul>

      <h2>5. Disabling Cookies</h2>
      <p>You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>

      <h2>6. More Information</h2>
      <p>Hopefully that has clarified things for you. If you are still looking for more information then you can contact us through one of our preferred contact methods at <strong>business@vsnexos.com</strong>.</p>
    </LegalLayout>
  );
}
