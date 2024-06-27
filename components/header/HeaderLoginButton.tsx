"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "@/api/clientAxios";

const HeaderLoginButton: React.FC = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) setIsLogin(true);
    else setIsLogin(false);
  }, []);

  const moveToLoginPage = () => {
    router.push("/main/login");
  };

  const logout = async () => {
    await axios.get("/auth/logout");
    setIsLogin(false);
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    location.reload();
    router.push("/main/login");
  };

  return (
    <div>
      {!isLogin ? (
        <button
          className="btn btn-active bg-[#FF7D7D] px-6 py-3.5 text-[#8600EF] border-0"
          onClick={() => moveToLoginPage()}
        >
          로그인
        </button>
      ) : (
        <button
          className="btn btn-active bg-[#FF7D7D] px-6 py-3.5 text-[#8600EF] border-0"
          onClick={() => logout()}
        >
          로그아웃
        </button>
      )}
    </div>
  );
};

export default HeaderLoginButton;
