"use client";

import React from "react";
import Image from "next/image";
import AboutImg1 from "@/assets/about/aboutImg1.jpg";
import AboutImg2 from "@/assets/about/aboutImg2.jpg";
import AboutImg3 from "@/assets/about/aboutImg3.jpg";
import AboutImg4 from "@/assets/about/aboutImg4.jpg";

import Icon1 from "@/assets/about/icon1.png";
import Icon2 from "@/assets/about/icon2.png";
import Icon3 from "@/assets/about/icon3.png";
import Icon4 from "@/assets/about/icon4.png";

import { useRouter } from "next/navigation";

const AboutPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center px-8 mt-[100px] mb-[50px] box-border overflow-hidden">
      <div className="flex flex-col gap-6 items-center justify-start w-full max-w-6xl mx-auto mb-40">
        <h1 className="text-black text-center font-semibold text-[3.8vw] leading-tight">
          앤솔로지 서비스 소개
        </h1>
        <p className="text-purple-500 text-center font-inter text-[2vw] leading-loose">
          앤솔로지에서 앤솔로져 여러분만의 다양한 시간과 공간을 경험하세요
        </p>
        <button className="btn btn-active bg-[#A974FF] font-medium px-6 py-3.5 text-[white] border-0">
          첫 페이지로 이동하기
        </button>
        <button
          className="btn btn-active bg-[#A974FF] font-medium px-6 py-3.5 text-[white] border-0"
          onClick={() =>
            router.push("https://svelte-playground-tau.vercel.app/gallery")
          }
        >
          둘러보기
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto mb-40">
        <div className="flex flex-col items-start justify-center w-full md:w-1/2">
          <div className=" ml-[2.5vw]">
            <h2 className="text-purple-600 text-left font-medium text-[2.5vw] leading-tight mt-5">
              엔솔 기상청으로 이동하기
            </h2>
            <p className="text-gray-500 text-left font-inter text-[1.58vw] leading-loose">
              현재 자기 자신의 심리 상태를 알아보고
              <br />
              자신의 마음 날씨에 따른 사진 테마 추천을 받아보세요.
            </p>
            <button className="btn btn-active bg-[#A974FF] px-6 py-3.5 text-[white] border-0">
              Button
            </button>
          </div>
        </div>
        <div className="w-[45vw] mr-[2.0vw] mt-0">
          <Image
            src={AboutImg1}
            alt="About Image 1"
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto mb-40">
        <div className="w-[45vw]  ml-[2.0vw] mb-0">
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
        <div className="flex flex-col items-start justify-center w-full md:w-1/2">
          <div className="ml-[2.5vw]">
            <h2 className="text-purple-700 text-left font-medium text-[2.5vw] leading-tight mt-5">
              엔솔금고로 이동하기
            </h2>
            <p className="text-gray-500 text-left font-inter text-[1.58vw] leading-loose">
              제작자는 일에 필요한 프린터 서비스를,
              <br />
              앤솔로져는 필요한 사진을 출력하는 서비스를 이용해보세요.
            </p>
            <button className="btn btn-active bg-[#A974FF] px-6 py-3.5 text-[white] border-0">
              Button
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto mb-40">
        <div className="flex flex-col items-start justify-center w-full md:w-1/2">
          <div className="ml-[2.5vw] mr-[1vw]">
            <h2 className="text-purple-600 text-left font-medium text-[2.5vw] leading-tight mt-5">
              엔솔 궤도로 이동하기
            </h2>
            <p className="text-gray-500 text-left font-inter text-[1.58vw] leading-loose">
              앤솔 궤도로 이동해서, 궤도에 있는 다른 앤솔로져들과
              <br />
              색다른 의미가 있는 사진을 남기고 기억을 저장해 보세요.
            </p>
            <button
              className="btn btn-active bg-[#A974FF] px-6 py-3.5 text-[white] border-0"
              onClick={() => router.push("/orbit/travel")}
            >
              Button
            </button>
          </div>
        </div>
        <div className="w-[45vw] mr-[2.0vw] mt-0">
          <Image
            src={AboutImg3}
            alt="About Image 1"
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
            width={700}
            height={400}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto mb-40">
        <div className="w-[45vw] ml-[2.0vw] mb-0">
          <Image
            src={AboutImg4}
            alt="About Image 2"
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
            width={700}
            height={400}
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full md:w-1/2">
          <div className="ml-[2.5vw]">
            <h2 className="text-purple-700 text-left font-medium text-[2.5vw] leading-tight mt-5">
              엔솔머신으로 이동하기
            </h2>
            <p className="text-gray-500 text-left font-inter text-[1.58vw] leading-loose">
              앤솔 머신으로 이동해 앤솔 머신에 추후에 출력하고 싶은 사진들을
              <br />
              저장하고 본인만의 앤솔 머신을 업그레이드 시켜 보세요
            </p>
            <button
              className="btn btn-active bg-[#A974FF] px-6 py-3.5 text-[white] border-0"
              onClick={() => router.push("/machine")}
            >
              Button
            </button>
          </div>
        </div>
      </div>



      <div className="flex flex-col md:flex-row gap-12 items-start justify-between w-full ml-5 md:ml-11 mb-20">
        <div className="flex flex-col gap-2 items-start justify-center w-full md:w-1/2">
          <div className="flex-shrink-0 w-[1.5vw] h-[1.5vw] relative overflow-hidden">
            <Image
              src={Icon1}
              alt="About Icon 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md w-3/4 h-3/4 absolute right-[12.5%] left-[12.5%] bottom-[12.5%] top-[12.5%] overflow-visible"
            />
          </div>
          <h3 className="text-black text-left font-inter text-[1.5vw] leading-loose">
            앤솔로지에서 만든 사진을 외부에 공유하기
          </h3>
          <p className="text-gray-500 text-left font-inter text-[1vw] leading-loose">
            자신 스스로 풍경을 찍은 사진을 앤솔로지에 있는 새로운 디자인을 입혀
            자연스럽고 특별한 의미를 만들어보세요. 그리고 그 사진을 소셜
            커뮤니티(블로그, 트위터, 인스타 등)에 공유해 보세요.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center w-full md:w-1/2">
          <div className="flex-shrink-0 w-[1.5vw] h-[1.5vw] relative overflow-hidden">
            <Image
              src={Icon2}
              alt="About Icon 3"
              layout="fill"
              objectFit="cover"
              className="rounded-md w-3/4 h-3/4 absolute right-[12.5%] left-[12.5%] bottom-[12.5%] top-[12.5%] overflow-visible"
            />
          </div>
          <h3 className="text-black text-left font-inter text-[1.5vw] leading-loose">
            앤솔머신 소식 읽기
          </h3>
          <p className="text-gray-500 text-left font-inter text-[1vw] leading-loose">
            앤솔머신의 공사 변화 소식을 전달해요. 뉴스에 자신의 사건을 제보하면,
            <br />
            자신의 이야기가 앤솔 데스크에 대서 특필 될 거에요.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start justify-between w-full ml-5 md:ml-11 mb-20">
        <div className="flex flex-col gap-2 items-start justify-center w-full md:w-1/2">
<<<<<<< HEAD
          <div className="flex-shrink-0 w-[2vw] h-[2vw] relative overflow-hidden ">
=======
        <div className="flex-shrink-0 w-[1.5vw] h-[1.5vw] relative overflow-hidden ">
>>>>>>> 77e6e9e (FIX 크기 수정)
            <Image
              src={Icon3}
              alt="About Icon 2"
              layout="fill"
              objectFit="fill"
              className="rounded-md w-full h-full absolute right-0 bottom-0 overflow-visible"
            />
          </div>
          <h3 className="text-black text-left font-inter text-[1.5vw] leading-loose">
            앤솔로지 캐릭터랑 게임하고 앤솔 머신 자물쇠 얻기
          </h3>
          <p className="text-gray-500 text-left font-inter text-[1vw] leading-loose">
            유일한 현질 요소로 사용
          </p>
        </div>

        <div className="flex flex-col gap-2 items-start justify-center w-full md:w-1/2 mb-40">
          <div className="flex-shrink-0 w-[1.5vw] h-[1.5vw] relative overflow-hidden">
            <Image
              src={Icon4}
              alt="About Icon 4"
              layout="fill"
              objectFit="cover"
              className="rounded-md w-3/4 h-3/4 absolute right-[12.5%] left-[12.5%] bottom-[15.63%] top-[9.38%] overflow-visible"
            />
          </div>
          <h3 className="text-black text-left font-inter text-[1.5vw] leading-loose">
            앤솔머신을 해제하는 달력 꾸미기
          </h3>
          <p className="text-gray-500 text-left font-inter text-[1vw] leading-loose">
            달력은 오프라인으로 생산 가능하며 본인이 필요할 시에 목적에 따라서,
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
