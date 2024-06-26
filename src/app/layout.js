import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { config } from "./services/config";
import { inter } from "./ui/fonts";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="overflow-x-hidden">
          <Navbar config={config.navbar} />
          <Suspense fallback={null}>
            {children}
          </Suspense>
          <Footer footerLinksData={config.footer} />
        </main>
      </body>
    </html>
  );
}
