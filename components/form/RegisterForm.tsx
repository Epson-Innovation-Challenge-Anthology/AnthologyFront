"use client";

import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "@/components/button/GoogleLoginButton";
import { validateEmail } from "@/util/validateInput";
import { useMutation } from "@tanstack/react-query";
import { singinGoogle } from "@/api/auth/authAPI";
import { useOpenModal } from "@/hooks/useOpenModal";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Portal from "@/components/portal/Portal";

const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { handleOpenModal } = useOpenModal();

  const { mutate: googleSignupMutate, isPending: googleSignupPending } =
    useMutation({
      mutationFn: singinGoogle,
      onSuccess: () => {
        router.push("/main/login");
      },
      onError: (error) => {
        console.log(error);
        handleOpenModal({
          title: "회원가입 오류",
          text: "구글 회원가입에 실패했습니다.",
        });
      },
    });

  const onSubmit = (data: FieldValues) => {
    if (!data.email || !validateEmail(data.email)) {
      handleOpenModal({
        title: "입력오류",
        text: "이메일을 올바르게 입력해주세요.",
      });
      return;
    }
    router.push(`/main/register/step/?email=${data.email}`);
  };

  const googleRegister = async (credential: string | undefined) => {
    if (!credential) return;

    const request: GoogleLoginRequest = {
      id_token: credential,
    };
    googleSignupMutate(request);
  };

  if (googleSignupPending)
    return (
      <Portal selector="loading">
        <LoadingSpinner />
      </Portal>
    );

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
