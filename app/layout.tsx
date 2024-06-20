"use client";

import "./globals.css";
import Footer from "@/components/footer/Footer";
import CheckModal from "@/components/modal/CheckModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CheckModal />
        <div className="h-full flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
