import React from "react";
import HeaderLink from "./HeaderLink";
import HeaderLoginButton from "./HeaderLoginButton";

const Header: React.FC = () => {
  return (
    <header className="flex items-center h-[77px] justify-between font-medium text-xl px-20 bg-[#925BB0] text-[#FFDDDD]">
      <div>
        <HeaderLink href="/">앤솔:로지</HeaderLink>
      </div>
      <nav>
        <ul className="flex items-center gap-12">
          <li>
            <HeaderLink href="/machine">앤솔머신</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/my-drawer">나의 서랍장</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/main/my-page">나의 정보</HeaderLink>
          </li>
          <li>
            <HeaderLoginButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
