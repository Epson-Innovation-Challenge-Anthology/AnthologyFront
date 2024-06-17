"use client";

import Link from "next/link";
import { ReactNode } from "react";

const HeaderLink: React.FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => {
  return <Link href={href}>{children}</Link>;
};

export default HeaderLink;
