import PaymentForm from "@/components/Forms/PaymentForm";
import { validateMember } from "@/utils/auth";
import { FC } from "react";
import { cookies } from "next/headers";
const RequestData = () => {};

const Page: FC = async () => {
  const cookieStore = cookies();
  validateMember(cookieStore);
  return (
    <main className="flex-1">
      <h1 className="text-4xl text-white px-36 py-10">
        <span className="text-primary-green">Payment</span> Requests
      </h1>
      <section className="flex justify-center items-center h-[300px] ">
        <PaymentForm />
      </section>
      <section></section>
    </main>
  );
};

export default Page;
