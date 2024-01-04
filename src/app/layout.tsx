import { Analytics } from '@vercel/analytics/react';
import { Inter, JetBrains_Mono } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

import cls from '@/utils/cls';

import Providers from '@/app/Providers';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetBrains-mono',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://designblocks.dev'),
  title: {
    default: 'Design Blocks',
    template: '%s | Design Blocks',
  },
  description:
    'An open-source library that focuses on the developer experience, offering complete control over style and customization in their projects.',
  keywords: [
    'design-blocks',
    'library',
    'developer',
    'customization',
    'React',
    'react-native',
    'TypeScript',
    'design system',
    'components',
    'open-source',
    'DX',
    'UI',
    'UX',
    'mobile',
    'expo',
    'cross-platform',
    'native',
    'UI library',
    'UI components',
    'primitives',
    'unstyled-components',
    'unstyled',
    'css-in-js',
  ],
  openGraph: {
    title: 'Design Blocks',
    description:
      'An open-source library that focuses on the developer experience, offering complete control over style and customization in their projects.',
    url: 'https://designblocks.dev',
    siteName: 'Design Blocks',
    images: [
      {
        url: 'https://designblocks.dev/opengraph-image.jpeg',
        width: 1280,
        height: 640,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Design Blocks',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cls('bg-[#050505] text-white', inter.variable, jetBrainsMono.variable)}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
