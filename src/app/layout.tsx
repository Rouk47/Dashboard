import { Metadata } from 'next';
import Sidebar from './components/sidebar';

// Import Inter font from Google Fonts
import { Inter } from 'next/font/google';

// Import global styles
import './globals.css';

// Initialize Inter font with required subset
const inter = Inter({ subsets: ['latin'] });

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Dashboard',
};

// This component should be in _app.js or a layout component, not _document.js
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // This structure won't work as intended for setting metadata
    // Consider moving HTML and body tags to _document.js for better customization
    <html lang="en">
      <body className={inter.className}>
        {/* Render children (main content) */}
        {children}
        
        {/* Sidebar component */}
        <Sidebar />
      </body>
    </html>
  );
}
