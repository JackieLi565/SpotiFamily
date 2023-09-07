"use client";
import { FC, useState } from "react";
import { addUser } from "@/utils/actions";
import { ActionResponse } from "@/types/types";
import SubmitButton from "../Forms/SubmitButton";

const AddUser: FC = () => {
  const [mutationResult, setMutationResult] = useState<ActionResponse>({
    success: false,
    error: false,
  });
  const action = async (formData: FormData) => {
    const status = await addUser(formData);
    setMutationResult(status);
  };

  const renderResult = () => {
    if (mutationResult) {
      if (mutationResult.error) {
        return <p className=" text-red-600">An Error Occured</p>;
      }
      if (mutationResult.success) {
        return <p className=" text-primary-green">Successfully Added User</p>;
      }
    }
  };

  return (
    <form
      className=" bg-elevated-base w-96 rounded-md h-96 p-4 space-y-4 relative"
      action={action}
    >
      <div className="text-center">
        <h1 className="text-white text-2xl">Add Member</h1>
        <p className="text-sub-gray">
          After adding a user to the system be sure to add thme to the
          SpotifyDev list
        </p>
      </div>
      <label className="text-white block">
        User Email:
        <input
          name="email"
          type="text"
          className="block px-2 py-1 mt-2 rounded bg-transparent border-sub-gray border w-full"
        />
      </label>
      <SubmitButton>Add User</SubmitButton>
      <p>{renderResult()}</p>
    </form>
  );
};

export default AddUser;