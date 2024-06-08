import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import '../globals.css';

export const metadata: Metadata = {
  title: 'PayHam',
  description: 'Social Payments as a Service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Henry', lastName: 'Fasakin' };
  return (
    <main className='flex h-screen w-full font-inter'>
      <Sidebar user={loggedIn} />
      {children}
    </main>
  );
}
