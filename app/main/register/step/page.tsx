import RegisterStepForm from "@/components/form/RegisterStepForm";
import { Suspense } from "react";

export default function Step() {
  return (
    <main className="flex justify-between px-20 pt-[52px] pb-[74px]">
      <section>
        <figure></figure>
      </section>
      <Suspense>
        <RegisterStepForm />
      </Suspense>
    </main>
  );
}
