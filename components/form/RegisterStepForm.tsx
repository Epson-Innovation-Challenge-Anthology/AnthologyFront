"use client";

import { FieldValues, useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

const RegisterStepForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const onSubmit = (data: FieldValues) => {};

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
