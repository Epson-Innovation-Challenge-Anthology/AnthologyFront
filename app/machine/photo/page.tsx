"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";


export default function Photo() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const themeImage = searchParams.get('theme');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleEditClick = () => {
    if (uploadedImage) {
      sessionStorage.setItem('uploadedImage', uploadedImage);
      router.push(`/machine/edit?theme=${encodeURIComponent(themeImage || '')}`);

    } else {
      alert('파일을 선택해주세요.');
    }
  };

  return (
    <main className="px-20 pt-20 pb-[84px]">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-semibold text-[#AE76CC]">
          찍은 사진 업로드 하기
        </h1>
        <p className="text-xl text-gray-500 my-4">
          찍은 사진을 올리고,
        </p>
        <button className="btn btn-active bg-[#A974FF] font-medium px-6 py-3.5 text-[white] border-0">
          서비스 소개페이지로 돌아기기

        </button>
      </div>

      <div className="max-w-screen-lg mx-auto bg-white p-10 rounded-lg">
        <div className="flex justify-between mb-6 mt-[-20px]">
          <div></div>
          <button
            onClick={handleEditClick}
            className="text-black flex items-center space-x-2 group"
          >
            <span className="group-hover:underline">편집하기</span>
            <span>&gt;</span>
          </button>
        </div>
        <input
          type="file"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
        <div className="mt-6 h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
          {uploadedImage ? (
            <img src={uploadedImage} alt="Uploaded" className="max-h-full" />
          ) : (
            <p className="text-gray-400">사진을 업로드 해주세요</p>
          )}
        </div>
      </div>
    </main>
  );
}
