import LoginForm from "@/components/form/LoginForm";
import MainPageImage from "@/assets/image/mainPageImg.jpg";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex justify-between px-20 pt-[52px] pb-[74px]">
      <section>
        <figure>
          <Image
            src={MainPageImage}
            className="w-[767px] h-[764px] object-fill"
            alt="mainpage image"
          />
        </figure>
      </section>
      <LoginForm />
    </main>
  );
}
