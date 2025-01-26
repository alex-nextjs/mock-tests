import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'SSCPrep - Your Ultimate SSC Exam Preparation Partner',
  description:
    'Prepare for SSC exams like CGL, CHSL, and GD with SSCPrep. Access mock tests, notes, typing practice, CBTs, and comprehensive resources to excel in your SSC journey.',
  keywords:
    'SSC Preparation, SSC CGL, SSC CHSL, Mock Tests, Typing Practice, CBT, EdTech, SSC Notes, SSC GD, SSC Exam Resources',
  authors: [{ name: 'SSCPrep Team' }],
  openGraph: {
    title: 'SSCPrep - Your Ultimate SSC Exam Preparation Partner',
    description:
      'Unlock your SSC potential with mock tests, notes, typing practice, and CBTs on SSCPrep.',
    url: 'https://www.sscprep.com', // replace with your app's domain
    type: 'website',
    images: [
      {
        url: 'https://www.sscprep.com/og-image.png', // replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'SSCPrep Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSCPrep - Your Ultimate SSC Exam Preparation Partner',
    description:
      'SSCPrep helps you ace SSC exams with mock tests, notes, and practice tools.',
    images: ['https://www.sscprep.com/og-image.png'], // replace with your OG image URL
    creator: '@SSCPrep', // replace with your Twitter handle
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
