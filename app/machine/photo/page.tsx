"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // useRouter 대신 useRouter를 가져와야 함

export default function Photo() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const router = useRouter();

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
      router.push('/machine/edit');
    }
  };

  return (
    <main className="px-20 pt-20 pb-[84px]">
      <h1>사진 전송하기</h1>
      <input type="file" onChange={handleImageUpload} />
      {uploadedImage && (
        <button onClick={handleEditClick} className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]">
          편집하기
        </button>
      )}
    </main>
  );
}
