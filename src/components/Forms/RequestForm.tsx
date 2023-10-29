"use client";
import { FC, useState } from "react";
import SubmitButton from "../Buttons/SubmitButton";
type RequestFormProps = {
  id: string;
  name: string;
  amount: number
};
const RequestForm: FC<RequestFormProps> = () => {
  const [correct, setCorrect] = useState(true);

  return (
    <form
      className="flex flex-col max-w-sm gap-2 bg-elevated-base rounded px-4 pb-6 pt-4"
      action=""
    >
      <h1 className="text-primary-green text-2xl">Name</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-white text-xl">Amount</h2>
        <input
          type="checkbox"
          name="check"
          defaultChecked={correct}
          onChange={(e) => setCorrect(e.target.checked)}
        />
      </div>
      {!correct && (
        <input
          type="number"
          min={0}
          name="corrected"
          placeholder="Correct amount"
          className="px-2 py-0.5 bg-elevated-base rounded outline-none text-white placeholder:text-sub-gray"
        ></input>
      )}

      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default RequestForm;
