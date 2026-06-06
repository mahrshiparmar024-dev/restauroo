import type { Metadata } from 'next';
import './globals.css';
import { OrderProvider } from '@/context/OrderContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Saray — Authentic Turkish Kitchen · Barrie, ON',
  description:
    'Slow-cooked kebabs, hand-rolled pide, and baklava that takes three days to make. Saray brings Gaziantep to Barrie. Reserve your table or order online.',
  keywords: [
    'Turkish restaurant',
    'Barrie',
    'Saray',
    'kebab',
    'pide',
    'baklava',
    'mezze',
    'Waterloo Region',
  ],
  openGraph: {
    title: 'Saray — Authentic Turkish Kitchen',
    description:
      'From Gaziantep to Barrie. Slow-cooked kebabs, hand-rolled pide, and baklava that takes three days.',
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
