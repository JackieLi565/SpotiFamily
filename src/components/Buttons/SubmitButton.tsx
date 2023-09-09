"use client";
import { FC } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type SubmitButtonProps = {
  children: string;
};
const SubmitButton: FC<SubmitButtonProps> = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={` px-4 py-1 bg-primary-green text-white bg-opacity-80 hover:bg-opacity-100 transition-colors rounded-md ${
        pending ? "hover:cursor-progress bg-opacity-40" : "hover:cursor-pointer"
      }`}
    >
      {pending ? "loading ..." : children}
    </button>
  );
};

export default SubmitButton;
