'use client';

import { useState, useEffect } from 'react';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import { config } from "./services/config";
import { inter } from "./ui/fonts";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {isLoading && <SplashScreen logo={config.navbar.logo} siteName={config.navbar.text} />}
        <main className={`overflow-x-hidden ${isLoading ? 'hidden' : ''}`}>
          <Navbar config={config.navbar} />
          {children}
          <Footer footerLinksData={config.footer} />
        </main>
      </body>
    </html>
  );
}
