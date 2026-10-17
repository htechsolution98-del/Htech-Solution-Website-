import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import ChatWidget from '@/components/ChatWidget';
import Preloader from '@/components/Preloader';
import ScrollProgress from '@/components/ScrollProgress';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'Htech Solutions Pvt. Ltd. — Innovating With Code',
  description:
    'Htech Solutions Pvt. Ltd. designs and builds secure, scalable software, web, mobile, AI and cloud solutions for startups, SMEs and enterprises.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        <CustomCursor />
        <SmoothScroll>
          <ThemeProvider>
            <Preloader>
              {children}
            </Preloader>
            <ScrollProgress />
            <ChatWidget />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
