import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'LinguineAI — Visual Menu Understanding & Dish Recommendation',
  description:
    'A college project presentation on LinguineAI: an end-to-end system for visual menu understanding and intelligent dish recommendation using OCR, vision models, and LLMs.',
  authors: [{ name: 'Arnab, Anirban, Nisith, Suvadeep' }],
  keywords: ['LinguineAI', 'OCR', 'menu understanding', 'dish recommendation', 'CMI', 'AML'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
