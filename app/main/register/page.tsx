import RegisterForm from "@/components/form/RegisterForm";
import MainPageImage from "@/assets/image/mainPageImg.jpg";
import Image from "next/image";

export default function Register() {
  return (
    <main className="px-20 pt-[107px] pb-[84px] relative flex justify-between">
      <section className="absolute top-[167px]">
        <h2 className="font-bold text-[64px] text-[#8F00FF]">
          앤솔로지 서비스에 오신 것을 환영합니다
        </h2>
        <p className="mt-20 font-medium text-xl">
          앤솔로지를 통해서 일상에서 잊혀지지 않는 기억을 공유하고 남겨보세요.
        </p>
      </section>
      <RegisterForm />
      <section>
        <figure>
          <Image
            src={MainPageImage}
            className="w-[767px] h-[730px] object-contain"
            alt="mainpage image"
          />
        </figure>
      </section>
    </main>
  );
}
