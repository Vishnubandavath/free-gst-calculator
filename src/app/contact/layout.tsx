import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact VSNEXOS | Get in Touch',
  description: 'Have questions or feedback? Contact the VSNEXOS team for any queries regarding our GST calculator or other tools.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
