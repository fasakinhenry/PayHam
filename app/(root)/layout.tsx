import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import '../globals.css';
import Image from 'next/image';
import MobileNav from '@/components/MobileNav';

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
      <div className='flex size-full flex-col'>
        <div className='root-layout'>
          <Image
            src='/icons/logo.svg'
            width={30}
            height={30}
            alt='PayHam Logo'
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
