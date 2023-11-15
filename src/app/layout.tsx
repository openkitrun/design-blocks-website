import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import cls from "@/utils/cls";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrains-mono",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://designblocks.dev"),
  title: {
    default: "Design Blocks",
    template: "%s | Design Blocks",
  },
  description:
    "An open source UI component library that focuses on customization, developer experience, and building mobile apps with react-native.",
  openGraph: {
    title: "Design Blocks",
    description:
      "An open source UI component library that focuses on customization, developer experience, and building mobile apps with react-native.",
    url: "designblocks.dev",
    siteName: "X Boilerplate",
    images: [
      {
        url: "designblocks.dev/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Design Blocks",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cls(
          "text-white bg-[#050505]",
          inter.variable,
          jetBrainsMono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
