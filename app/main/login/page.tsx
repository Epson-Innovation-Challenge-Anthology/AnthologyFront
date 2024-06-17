"use client";

import Link from "next/link";
import GoogleIcon from "@/assets/icon/Google.png";
import Image from "next/image";
import { useGoogleLogin } from "@react-oauth/google";
import { FieldValues, useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const googleRegister = useGoogleLogin({
    onSuccess: (res) => {},
  });

  const onSubmit = (data: FieldValues) => {};

  return (
    <main className="flex justify-between px-20">
      <section>
        <figure></figure>
      </section>
      <section
        className="w-[476px] bg-[#CEBCEC] px-[42px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <form className="flex flex-col items-center">
          <h2 className="font-semibold text-[25px] text-[#8F00FF] mt-[143px]">
            Login in to Anthology
          </h2>
          <p className="mt-[2px]">
            {"계정이 없으신가요? "}
            <Link href="/main/register" className="font-semibold">
              앤솔로지 가입하기
            </Link>
          </p>
          <input
            type="text"
            className="input w-[327px] h-10 mt-[36px]"
            placeholder="이메일"
            {...register("email")}
          />
          <input
            type="password"
            className="input w-[327px] h-10 mt-[16px]"
            placeholder="비밀번호"
            {...register("password")}
          />
          <button className="btn btn-active bg-[#A974FF] w-[327px] h-10 text-[white] mt-[16px]">
            이메일로 로그인하기
          </button>
          <div className="divider mt-[24px] text-[#828282]">
            or continue with
          </div>
          <button
            className="btn btn-active mt-[24px] w-[327px] h-10 bg-[#EEEEEE] border-0"
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
          <p className="mt-[24px] text-[#828282] text-center mb-[170px]">
            By clicking continue, you agree to our
            <span className="text-[black]"> Terms of Service</span> and
            <span className="text-[black]"> Privacy Policy</span>
          </p>
        </form>
      </section>
    </main>
  );
}
