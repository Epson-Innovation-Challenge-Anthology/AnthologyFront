"use client";

import { FieldValues, useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { validatePassword, validatePhoneNumber } from "@/util/validateInput";
import { useOpenModal } from "@/hooks/useOpenModal";
import { useMutation } from "@tanstack/react-query";
import { signupLocal } from "@/api/auth/authAPI";
import Portal from "@/components/portal/Portal";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

const RegisterStepForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { handleOpenModal } = useOpenModal();

  const email = searchParams.get("email");

  const { mutate: localSignupMutate, isPending: localSignupPending } =
    useMutation({
      mutationFn: signupLocal,
      onSuccess: () => {
        router.push("/main/login");
      },
      onError: (error) => {
        console.log(error);
        handleOpenModal({
          title: "회원가입 오류",
          text: "회원가입에 실패했습니다.",
        });
      },
    });

  const onSubmit = async (data: FieldValues) => {
    if (email == null) {
      router.push("/main/register");
      return;
    }
    if (data.check !== true) {
      handleOpenModal({ title: "입력오류", text: "약관에 동의해주세요." });
      return;
    }
    if (!data.name || !data.phone || !data.password || !data.confirm) {
      handleOpenModal({ title: "입력오류", text: "모든 항목을 입력해주세요." });
      return;
    }
    if (data.password !== data.confirm) {
      handleOpenModal({
        title: "입력오류",
        text: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }
    if (!validatePassword(data.password) || !validatePhoneNumber(data.phone)) {
      handleOpenModal({
        title: "입력오류",
        text: "형식이 올바르지 않습니다. 비밀번호는 8자 이상이어야하고 전화번호는 000-0000-0000 형식이어야 합니다.",
      });
      return;
    }

    const request: LocalSignupRequest = {
      email: email,
      name: data.name,
      phone_number: data.phone,
      password: data.password,
    };
    localSignupMutate(request);
  };

  if (localSignupPending)
    return (
      <Portal selector="loading">
        <LoadingSpinner />
      </Portal>
    );

  return (
    <section className="w-[476px] bg-[#CEBCEC]">
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="font-semibold text-[17px] mt-[54px] mr-[250px]">
          회원가입
        </h2>
        <label className="mt-[15px] text-[#8600EF] mr-[280px]" htmlFor="name">
          이름
        </label>
        <input
          type="text"
          className="input input-bordered  w-[313px] h-12 mt-[8px]"
          id="name"
          placeholder="이름을 입력해 주세요"
          {...register("name")}
        />
        <label className="mt-[11px] text-[#8600EF] mr-[270px]" htmlFor="phone">
          연락처
        </label>
        <input
          type="text"
          className="input input-bordered  w-[313px] h-12 mt-[8px]"
          id="phone"
          placeholder="연락처를 입력해주세요"
          {...register("phone")}
        />
        <label
          className="mt-[11px] text-[#8600EF] mr-[250px]"
          htmlFor="password"
        >
          비밀번호
        </label>
        <input
          type="password"
          className="input input-bordered  w-[313px] h-12 mt-[8px]"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password")}
        />
        <label
          className="mt-[11px] text-[#8600EF] mr-[210px]"
          htmlFor="confirm"
        >
          비밀번호 확인
        </label>
        <input
          type="password"
          className="input input-bordered  w-[313px] h-12 mt-[8px]"
          id="confirm"
          placeholder="비밀번호를 재입력해주세요"
          {...register("confirm")}
        />
        <label className="mt-14 flex">
          <input
            type="checkbox"
            className="checkbox bg-[white] mr-[7px] my-auto"
            {...register("check")}
          />
          <span>약관약관 및 개인정보처리방침에 동의합니다</span>
        </label>
        <button className="btn btn-active mt-[11px] w-[364px] h-[50px] mb-[51px] bg-[#FF7D7D] text-[#681993]">
          회원가입
        </button>
      </form>
    </section>
  );
};

export default RegisterStepForm;
