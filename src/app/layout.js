"use client";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { config } from "./services/config";
import { inter } from "./ui/fonts";
import { Suspense, useState } from "react";
import Menu from "./components/Menu";
import Loading from "./loading";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header className="h-20">
          <Navbar isSidebarOpen={menuOpen} config={config.navbar} toggleMenu={toggleMenu}/>
          <Menu isOpen={menuOpen} onClose={toggleMenu} />
        </header>
        <main className="overflow-x-hidden">
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </main>
        <Footer footerLinksData={config.footer} />
      </body>
    </html>
  );
}
