import PaymentForm from "@/components/Forms/PaymentForm";
import { FC } from "react";

const Page: FC = () => {
  return (
    <main className="flex-1">
      <h1 className="text-4xl text-white max-w-6xl m-auto py-10">
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
