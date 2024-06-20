import "./globals.css";
import Footer from "@/components/footer/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleClientId = process.env.GOOGLE_CLIENT_ID || "";

  return (
    <html lang="en">
      <body>
        <div className="h-full flex flex-col">
          <GoogleOAuthProvider clientId={googleClientId}>
            <div className="flex-1">{children}</div>
            <Footer />
          </GoogleOAuthProvider>
        </div>
      </body>
    </html>
  );
}
