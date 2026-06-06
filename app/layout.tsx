import type { Metadata } from 'next';
import './globals.css';
import { OrderProvider } from '@/context/OrderContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Anatolian — Authentic Turkish Kitchen · Kitchener, ON',
  description:
    'Slow-cooked kebabs, hand-rolled pide, and baklava that takes three days to make. Anatolian brings Gaziantep to Kitchener. Reserve your table or order online.',
  keywords: [
    'Turkish restaurant',
    'Kitchener',
    'Anatolian',
    'kebab',
    'pide',
    'baklava',
    'mezze',
    'Waterloo Region',
  ],
  openGraph: {
    title: 'Anatolian — Authentic Turkish Kitchen',
    description:
      'From Gaziantep to Kitchener. Slow-cooked kebabs, hand-rolled pide, and baklava that takes three days.',
    locale: 'en_CA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <OrderProvider>
          <Navbar />
          <main
            id="main-content"
            style={{ minHeight: '100dvh', paddingTop: '72px' }}
          >
            {children}
          </main>
          <Footer />
        </OrderProvider>
        <Toaster position="bottom-center" toastOptions={{
          style: {
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
            fontFamily: 'var(--font-body)',
          }
        }} />
      </body>
    </html>
  );
}
