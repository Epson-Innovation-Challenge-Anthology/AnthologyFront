import React from "react";
import Image from "next/image";
import AboutImg1 from "@/assets/about/aboutImg1.jpg";
import AboutImg2 from "@/assets/about/aboutImg2.jpg";
import Icon1 from "@/assets/about/icon1.png";
import Icon2 from "@/assets/about/icon2.png";
import Icon3 from "@/assets/about/icon3.png";
import Icon4 from "@/assets/about/icon4.png";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-8 mt-[50px] mb-[400px]">
      <div className="flex flex-col gap-6 items-center justify-start w-full max-w-6xl mx-auto mb-40">
        <h1 className="text-black text-center font-semibold text-6xl leading-tight">
          앤솔로지 서비스 소개
        </h1>
        <p className="text-purple-500 text-center font-inter text-2xl leading-loose">
          앤솔로지에서 앤솔로져 여러분만의 다양한 시간과 공간을 경험하세요
        </p>
        <button className="bg-purple-400 rounded-md py-3 px-6 flex flex-row gap-2 items-center justify-center shadow">
          <span className="text-white text-left font-medium text-base leading-loose">
            Button
          </span>
        </button>
      </div>

      <div className="flex flex-row items-center justify-between w-full mx-auto mb-40">
        <div className="flex flex-col items-start justify-center w-1/2">
          <div style={{ marginLeft: "45px" }}>
            <h2 className="text-purple-600 text-left font-medium text-4xl leading-tight mt-[20px]">
              엔솔 기상청으로 이동하기
            </h2>
            <p className="text-gray-500 text-left font-inter text-2xl leading-loose">
              현재 자기 자신의 심리 상태를 알아보고
              <br />
              자신의 마음 날씨에 따른 사진 테마 추천을 받아보세요.
            </p>
            <button className="bg-purple-400 rounded-md py-3 px-6 flex flex-row gap-2 items-center justify-center shadow mt-[10px]">
              <span className="text-white text-left font-medium text-base leading-loose">
                Button
              </span>
            </button>
          </div>
        </div>
        <div
          className="w-1/2 mr-[40px]"
          style={{ width: "670px", height: "400px" }}
        >
          <Image
            src={AboutImg1}
            alt="About Image 1"
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
            width={700}
            height={400}
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full mx-auto mb-40">
        <div
          className="w-1/2 ml-[40px]"
          style={{ width: "670px", height: "400px" }}
        >
          <Image
            src={AboutImg2}
            alt="About Image 2"
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
            width={700}
            height={400}
          />
        </div>
        <div className="flex flex-col items-start justify-center w-1/2">
          <div style={{ marginLeft: "45px" }}>
            <h2 className="text-purple-700 text-left font-medium text-4xl leading-tight mt-[20px]">
              엔솔머신으로 이동하기
            </h2>
            <p className="text-gray-500 text-left font-inter text-2xl leading-loose">
              제작자는 일에 필요한 프린터 서비스를,
              <br />
              앤솔로져는 필요한 사진을 출력하는 서비스를 이용해보세요.
            </p>
            <button className="bg-purple-400 rounded-md py-3 px-6 flex flex-row gap-2 items-center justify-center shadow mt-[10px]">
              <span className="text-white text-left font-medium text-base leading-loose">
                Button
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full mx-auto mb-40">
        <div className="flex flex-col items-start justify-center w-1/2">
          <div style={{ marginLeft: "45px" }}>
            <h2 className="text-purple-600 text-left font-medium text-4xl leading-tight mt-[20px]">
              엔솔 금고로 이동하기
            </h2>
            <p className="text-gray-500 text-left font-inter text-2xl leading-loose">
              A subheading for this section, as long or as short as you like
            </p>
            <button className="bg-purple-400 rounded-md py-3 px-6 flex flex-row gap-2 items-center justify-center shadow">
              <span className="text-white text-left font-medium text-base leading-loose">
                Button
              </span>
            </button>
          </div>
        </div>
        <div
          className="w-1/2 mr-[40px]"
          style={{ width: "670px", height: "400px" }}
        >
          <Image
            src={AboutImg1}
            alt="About Image 1"
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
            width={700}
            height={400}
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full mx-auto mb-40">
        <div
          className="w-1/2 ml-[40px]"
          style={{ width: "670px", height: "400px" }}
        >
          <Image
            src={AboutImg2}
            alt="About Image 2"
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
            width={700}
            height={400}
          />
        </div>
        <div className="flex flex-col items-start justify-center w-1/2">
          <div style={{ marginLeft: "45px" }}>
            <h2 className="text-purple-700 text-left font-medium text-4xl leading-tight mt-[20px]">
              엔솔머신으로 이동하기
            </h2>
            <p className="text-gray-500 text-left font-inter text-2xl leading-loose">
              제작자는 일에 필요한 프린터 서비스를,
              <br />
              앤솔로져는 필요한 사진을 출력하는 서비스를 이용해보세요.
            </p>
            <button className="bg-purple-400 rounded-md py-3 px-6 flex flex-row gap-2 items-center justify-center shadow mt-[10px]">
              <span className="text-white text-left font-medium text-base leading-loose">
                Button
              </span>
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-purple-700 text-left font-inter text-4xl leading-tight font-semibold mt-20 w-full ml-[45px] mx-auto mb-20">
        Heading
      </h2>

      <div className="flex flex-row gap-12 items-start justify-between w-fulll ml-[45px] mx-auto mb-20">
        <div className="flex flex-col gap-2 items-start justify-center w-1/2">
          <div className="flex-shrink-0 w-8 h-8 relative overflow-hidden">
            <Image
              src={Icon1}
              alt="About Icon 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md w-3/4 h-3/4 absolute right-[12.5%] left-[12.5%] bottom-[12.5%] top-[12.5%] overflow-visible"
            />
          </div>
          <h3 className="text-black text-left font-inter text-2xl leading-loose">
            앤솔로지에서 만든 사진을 외부에 공유하기
          </h3>
          <p className="text-gray-500 text-left font-inter text-lg leading-loose">
            Body text for whatever you’d like to say. Add main takeaway points,
            quotes, anecdotes, or even a very very short story.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center w-1/2">
          <div className="flex-shrink-0 w-8 h-8 relative overflow-hidden">
            <Image
              src={Icon2}
              alt="About Icon 3"
              layout="fill"
              objectFit="cover"
              className="rounded-md w-3/4 h-3/4 absolute right-[12.5%] left-[12.5%] bottom-[12.5%] top-[12.5%] overflow-visible"
            />
          </div>
          <h3 className="text-black text-left font-inter text-2xl leading-loose">
            앤솔머신 뉴스 읽기
          </h3>
          <p className="text-gray-500 text-left font-inter text-lg leading-loose">
            Body text for whatever you’d like to suggest. Add main takeaway
            points, quotes, anecdotes, or even a very very short story.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-12 items-start justify-between w-fulll ml-[45px] mx-auto mb-20">
        <div className="flex flex-col gap-2 items-start justify-center w-1/2">
          <div className="flex-shrink-0 w-8 h-8 relative overflow-hidden">
            <div className="w-6 h-7 absolute left-1 top-[2px]">
              <Image
                src={Icon3}
                alt="About Icon 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md w-full h-full absolute right-0 bottom-0 overflow-visible"
              />
            </div>
          </div>
          <h3 className="text-black text-left font-inter text-2xl leading-loose">
            앤솔머신 잠금 설정하기
          </h3>
          <p className="text-gray-500 text-left font-inter text-lg leading-loose">
            Body text for whatever you’d like to claim. Add main takeaway
            points, quotes, anecdotes, or even a very very short story.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-start justify-center w-1/2">
          <div className="flex-shrink-0 w-8 h-8 relative overflow-hidden">
            <Image
              src={Icon4}
              alt="About Icon 4"
              layout="fill"
              objectFit="cover"
              className="rounded-md w-3/4 h-3/4 absolute right-[12.5%] left-[12.5%] bottom-[15.63%] top-[9.38%] overflow-visible"
            />
          </div>
          <h3 className="text-black text-left font-inter text-2xl leading-loose">
            앤솔머신을 해제하는 날짜 체크하기
          </h3>
          <p className="text-gray-500 text-left font-inter text-lg leading-loose">
            Body text for whatever you’d like to type. Add main takeaway points,
            quotes, anecdotes, or even a very very short story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
