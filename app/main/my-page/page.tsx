"use client";

import axios from "@/api/clientAxios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import PlusIcon from "@/assets/icon/plus.png";
import { validateImage } from "@/util/validateInput";
import { useModalStore } from "@/stores/modalStore";

export default function MyPage() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState<MyInfoResponse | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [inputs, setInputs] = useState([{ id: 0, url: "" }]);
  const { openModal } = useModalStore();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/users/me");
      const data: MyInfoResponse = response.data.data;
      setData(data);
      setProfileImage(data.profile_image);
      if (data.urls.length > 0) {
        setInputs(data.urls.map((url, index) => ({ id: index, url: url })));
      }
    }
    fetchData();
  }, []);

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    if (!validateImage(file)) {
      openModal({
        title: "입력오류",
        text: "이미지를 업로드하세요.",
      });
      document.getElementById("check_modal")?.click();
      return;
    }
    const response = await axios({
      method: "POST",
      url: "/api/resources/picture",
      data: { file },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data: FileUploadResponse = response.data.data;
    const newProfileImage = data.image_url;
    setProfileImage(newProfileImage);

    axios.patch("/api/users/me/profile-image", {
      profile_image: newProfileImage,
    });
  };

  const uploadImage = () => {
    if (!fileInputRef || !fileInputRef.current) return;
    fileInputRef.current.click();
  };

  const addInput = () => {
    const newId = inputs.length;
    setInputs([...inputs, { id: newId, url: "" }]);
  };

  const handleInputChange = (id: number, event: any) => {
    const newInputs = inputs.map((input) =>
      input.id === id ? { ...input, url: event.target.value } : input
    );
    setInputs(newInputs);
  };

  const onSubmit = async (field: FieldValues) => {
    const urls = inputs.filter((input) => input.url).map((input) => input.url);
    if (!data || !data.id || !field.name || !field.email) {
      openModal({
        title: "입력오류",
        text: "모든 항목을 입력해주세요.",
      });
      document.getElementById("check_modal")?.click();
      console.log(data);
      console.log(field.name + field.email);
      return;
    }

    const request: UpdateProfileRequest = {
      id: data.id,
      name: field.name,
      service_email: field.email,
      urls: urls,
    };
    await axios.patch("/api/users/me", request);
  };

  return (
    <main className="mx-auto mt-[72px] w-[613px] mb-[94px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mt-[32px] font-semibold text-[28px]">나의 프로필</h1>
        <div className="flex items-center mb-4 mt-8">
          <div className="relative w-16 h-16">
            <Image
              src={
                profileImage ||
                "https://palm-dev.d3fau1t.net/pictures/person.png"
              }
              alt="프로필 사진"
              layout="fill"
              className="rounded-full object-fill"
            />
          </div>
          <div className="ml-6">
            <h2>{data && data.name}</h2>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              className="text-[#828282]"
              onClick={uploadImage}
            >
              프로필 사진 변경하기
            </button>
          </div>
        </div>

        <label htmlFor="name">앱솔로지 활동명</label>
        <input
          type="text"
          id="name"
          value={(data && data.name) || ""}
          className="input input-bordered w-[613px] h-[40px] mt-2 mb-[31px]"
          {...register("name")}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={(data && data.email) || ""}
          className="input input-bordered w-[613px] h-[40px] mt-2 mb-[31px]"
          {...register("email")}
        />

        <label>URLs</label>
        <div>
          {inputs.map((input) => (
            <input
              type="text"
              value={input.url}
              key={input.id}
              className="input input-bordered w-[613px] h-[40px] mt-2"
              onChange={(event) => handleInputChange(input.id, event)}
              placeholder="개인 URL"
            ></input>
          ))}
          <button type="button" className="mb-[31px] mt-2" onClick={addInput}>
            <Image
              src={PlusIcon}
              alt="plus icon"
              className="w-6 h-6 object-contain inline mr-2"
            />
            Add another
          </button>
        </div>

        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          rows={4}
          className="textarea textarea-bordered block w-[613px] mt-2"
          {...register("bio")}
        ></textarea>

        <button className="btn btn-active w-[154px] h-[40px] bg-[#FF7D7D] text-[white] mt-[31px]">
          변경사항 저장하기
        </button>
      </form>
    </main>
  );
}
