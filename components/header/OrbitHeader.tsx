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
            <HeaderLink href="/orbit/travel">앤솔궤도</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/orbit/friend">친구 찾기</HeaderLink>
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
