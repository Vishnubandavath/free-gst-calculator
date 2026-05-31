import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GST FAQ Hub | Common Questions Answered',
  description: 'Find answers to common questions about GST, registration, filing, and calculations in India.',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
