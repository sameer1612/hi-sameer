import './globals.scss';
import Header from './components/header/header';

export const metadata = {
  title: 'Sameer Kumar',
  description: 'Software Engineer'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
