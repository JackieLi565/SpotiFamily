import PaymentForm from "@/components/Forms/PaymentForm";
import { validateMember } from "@/utils/auth";
import { PaymentRequest } from "@/types/types";
import { FC } from "react";
import { cookies } from "next/headers";
import RequestCard from "@/components/Cards/Request";
import Reveal from "@/components/Animations/Reveal";
import AdminSDK from "@/lib/firebase.config";
import { collections } from "@/constants";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const RequestData = async () => {
  const snapshot = await AdminSDK.database
    .collection(collections.requests)
    .get();

  const acceptedDocs = snapshot.docs.filter((doc) => {
    const docData = doc.data() as PaymentRequest;

    return docData.state;
  });

  const pendingDocs = snapshot.docs.filter((doc) => {
    const docData = doc.data() as PaymentRequest;

    return !docData.state;
  });

  return {
    accepted: acceptedDocs.map((doc) => ({
      data: doc.data() as PaymentRequest,
      id: doc.id,
    })),
    pending: pendingDocs.map((doc) => ({
      data: doc.data() as PaymentRequest,
      id: doc.id,
    })),
  };
};

const Page: FC = async () => {
  const cookieStore = cookies();
  validateMember(cookieStore);
  const { accepted, pending } = await RequestData();

  return (
    <main className="flex-1 overflow-y-auto py-4">
      <h1 className="text-4xl text-white px-36 py-10">
        <span className="text-primary-green">Payment</span> Request Form
      </h1>
      <section className="flex justify-center items-center h-[300px]">
        <PaymentForm />
      </section>
      <h1 className="text-4xl text-white px-36 py-10">
        <span className="text-primary-green">Payment</span> Accepted
      </h1>
      <section className="space-y-3">
        {accepted.length > 0 ? (
          accepted.map(({ data, id }) => (
            <Reveal>
              <RequestCard key={id} id={id} data={data} />
            </Reveal>
          ))
        ) : (
          <div className="max-w-7xl m-auto flex flex-col gap-4">
            <ExclamationCircleOutlined className="text-sub-gray text-center text-6xl" />
            <h1 className="text-sub-gray text-center text-2xl">
              Looks There Are No Accepted Payments.
            </h1>
          </div>
        )}
      </section>
      <h1 className="text-4xl text-white px-36 py-10">
        <span className="text-primary-green">Payment</span> Request
      </h1>
      <section className="space-y-3">
        {pending.length > 0 ? (
          pending.map(({ data, id }) => (
            <Reveal>
              <RequestCard key={id} id={id} data={data} />
            </Reveal>
          ))
        ) : (
          <div className="max-w-7xl m-auto flex flex-col gap-4">
            <ExclamationCircleOutlined className="text-sub-gray text-center text-6xl" />
            <h1 className="text-sub-gray text-center text-2xl">
              Looks There Are No Accepted Payments.
            </h1>
          </div>
        )}
      </section>
    </main>
  );
};

export default Page;
