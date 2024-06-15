"use client";
import React, { useState } from "react";
import "./tapslidingstyles.css"; // styles.css 파일을 import 합니다.

const PrintPage: React.FC = () => {
  const [activePlan, setActivePlan] = useState("monthly");
  const [openFAQ, setOpenFAQ] = useState([false, false, false]);

  const handlePlanClick = (plan: string) => {
    setActivePlan(plan);
  };

  const handleFAQClick = (index: number) => {
    setOpenFAQ((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="bg-white relative overflow-hidden">
      {/* 사진 출력 관련 섹션 */}
      <section className="flex flex-col items-center justify-start my-12">
        <h1 className="text-black text-center font-semibold text-6xl leading-tight">
          앤솔머신 사진 출력하기
        </h1>
        <p className="text-gray-500 text-center font-inter text-2xl leading-loose mt-2">
          사진 출력에 필요한 비용 지불
        </p>
        <div className="button-container mt-4">
          <div
            className="button-slide"
            style={{
              transform:
                activePlan === "monthly"
                  ? "translateX(8px)"
                  : "translateX(110px)",
            }}
          />
          <div
            className="button"
            style={{ color: activePlan === "monthly" ? "black" : "gray" }}
            onClick={() => handlePlanClick("monthly")}
          >
            월별 비용
          </div>
          <div
            className="button"
            style={{ color: activePlan === "yearly" ? "black" : "gray" }}
            onClick={() => handlePlanClick("yearly")}
          >
            연간 비용
          </div>
        </div>
      </section>

      {/* 가격 플랜 섹션 */}
      <section className="flex flex-col items-center gap-8 my-12">
        <div className="flex flex-row gap-8 items-start justify-start flex-wrap">
          {/* 처음 왔어요 플랜 */}
          <div className="bg-white rounded-[12px] p-[48px] flex flex-col gap-[32px] items-start justify-end w-[404px] shadow-lg">
            <div className="flex flex-col gap-3 items-start justify-end">
              <h2 className="text-black text-left font-inter font-medium text-sm leading-[150%] opacity-80">
                처음 왔어요
              </h2>
              <div className="flex flex-row gap-2 items-end justify-start">
                <span className="text-black text-left font-inter font-semibold text-[33px] leading-[110%]">
                  500원
                </span>
                <span className="text-black text-left font-inter font-medium text-sm leading-[150%]">
                  1달 기준
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-end w-full">
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
            </div>
            <button className="btn btn-active bg-[#a974ff] px-6 py-3.5 text-[white] border-0 w-full">
              <span className="text-white text-left font-inter font-medium text-sm leading-[150%]">
                Select
              </span>
            </button>
          </div>

          {/* 이제는 나도 엔솔로져 플랜 */}
          <div className="bg-white rounded-[12px] p-[48px] flex flex-col gap-[32px] items-start justify-end w-[406px] shadow-lg">
            <div className="flex flex-col gap-3 items-start justify-end">
              <h2 className="text-[#9a1aff] text-left font-inter font-medium text-sm leading-[150%] opacity-80">
                이제는 나도 엔솔로져
              </h2>
              <div className="flex flex-row gap-2 items-end justify-start">
                <span className="text-[#9a1aff] text-left font-inter font-semibold text-[33px] leading-[110%]">
                  1000원
                </span>
                <span className="text-[#9a1aff] text-left font-inter font-medium text-sm leading-[150%]">
                  1달 기준
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-end w-full">
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
            </div>
            <button className="btn btn-active bg-[#a974ff] px-6 py-3.5 text-[white] border-0 w-full">
              <span className="text-white text-left font-inter font-medium text-sm leading-[150%]">
                Select
              </span>
            </button>
          </div>

          {/* 앤솔로지 고인물 플랜 */}
          <div className="bg-white rounded-[12px] p-[48px] flex flex-col gap-[32px] items-start justify-end w-[405px] shadow-lg">
            <div className="flex flex-col gap-3 items-start justify-end">
              <h2 className="text-black text-left font-inter font-medium text-sm leading-[150%] opacity-80">
                앤솔로지 고인물
              </h2>
              <div className="flex flex-row gap-2 items-end justify-start">
                <span className="text-black text-left font-inter font-semibold text-[33px] leading-[110%]">
                  2000원
                </span>
                <span className="text-black text-left font-inter font-medium text-sm leading-[150%]">
                  1달 기준
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-end w-full">
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
              <p className="text-gray-500 text-left font-inter text-lg leading-[150%] font-medium w-full">
                Feature
              </p>
            </div>
            <button className="btn btn-active bg-[#a974ff] px-6 py-3.5 text-[white] border-0 w-full">
              <span className="text-white text-left font-inter font-medium text-sm leading-[150%]">
                Select
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 섹션 */}
      <section className="flex flex-col items-start justify-start my-12 mx-auto w-full max-w-[1259px] gap-8 mt-[150px]">
        <h2 className="text-black text-left font-inter font-semibold text-5xl leading-[110%] w-full">
          무엇이든 물어보세요
        </h2>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <div className="faq-question" onClick={() => handleFAQClick(0)}>
              <h3 className="text-black text-left font-inter text-xl leading-[150%] font-normal flex-1">
                사진을 올리는 용량은 제한이 얼마나 되어 있나요?
              </h3>
              <span
                className={`text-gray-500 text-left font-inter font-semibold text-4xl leading-[110%] faq-icon ${
                  openFAQ[0] ? "open minus" : ""
                }`}
              >
                {openFAQ[0] ? "-" : "+"}
              </span>
            </div>
            <p
              className={`text-gray-500 text-left font-inter text-lg leading-[150%] font-medium faq-answer ${
                openFAQ[0] ? "open" : ""
              }`}
            >
              Answer the frequently asked question in a simple sentence, a
              longish paragraph, or even in a list.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="faq-question" onClick={() => handleFAQClick(1)}>
              <h3 className="text-black text-left font-inter text-xl leading-[150%] font-normal flex-1">
                친구랑 실시간으로 연동해서 카메라를 켜고 대화하면서 나만의
                사진관을 만들 수 있나요?
              </h3>
              <span
                className={`text-gray-500 text-left font-inter font-semibold text-4xl leading-[110%] faq-icon ${
                  openFAQ[1] ? "open minus" : ""
                }`}
              >
                {openFAQ[1] ? "-" : "+"}
              </span>
            </div>
            <p
              className={`text-gray-500 text-left font-inter text-lg leading-[150%] font-medium faq-answer ${
                openFAQ[1] ? "open" : ""
              }`}
            >
              Answer the frequently asked question in a simple sentence, a
              longish paragraph, or even in a list.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="faq-question" onClick={() => handleFAQClick(2)}>
              <h3 className="text-black text-left font-inter text-xl leading-[150%] font-normal flex-1">
                나와 친구의 그림을 앤솔머신에 넣으면 무슨 소원을 빌 수 있나요?
              </h3>
              <span
                className={`text-gray-500 text-left font-inter font-semibold text-4xl leading-[110%] faq-icon ${
                  openFAQ[2] ? "open minus" : ""
                }`}
              >
                {openFAQ[2] ? "-" : "+"}
              </span>
            </div>
            <p
              className={`text-gray-500 text-left font-inter text-lg leading-[150%] font-medium faq-answer ${
                openFAQ[2] ? "open" : ""
              }`}
            >
              Answer the frequently asked question in a simple sentence, a
              longish paragraph, or even in a list.
            </p>
          </div>
        </div>
      </section>

      {/* 친구 찾기 섹션 */}
      <section className="bg-[#f7f7f7] py-[120px] flex flex-col gap-6 items-center justify-start w-full my-[400px]">
        <div className="flex flex-col gap-6 items-center justify-start w-[764px]">
          <h2 className="text-black text-center font-inter font-semibold text-5xl leading-[110%] w-full">
            앤솔 궤도에서 친구 찾기
          </h2>
          <p className="text-gray-500 text-center font-inter text-xl leading-[150%] font-normal flex items-center justify-center w-full">
            Plus a subheading for your site’s footer
          </p>
          <button className="btn btn-active bg-[#a974ff] px-6 py-3.5 text-[white] border-0">
            button
          </button>
        </div>
      </section>
    </div>
  );
};

export default PrintPage;
