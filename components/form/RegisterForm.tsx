"use client";

import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "../button/GoogleLoginButton";
import axios from "axios";
import { validateEmail } from "@/util/validateInput";
import { useModalStore } from "@/stores/modalStore";

const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { openModal } = useModalStore();

  const onSubmit = (data: FieldValues) => {
    if (!data.email || !validateEmail(data.email)) {
      openModal({
        title: "입력오류",
        text: "이메일을 올바르게 입력해주세요.",
      });
      document.getElementById("check_modal")?.click();
      return;
    }
    router.push(`/main/register/step/?email=${data.email}`);
  };

  const googleRegister = async (credential: string | undefined) => {
    if (!credential) return;

    const request: GoogleLoginRequest = {
      id_token: credential,
    };
    try {
      await axios.post("/auth/google/token/signin", request);
      router.push("/main/login");
    } catch (error) {
      openModal({
        title: "로그인 오류",
        text: "구글 로그인에 실패했습니다.",
      });
      document.getElementById("check_modal")?.click();
    }
  };

  return (
    <section className="mt-[351px] w-[392px]">
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
function openModal(arg0: { title: string; text: string }) {
  throw new Error("Function not implemented.");
}
