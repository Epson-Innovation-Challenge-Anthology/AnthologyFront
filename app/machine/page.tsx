import Link from "next/link";

export default function Machine() {
  return (
    <main className="px-20 pt-20 pb-[84px]">
      <h1>테마 설정</h1>
      <Link href="/machine/photo" passHref>
        <button className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]">
          사진전송
        </button>
      </Link>
    </main>
  );
}
