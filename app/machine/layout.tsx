import Header from "@/components/header/Header";
import React from "react";

export default function MachineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
