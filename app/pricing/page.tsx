"use client";
import React, { useState } from "react";
import "./tapslidingstyles.css"; // styles.css 파일을 import 합니다.

const PricingPage: React.FC = () => {
  const [activePlan, setActivePlan] = useState<string>("monthly");
  const [openFAQ, setOpenFAQ] = useState<boolean[]>([false, false, false]);

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
        <h1 className="text-black text-center font-semibold text-5xl leading-tight">
          앤솔머신 사진 출력하기
        </h1>
        <p className="text-gray-500 text-center text-2xl leading-loose mt-2">
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
      <section className="flex flex-col items-center gap-10 my-12">
        <div className="plan-cards-container flex justify-center gap-10 w-full">
          {/* 처음 왔어요 플랜 */}
          <div className="plan-card hover-container bg-white w-[400px]  rounded-2xl p-12 flex flex-col gap-8 shadow-lg transition-transform duration-300 transform scale-100 hover:scale-105 border border-transparent hover:border-purple-600">
            <div className="plan-header flex flex-col gap-3">
              <h2 className="plan-title text-black text-opacity-80 text-sm font-medium">
                처음 왔어요
              </h2>
              <div className="plan-price-container flex items-baseline gap-2">
                <span className="plan-price text-black text-3xl font-semibold">
                  500원
                </span>
                <span className="plan-duration text-black text-opacity-80 text-sm font-medium">
                  1달 기준
                </span>
              </div>
            </div>
            <div className="plan-features flex flex-col gap-3">
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
            </div>
            <button className="btn bg-[#AE76CC] px-6 py-3.5 text-white w-full">
              <span className="text-white text-sm font-medium">Select</span>
            </button>
          </div>

          {/* 이제는 나도 엔솔로져 플랜 */}
          <div className="plan-card hover-container bg-white rounded-2xl p-12 w-[400px] flex flex-col gap-8 shadow-lg transition-transform duration-300 transform scale-100 hover:scale-105 border border-transparent hover:border-purple-600">
            <div className="plan-header flex flex-col gap-3">
              <h2 className="plan-title text-black text-opacity-80 text-sm font-medium">
                이제는 나도 엔솔로져
              </h2>
              <div className="plan-price-container flex items-baseline gap-2">
                <span className="plan-price  text-black text-3xl font-semibold">
                  1000원
                </span>
                <span className="plan-duration text-black text-opacity-80 text-sm font-medium">
                  1달 기준
                </span>
              </div>
            </div>
            <div className="plan-features flex flex-col gap-3">
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
            </div>
            <button className="btn bg-[#AE76CC] px-6 py-3.5 text-white w-full">
              <span className="text-white text-sm font-medium">Select</span>
            </button>
          </div>

          {/* 앤솔로지 고인물 플랜 */}
          <div className="plan-card hover-container bg-white w-[400px] rounded-2xl p-12 flex flex-col gap-8 shadow-lg transition-transform duration-300 transform scale-100 hover:scale-105 border border-transparent hover:border-purple-600">
            <div className="plan-header flex flex-col gap-3">
              <h2 className="plan-title text-black text-opacity-80 text-sm font-medium">
                앤솔로지 고인물
              </h2>
              <div className="plan-price-container flex items-baseline gap-2">
                <span className="plan-price text-black text-3xl font-semibold">
                  2000원
                </span>
                <span className="plan-duration text-black text-opacity-80 text-sm font-medium">
                  1달 기준
                </span>
              </div>
            </div>
            <div className="plan-features flex flex-col gap-3">
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
              <p className="plan-feature text-lg text-gray-500 font-medium">
                Feature
              </p>
            </div>
            <button className="btn bg-[#AE76CC] px-6 py-3.5 text-white w-full">
              <span className="text-white text-sm font-medium">Select</span>
            </button>
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 섹션 */}
      <section className="faq-section flex flex-col gap-8 my-32 mx-auto w-full max-w-screen-xl">
        <h2 className="faq-title text-black text-left font-semibold text-3xl leading-tight w-full">
          무엇이든 물어보세요
        </h2>
        <div className="faq-container flex flex-col gap-6 w-full">
          <div className="faq-item flex flex-col gap-2">
            <div className="faq-question flex justify-between items-center cursor-pointer" onClick={() => handleFAQClick(0)}>
              <h3 className="faq-question-text text-black text-xl font-normal flex-1">
                사진을 올리는 용량은 제한이 얼마나 되어 있나요?
              </h3>
              <span className={`faq-icon text-gray-500 font-semibold text-4xl ${openFAQ[0] ? "open minus" : ""}`}>
                {openFAQ[0] ? "-" : "+"}
              </span>
            </div>
            <p className={`faq-answer text-gray-500 text-lg font-medium ${openFAQ[0] ? "open" : ""}`}>
              Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
            </p>
          </div>
          <div className="faq-item flex flex-col gap-2">
            <div className="faq-question flex justify-between items-center cursor-pointer" onClick={() => handleFAQClick(1)}>
              <h3 className="faq-question-text text-black text-xl font-normal flex-1">
                친구랑 실시간으로 연동해서 카메라를 켜고 대화하면서 나만의 사진관을 만들 수 있나요?
              </h3>
              <span className={`faq-icon text-gray-500 font-semibold text-4xl ${openFAQ[1] ? "open minus" : ""}`}>
                {openFAQ[1] ? "-" : "+"}
              </span>
            </div>
            <p className={`faq-answer text-gray-500 text-lg font-medium ${openFAQ[1] ? "open" : ""}`}>
              Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
            </p>
          </div>
          <div className="faq-item flex flex-col gap-2">
            <div className="faq-question flex justify-between items-center cursor-pointer" onClick={() => handleFAQClick(2)}>
              <h3 className="faq-question-text text-black text-xl font-normal flex-1">
                나와 친구의 그림을 앤솔머신에 넣으면 무슨 소원을 빌 수 있나요?
              </h3>
              <span className={`faq-icon text-gray-500 font-semibold text-4xl ${openFAQ[2] ? "open minus" : ""}`}>
                {openFAQ[2] ? "-" : "+"}
              </span>
            </div>
            <p className={`faq-answer text-gray-500 text-lg font-medium ${openFAQ[2] ? "open" : ""}`}>
              Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
            </p>
          </div>
        </div>
      </section>

      {/* 친구 찾기 섹션 */}
      <section className="bg-[#FFDDDD] py-24 flex flex-col gap-6 items-center justify-start w-full my-96">
        <div className="flex flex-col gap-6 items-center justify-start w-3/4">
          <h2 className="text-black text-center font-semibold text-5xl leading-tight w-full">
            앤솔 궤도에서 친구 찾기
          </h2>
          <p className="text-gray-500 text-center text-xl leading-loose w-full">
            Plus a subheading for your site’s footer
          </p>
          <button className="btn bg-[#AE76CC] px-6 py-3.5 text-white">
            button
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
