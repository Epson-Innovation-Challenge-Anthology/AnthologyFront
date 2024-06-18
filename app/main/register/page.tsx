import RegisterForm from "@/components/form/RegisterForm";

export default function Register() {
  return (
    <main className="px-20 pt-20 pb-[84px]">
      <section>
        <h2 className="font-bold text-[64px] text-[#8F00FF]">
          앤솔로지 서비스에 오신 것을 환영합니다
        </h2>
        <p className="mt-20 font-medium text-xl">
          앤솔로지를 통해서 일상에서 잊혀지지 않는 기억을 공유하고 남겨보세요.
        </p>
      </section>
      <RegisterForm />
    </main>
  );
}
