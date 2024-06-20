"use client";

import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "../button/GoogleLoginButton";
import axios from "axios";

const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data: FieldValues) => {
    router.push(`/main/register/step/?email=${data.email}`);
  };

  const googleRegister = async (credential: string | undefined) => {
    if (!credential) return;

    const request: GoogleLoginRequest = {
      id_token: credential,
    };
    const response = await axios.post("/auth/google/token/signin", request);
    if (response.status !== 200) return;
    router.push("/main/login");
  };

  return (
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
        <button
          type="submit"
          className="btn btn-active bg-[#8f00ff] text-[white] mt-4 w-[327px] h-10 border-0"
        >
          Sign up with email
        </button>
        <div className="divider text-[#828282] mt-6 mb-0 w-[327px] ml-8">
          or continue with
        </div>
        <GoogleLoginButton clickHandler={googleRegister} />

        <p className="mt-6 text-[#828282] text-center mb-[64px]">
          By clicking continue, you agree to our
          <span className="text-[black]"> Terms of Service</span> and
          <span className="text-[black]"> Privacy Policy</span>
        </p>
      </form>
    </section>
  );
};

export default RegisterForm;
