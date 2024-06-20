"use client";

import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import GoogleLoginButton from "../button/GoogleLoginButton";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/stores/modalStore";
import { validateEmail, validatePassword } from "@/util/validateInput";

const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { openModal } = useModalStore();

  const googleLogin = async (credential: string | undefined) => {
    if (!credential) return;

    const request: GoogleLoginRequest = {
      id_token: credential,
    };
    const response = await axios.post<GoogleLoginResponse>(
      "/auth/google/token/signin",
      request
    );
    if (response.status !== 200) return;
    const { access_token, refresh_token } = response.data;
    Cookies.set("accessToken", access_token);
    Cookies.set("refreshToken", refresh_token);
    router.push("/about");
  };

  const onSubmit = async (data: FieldValues) => {
    if (!data.email || !data.password) {
      openModal({
        title: "입력오류",
        text: "모든 항목을 입력해주세요.",
      });
      document.getElementById("check_modal")?.click();
      return;
    }

    if (!validateEmail(data.email) || !validatePassword(data.password)) {
      openModal({
        title: "입력오류",
        text: "형식이 올바르지 않습니다. 비밀번호는 8자 이상이어야 합니다.",
      });
      document.getElementById("check_modal")?.click();
      return;
    }

    const request: LocalSigninRequest = {
      email: data.email,
      password: data.password,
    };
    const response = await axios<LocalSigninResponse>({
      method: "POST",
      url: "/auth/basic/signin",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: request,
    });

    if (response.status !== 200) {
      openModal({
        title: "로그인 오류",
        text: "이메일이나 비밀번호가 틀렸습니다",
      });
      document.getElementById("check_modal")?.click();
      return;
    }

    const { access_token, refresh_token } = response.data;
    Cookies.set("accessToken", access_token);
    Cookies.set("refreshToken", refresh_token);
    router.push("/about");
  };

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
