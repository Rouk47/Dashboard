import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Dashboard/page';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body className={inter.className}>
        {/* Render children (main content) */}
        {children}
            <Sidebar />
      </body>
    </html>
  );
}
