import RegisterStepForm from "@/components/form/RegisterStepForm";
import { Suspense } from "react";
import MainPageImage from "@/assets/image/mainPageImg.jpg";
import Image from "next/image";

export default function Step() {
  return (
    <main className="flex justify-between px-20 pt-[52px] pb-[74px]">
      <section>
        <figure>
          <Image
            src={MainPageImage}
            className="w-[767px] h-[730px] object-contain"
            alt="mainpage image"
          />
        </figure>
      </section>
      <Suspense>
        <RegisterStepForm />
      </Suspense>
    </main>
  );
}
