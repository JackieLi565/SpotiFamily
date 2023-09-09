"use client";
import { FC, useState } from "react";
import { addUser } from "@/utils/actions";
import { ActionResponse } from "@/types/types";
import SubmitButton from "../Buttons/SubmitButton";

const AddUser: FC = () => {
  const [mutationResult, setMutationResult] = useState<ActionResponse>({
    success: false,
    error: false,
  });
  const [email, setEmail] = useState(""); // Add this line to manage the email input value

  const action = async (formData: FormData) => {
    const status = await addUser(formData);
    setMutationResult(status);
    setEmail(""); // Reset email input value after mutation is complete
  };

  const renderResult = () => {
    if (mutationResult) {
      if (mutationResult.error) {
        return <p className="text-red-600">An Error Occurred</p>;
      }
      if (mutationResult.success) {
        return (
          <p className="text-primary-green">
            Successfully Added User. Please remeber to add the user's email to
            the application via Spotify Dashboard
          </p>
        );
      }
    }
  };

  return (
    <form
      className="bg-elevated-base w-96 rounded-md h-96 p-4 space-y-4 relative"
      action={action}
    >
      <div className="text-center">
        <h1 className="text-white text-2xl">Add Member</h1>
        <p className="text-sub-gray">
          After adding a user to the system be sure to add them to the
          SpotifyDev list
        </p>
      </div>
      <label className="text-white block">
        User Email:
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block px-2 py-1 mt-2 rounded bg-transparent border-sub-gray border w-full"
        />
      </label>
      <SubmitButton>Add User</SubmitButton>
      <p>{renderResult()}</p>
    </form>
  );
};

export default AddUser;
