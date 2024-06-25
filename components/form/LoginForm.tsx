"use client";

import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import GoogleLoginButton from "@/components/button/GoogleLoginButton";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { validateEmail, validatePassword } from "@/util/validateInput";
import { useOpenModal } from "@/hooks/useOpenModal";
import { useMutation } from "@tanstack/react-query";
import { signinLocal, singinGoogle } from "@/api/auth/authAPI";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Portal from "@/components/portal/Portal";

const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { handleOpenModal } = useOpenModal();

  const { mutate: googleSigninMutate, isPending: googleSigninPending } =
    useMutation({
      mutationFn: singinGoogle,
      onSuccess: (data) => {
        Cookies.set("accessToken", data.access_token);
        Cookies.set("refreshToken", data.refresh_token);
        router.push("/about");
      },
      onError: (error) => {
        console.log(error);
        handleOpenModal({
          title: "로그인 오류",
          text: "구글 로그인에 실패했습니다.",
        });
      },
    });

  const { mutate: localSigninMutate, isPending: localSigninPending } =
    useMutation({
      mutationFn: signinLocal,
      onSuccess: (data) => {
        Cookies.set("accessToken", data.access_token);
        Cookies.set("refreshToken", data.refresh_token);
        router.push("/about");
      },
      onError: (error) => {
        console.log(error);
        handleOpenModal({
          title: "로그인 오류",
          text: "구글 로그인에 실패했습니다.",
        });
      },
    });

  const googleLogin = async (credential: string | undefined) => {
    if (!credential) return;

    const request: GoogleLoginRequest = {
      id_token: credential,
    };
    googleSigninMutate(request);
  };

  const onSubmit = async (data: FieldValues) => {
    if (!data.email || !data.password) {
      handleOpenModal({ title: "입력오류", text: "모든 항목을 입력해주세요." });
      return;
    }

    if (!validateEmail(data.email) || !validatePassword(data.password)) {
      handleOpenModal({
        title: "입력오류",
        text: "형식이 올바르지 않습니다. 비밀번호는 8자 이상이어야 합니다.",
      });
      return;
    }

    const request: LocalSigninRequest = {
      email: data.email,
      password: data.password,
    };
    localSigninMutate(request);
  };

  if (googleSigninPending || localSigninPending)
    return (
      <Portal selector="loading">
        <LoadingSpinner />
      </Portal>
    );

  return (
    <section className="w-[476px] bg-[#CEBCEC] px-[42px]">
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <div className="divider mt-[24px] text-[#828282]">or continue with</div>
        <GoogleLoginButton clickHandler={googleLogin} />
        <p className="mt-[24px] text-[#828282] text-center mb-[170px]">
          By clicking continue, you agree to our
          <span className="text-[black]"> Terms of Service</span> and
          <span className="text-[black]"> Privacy Policy</span>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
