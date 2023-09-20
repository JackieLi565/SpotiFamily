"use client";
import { FC } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const PaymentForm: FC = () => {
  return (
    <form action="" className=" bg-elevated-base w-2/3 px-28 py-16 rounded-lg">
      <label htmlFor="amount">
        <p className=" text-sub-gray mb-1 text-xs text-opacity-50">
          requests may take up to 24h
        </p>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="enter the amount you paid for"
            className="h-16 flex-1 px-4 text-xl outline-none shadow-md bg-transparent border border-sub-gray text-primary-green rounded  placeholder-sub-gray"
          />
          <Submit />
        </div>
      </label>
    </form>
  );
};

export default PaymentForm;

const Submit: FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="button"
      className={`${
        pending ? " bg-opacity-30" : " bg-opacity-100"
      } bg-primary-green hover:bg-opacity-80 text-xl text-white px-6 rounded transition-all duration-200`}
    >
      {pending ? <p>loading</p> : <p>Submit</p>}
    </button>
  );
};
