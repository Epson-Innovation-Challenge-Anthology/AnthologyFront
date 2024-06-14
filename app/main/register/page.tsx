"use client";

import Image from "next/image";
import GoogleIcon from "@/assets/icon/google.png";
import { FieldValues, useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => {};

  return (
    <main className="px-20">
      <section className="mt-20">
        <h1 className="font-bold text-[64px]">
          <span className="text-[#8F00FF]">A</span>bout
        </h1>
      </section>
      <form
        className="mt-[100px] flex flex-col items-center w-[392px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-semibold text-[25px] text-[#8F00FF]">
          새로운 계정 만들기
        </h1>
        <h2 className="mt-0.5 font-normal text-sm">
          Enter your email to sign up for this app
        </h2>
        <input
          type="email"
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
        <button className="btn btn-active mt-6 w-[327px] h-10 bg-[#EEEEEE] border-0">
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
    </main>
  );
}
