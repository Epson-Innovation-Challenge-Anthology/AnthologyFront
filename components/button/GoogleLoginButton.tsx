"use client";

import Image from "next/image";
import GoogleIcon from "@/assets/icon/Google.png";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton: React.FC<{
  clickHandler: (credential: string | undefined) => void;
}> = ({ clickHandler }) => {
  return (
    <div className="relative w-[327px] h-10 mt-6">
      <div className="absolute opacity-0">
        <GoogleLogin
          width={327}
          onSuccess={(res: CredentialResponse) => clickHandler(res.credential)}
        />
      </div>
      <button
        type="button"
        className="btn hover:bg-[#EEEEEE] w-[327px] h-10 bg-[#EEEEEE] border-0 z-0"
        id="custom-google-button"
      >
        <Image
          src={GoogleIcon}
          className="w-5 h-5 object-contain"
          alt="google icon"
          priority
        />
        Google
      </button>
    </div>
  );
};

export default GoogleLoginButton;
