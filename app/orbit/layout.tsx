import OrbitHeader from "@/components/header/OrbitHeader";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OrbitHeader />
      {children}
    </>
  );
}
