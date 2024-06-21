"use client";

import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import Image from "next/image";
import AnthologyProfile from "@/assets/anthologyProfile.jpg";

type FormData = {
  lastName: string;
  firstName: string;
  email: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-[2vw]">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-8 mt-20">
        <div className="flex-1 flex flex-col gap-6">
          <div className="text-black text-left font-medium text-[44px] leading-tight">
            앤솔로지 팀과 연결하기
          </div>
          <div className="text-gray-500 text-left font-InterRegular text-[20px] leading-6">
            앤솔로지 팀에 문의하실 내용이 있으면 쪽지를 써 주세요.
          </div>

          <form
            className="flex flex-col gap-8 mt-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col lg:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-2 relative">
                <label className="text-black font-medium text-sm">성</label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="bg-white border border-[#FF7D7D] rounded-md p-2.5 shadow-sm"
                  {...register("lastName", { required: "성을 입력하세요." })}
                />
                {errors.lastName && (
                  <p className="text-red-500 absolute bottom-[-25px] left-0">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-2 relative">
                <label className="text-black font-medium text-sm">이름</label>
                <input
                  type="text"
                  placeholder="Smitherton"
                  className="bg-white border border-[#FF7D7D] rounded-md p-2.5 shadow-sm"
                  {...register("firstName", { required: "이름을 입력하세요." })}
                />
                {errors.firstName && (
                  <p className="text-red-500 absolute bottom-[-25px] left-0">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="text-black font-medium text-sm">
                이메일 주소
              </label>
              <input
                type="email"
                placeholder="email@domain.com"
                className="bg-white border border-[#FF7D7D] rounded-md p-2.5 shadow-sm"
                {...register("email", {
                  required: "이메일을 입력하세요.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "올바른 이메일 주소를 입력하세요.",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 absolute bottom-[-25px] left-0">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="text-black font-medium text-sm">
                앤솔로지 팀에게 보낼 쪽지를 써 주세요.
              </label>
              <textarea
                placeholder="Enter your question or message"
                className="bg-white border border-[#FF7D7D] rounded-md p-2.5 shadow-sm h-40 resize-none overflow-auto"
                {...register("message", { required: "메시지를 입력하세요." })}
                style={{ imeMode: "disabled" }}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 absolute bottom-[-25px] left-0">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#FF7D7D] rounded-md py-4 text-white font-medium text-lg shadow-sm w-full mt-4"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex-1 flex justify-center items-start">
          <Image
            className="rounded-md object-cover"
            src={AnthologyProfile}
            width={508}
            height={657}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

