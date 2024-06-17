"use client";

import { useRouter } from "next/navigation";

const HeaderLoginButton: React.FC = () => {
  const router = useRouter();

  const moveToLoginPage = () => {
    router.push("/main/login");
  };

  return (
    <button
      className="btn btn-active bg-[#FF7D7D] px-6 py-3.5 text-[#8600EF] border-0"
      onClick={() => moveToLoginPage()}
    >
      로그인
    </button>
  );
};

export default HeaderLoginButton;
