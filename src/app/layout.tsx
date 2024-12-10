// src/app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'FutbolEnRed - Paga y Juega Fútbol',
  description: 'Encuentra partidos de fútbol cerca de ti y paga para participar.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

const Navbar = () => {
  return (
    <nav className="py-4 px-6 shadow-md bg-opacity-90" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo o título */}
        <h1 className="text-2xl font-bold">FutbolEnRed</h1>

        {/* Navegación principal */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">Inicio</Link>
          </li>
          <li>
            <Link href="/ligas" className="hover:underline">Ligas</Link>
          </li>
          <li>
            <Link href="/entrenamiento" className="hover:underline">Entrenamiento</Link>
          </li>
          <li>
            <Link href="/lugares" className="hover:underline">Lugares</Link>
          </li>
          <li>
            <Link href="/soporte" className="hover:underline">Soporte</Link>
          </li>
          <li>
            <Link href="/faq" className="hover:underline">Preguntas frecuentes</Link>
          </li>
          <li>
            <Link href="/login" className="hover:underline">Iniciar Sesión</Link>
          </li>
        </ul>

        {/* Redes sociales */}
        <div className="flex items-center space-x-3">
          <a
            href="https://www.facebook.com/share/15YPPTrxMu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://x.com/futbolenredmx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Twitter
          </a>
        </div>
      </div>
    </nav>
  );
};
