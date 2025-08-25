import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visibly Crowned - Empowering Women & Girls Across Africa",
  description: "A Pan-African initiative focused on gender equality, ending violence against women and girls, and creating opportunities for empowerment through Advocacy, Empowerment, and Recognition.",
  keywords: "gender equality, women empowerment, Africa, advocacy, empowerment, recognition, NGO, women's rights",
  authors: [{ name: "Visibly Crowned" }],
  creator: "Visibly Crowned",
  publisher: "Visibly Crowned",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://visiblycrowned.org'),
  openGraph: {
    title: "Visibly Crowned - Empowering Women & Girls Across Africa",
    description: "A Pan-African initiative focused on gender equality, ending violence against women and girls, and creating opportunities for empowerment.",
    url: 'https://visiblycrowned.org',
    siteName: 'Visibly Crowned',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Visibly Crowned Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Visibly Crowned - Empowering Women & Girls Across Africa",
    description: "A Pan-African initiative focused on gender equality, ending violence against women and girls, and creating opportunities for empowerment.",
    images: ['/logo.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-neutral-50 overflow-y-scroll scroll-smooth">
        {children}
      </body>
    </html>
  );
}
