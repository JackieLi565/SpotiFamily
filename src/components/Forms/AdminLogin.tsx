"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { adminLogin } from "@/utils/actions";
import SubmitButton from "../Buttons/SubmitButton";
import { ActionResponse } from "@/types/types";

const AdminLogin: FC = () => {
  const [response, setResponse] = useState<ActionResponse>({
    success: false,
    error: false,
    message: undefined,
  });

  const action = async (formData: FormData) => {
    const res = await adminLogin(formData);
    setResponse(res);
  };
  return (
    <form action={action} className=" space-y-4 rounded-md text-sub-gray">
      <label className="block" htmlFor="">
        Account Name
        <input
          name="username"
          type="text"
          className="block bg-transparent border border-sub-gray rounded mt-2 px-2 py-1"
        />
      </label>

      <label className="block" htmlFor="">
        Account Secret
        <input
          name="password"
          type="password"
          className="block bg-transparent border border-sub-gray rounded mt-2 px-2 py-1"
        />
      </label>
      {response.error && (
        <p className="text-lg text-red-600">{response.message}</p>
      )}
      <Link href="/" className="text-sub-gray block">
        Not an admin? return back to login page{" "}
        <span className="underline text-primary-green">here</span>
      </Link>
      <SubmitButton>Login</SubmitButton>
    </form>
  );
};

export default AdminLogin;
