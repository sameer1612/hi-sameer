import './globals.scss';
import Header from './components/header/header';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Sameer Kumar',
  description: 'Software Engineer'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://hi-sameer.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={'/images/sameer.jpeg'} />
        <meta name="theme-color" content="#ffe0c5" />
      </head>
      <body>
        <Header></Header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
