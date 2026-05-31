import { Metadata } from 'next';

type Props = {
  params: { platform: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const platform = params.platform;
  const capitalizedPlatform = platform.charAt(0).toUpperCase() + platform.slice(1);
  
  return {
    title: `Redirecting to ${capitalizedPlatform} | VSNEXOS`,
    description: `Please wait while we redirect you to VSNEXOS ${capitalizedPlatform} page.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function RedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
