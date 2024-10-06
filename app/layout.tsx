import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Modern Auth App',
  description: 'A beautiful and responsive authentication example',
};

const montserrat = localFont({
  src: './fonts/Montserrat.woff',
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
          <main className="flex flex-grow items-center justify-center">
            <div className="w-full max-w-md px-4 py-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
