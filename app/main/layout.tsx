import Header from "@/components/header/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Suspense } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleClientId = process.env.GOOGLE_CLIENT_ID || "";

  return (
    <>
      <GoogleOAuthProvider clientId={googleClientId}>
        <Header />
        <Suspense>{children}</Suspense>
      </GoogleOAuthProvider>
    </>
  );
}
