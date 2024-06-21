import Link from "next/link";

export default function Photo() {
  return (
    <main className="px-20 pt-20 pb-[84px]">
      <h1>사진 전송하기</h1>
      <Link href="/machine/edit" passHref>
        <button className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]">
          편집하기
        </button>
      </Link>
    </main>
  );
}
