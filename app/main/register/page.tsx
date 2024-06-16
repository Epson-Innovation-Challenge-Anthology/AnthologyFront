"use client";

import Image from "next/image";
import GoogleIcon from "@/assets/icon/google.png";
import { FieldValues, useForm } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data: FieldValues) => {
    router.push(`/main/register/step/?email=${data.email}`);
  };

  const googleRegister = useGoogleLogin({
    onSuccess: (res) => {},
  });

  return (
    <main className="px-20">
      <section className="mt-20">
        <h2 className="font-bold text-[64px] text-[#8F00FF]">
          앤솔로지 서비스에 오신 것을 환영합니다
        </h2>
        <p className="mt-20 font-medium text-xl">
          앤솔로지를 통해서 일상에서 잊혀지지 않는 기억을 공유하고 남겨보세요.
        </p>
      </section>
      <section className="mt-[100px] w-[392px]">
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="font-semibold text-[25px] text-[#8F00FF]">
            새로운 계정 만들기
          </h2>
          <p className="mt-0.5 font-normal text-sm">
            Enter your email to sign up for this app
          </p>
          <input
            type="text"
            placeholder="email@domain.com"
            className="input input-bordered w-[327px] h-10 max-w-xs mt-4"
            {...register("email")}
          />
          <button className="btn btn-active bg-[#8f00ff] text-[white] mt-4 w-[327px] h-10 border-0">
            Sign up with email
          </button>
          <div className="divider text-[#828282] mt-6 mb-0 w-[327px] ml-8">
            or continue with
          </div>
          <button
            className="btn btn-active mt-6 w-[327px] h-10 bg-[#EEEEEE] border-0"
            onClick={() => googleRegister()}
          >
            <Image
              src={GoogleIcon}
              className="w-5 h-5 object-contain"
              alt="google icon"
              priority
            />
            Google
          </button>
          <p className="mt-6 text-[#828282] text-center">
            By clicking continue, you agree to our
            <span className="text-[black]"> Terms of Service</span> and
            <span className="text-[black]"> Privacy Policy</span>
          </p>
        </form>
      </section>
    </main>
  );
}
