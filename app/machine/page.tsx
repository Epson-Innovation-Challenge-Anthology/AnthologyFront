"use client";

import Image from "next/image";
import themeImg1 from "@/assets/machine/themeImg1.jpg";
import themeImg2 from "@/assets/machine/themeImg2.jpg";
import themeImg3 from "@/assets/machine/themeImg3.jpg";
import themeImg4 from "@/assets/machine/themeImg4.jpg";
import themeImg5 from "@/assets/machine/themeImg5.jpg";
import themeImg6 from "@/assets/machine/themeImg6.jpg";

import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Machine() {
  const router = useRouter();

  const themes = [
    {
      imgSrc: themeImg1.src,

      title: "도회적이고 세련된 현대적인 분위기로",
      description: "Description of first product",
    },
    {
      imgSrc: themeImg2.src,

      title: "초현실적이고 미래지향적인 분위기로",
      description: "Description of second product",
    },
    {
      imgSrc: themeImg3.src,

      title: "청량하고 산뜻한 청량감 넘치는 분위기로",
      description: "Description of third product",
    },
    {
      imgSrc: themeImg4.src,

      title: "자연 경관에서 오는 시원함을 만끽하는 분위기로",
      description: "Description of fourth product",
    },
    {
      imgSrc: themeImg5.src,

      title: "낙낙하고 오래 된 옛날 낙서장 같은 분위기로",
      description: "Description of fifth product",
    },
    {
      imgSrc: themeImg6.src,

      title: "화려하고도 풍성한 예술 세계의 분위기로",
      description: "Description of sixth product",
    },
  ];

  return (
    <main className="px-20 pt-20 pb-21">
      <div className="text-center">
        <h1 className="text-6xl font-semibold text-[#AE76CC]">
          앤솔머신에 넣을 촬영 테마 고르기
        </h1>
        <p className="text-xl text-gray-500 my-4">
          앤솔머신에 넣을 오늘의 촬영 주제를 정해주세요.
        </p>
        <Link href="/about" passHref>
          <button
            className="btn btn-active bg-[#A974FF] font-medium px-6 py-3.5 text-[white] border-0"
            onClick={() => router.push("/about")}
          >
            서비스 소개페이지로 돌아기기
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[100px] mb-[500px]">
        {themes.map((theme, index) => (
          <div key={index} className="flex flex-col items-start space-y-6">
            <div className="w-full h-48 relative mt-[100px]">
              <Image
                src={theme.imgSrc}
                alt={theme.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div>
              <h2 className="text-xl font-medium">{theme.title}</h2>
              <p className="text-gray-500 mt-2">{theme.description}</p>
              <Link
                href={`/machine/photo?theme=${encodeURIComponent(
                  theme.imgSrc
                )}`}
                passHref
                legacyBehavior
              >
                <a className="text-black mt-2 flex items-center space-x-2 group">
                  <span className="group-hover:underline">
                    해당 테마로 이동
                  </span>
                  <span>&gt;</span>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
