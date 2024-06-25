import Header from "@/components/header/Header";
import React, { Suspense } from "react";

export default function MachineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Suspense>{children}</Suspense>
    </>
  );
}
