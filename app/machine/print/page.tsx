import Link from "next/link";

export default function Photo() {
  return (
    <main className="px-20 pt-20 pb-[84px]">
      <h1>사진 출력하기</h1>
      <Link href="/machine/print" passHref>
        <button className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]">
          프린트
        </button>
      </Link>
    </main>
  );
}
