import type { Metadata, Viewport } from 'next';
import { Geist, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './hero-preload.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

const siteUrl = 'https://innodesign.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'innodesign — Agencia de desarrollo de software',
    template: '%s · innodesign',
  },
  description:
    'Agencia de desarrollo de software. Creamos productos digitales que transforman negocios. Desarrollo web, apps móviles, SaaS y consultoría técnica.',
  applicationName: 'innodesign',
  authors: [{ name: 'innodesign', url: siteUrl }],
  keywords: [
    'agencia de software',
    'desarrollo web',
    'apps móviles',
    'SaaS',
    'Next.js',
    'React',
    'consultoría técnica',
    'diseño UI/UX',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'innodesign',
    title: 'innodesign — Agencia de desarrollo de software',
    description:
      'Construimos productos digitales que hacen crecer tu negocio. +80 proyectos entregados globalmente.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'innodesign — Agencia de desarrollo de software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'innodesign — Agencia de desarrollo de software',
    description: 'Construimos productos digitales que hacen crecer tu negocio.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: '/',
    languages: { es: '/' },
  },
};

export function generateViewport(): Viewport {
  return {
    themeColor: '#0A0A0B',
    colorScheme: 'dark',
    width: 'device-width',
    initialScale: 1,
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'innodesign',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icon.png`,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hola@innodesign.com',
        contactType: 'customer support',
        availableLanguage: 'Spanish',
      },
      sameAs: [
        'https://linkedin.com/company/innodesign',
        'https://github.com/innodesign',
        'https://twitter.com/innodesign',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'innodesign',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'es',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
