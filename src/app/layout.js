import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { config } from "./services/config";
import { inter } from "./ui/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="overflow-x-hidden">
          <Navbar config={config.navbar} />
          {children}
          <Footer footerLinksData={config.footer} />
        </main>
      </body>
    </html>
  );
}
