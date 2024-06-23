"use client";

import "./globals.css";
import Footer from "@/components/footer/Footer";
import CheckModal from "@/components/modal/CheckModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <CheckModal />
        <QueryClientProvider client={queryClient}>
          <div className="h-full flex flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
