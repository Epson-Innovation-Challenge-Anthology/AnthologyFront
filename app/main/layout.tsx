import Header from "@/components/header/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleClientId = process.env.GOOGLE_CLIENT_ID || "";
  return (
    <>
      <Header />
      <GoogleOAuthProvider clientId={googleClientId}>
        {children}
      </GoogleOAuthProvider>
    </>
  );
}
