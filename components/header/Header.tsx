import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center h-[164px] justify-between font-medium text-xl px-20">
      <div>
        <Link href="/">앤솔:로지</Link>
      </div>
      <nav>
        <ul className="flex items-center gap-12">
          <li>
            <Link href="/machine">앤솔머신</Link>
          </li>
          <li>
            <Link href="/my-drawer">나의 서랍장</Link>
          </li>
          <li>
            <Link href="/my-info">나의 정보</Link>
          </li>
          <li>
            <button className="bg-[#8f00ff] px-6 py-3.5 rounded-[10px] text-[white]">
              로그인
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
