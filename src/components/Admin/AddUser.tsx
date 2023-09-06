"use client";
import { FC, useState } from "react";
import { addUser } from "@/utils/actions";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { mutationStatus } from "@/types/types";

const AddUser: FC = () => {
  const { pending } = useFormStatus();
  const [mutationResult, setMutationResult] = useState<
    mutationStatus | undefined
  >(undefined);
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
      <button
        type="submit"
        className={`absolute bottom-4 px-4 py-1 bg-primary-green text-white bg-opacity-80 hover:bg-opacity-100 transition-colors rounded-md ${
          pending
            ? "hover:cursor-progress bg-opacity-40"
            : "hover:cursor-pointer"
        }`}
      >
        {pending ? "loading ..." : "Add User"}
      </button>
      <p>{renderResult()}</p>
    </form>
  );
};

export default AddUser;
