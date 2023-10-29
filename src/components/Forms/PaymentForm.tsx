"use client";
import useAction from "@/hooks/useAction";
import { paymentAmount } from "@/utils/actions";
import { FC } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type PaymentFormProps = {
  outstanding: number;
};
const PaymentForm: FC<PaymentFormProps> = ({ outstanding }) => {
  const { error, success, message, setAction } = useAction();

  const action = async (formData: FormData) => {
    const res = await paymentAmount(formData);
    setAction(res);
  };

  return (
    <form
      action={action}
      className=" bg-elevated-base w-1/3 px-6 py-8 rounded-lg space-y-3 h-fit"
    >
      <h1 className="text-primary-green text-2xl">How do Payments Work?</h1>
      <p className=" text-sub-gray text-base mb-1 text-opacity-50">
        Payments on done via a check and submit basis. Users are required to
        e-transfer the correct owner domain before clicking the submit button.
        After clicking the submit button your payment will be reviewed by the
        owner. A inccorect e-transfer amount will be rejected and the
        outstanding balance will be updated. If a rejection were to occur during
        the taxing phase your account will still be taxed.
      </p>
      <div className="w-full flex h-10">
        <input
          name="amount"
          type="number"
          value={outstanding}
          readOnly
          placeholder="enter the amount you paid for"
          className="w-0 h-0"
        />
        <Submit />
      </div>
      {success && (
        <p className="text-primary-green ">Payment Successfully Requested</p>
      )}
    </form>
  );
};

export default PaymentForm;

const Submit: FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${
        pending ? " bg-opacity-30" : " bg-opacity-100"
      } bg-primary-green hover:bg-opacity-80 text-xl text-white px-6 rounded transition-all duration-200`}
    >
      {pending ? <p>loading</p> : <p>Submit</p>}
    </button>
  );
};
