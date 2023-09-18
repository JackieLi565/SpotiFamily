"use client";
import { FC } from "react";
import Image from "next/image";
import axios from "axios";
type MemberProps = {
  name: string;
  imageURL: string;
  payment: boolean;
  lastPayment: string;
  outstandingBalance: number;
  id: string;
};
const Member: FC<MemberProps> = ({
  name,
  imageURL,
  payment,
  outstandingBalance,
  lastPayment,
  id,
}) => {
  const deleteMutation = async () => {
    try {
      await axios.delete(`/api/user/${id}`);
    } catch (e: any) {
      console.log(e.message, "error");
    }
  };

  const updateMutation = async () => {
    try {
      await axios.put(`/api/user/${id}`);
    } catch (e: any) {
      console.log(e.message, "error");
    }
  };
  return (
    <div className="space-y-6 p-5 rounded-lg bg-elevated-base">
      <Image
        src={imageURL ? imageURL : ""}
        alt={`${name}'s Profile Picture`}
        className="w-64 h-64 rounded-full m-auto"
        width={10000}
        height={10000}
      />

      <h1 className="text-white hover:cursor-pointer hover:text-primary-green text-xl md:text-2xl">
        {name}
      </h1>
      <div className="border-b border-sub-gray" />
      <h1 className="text-white text-lg">
        Payment Status:{" "}
        {payment ? (
          <span className="text-primary-green">Paid</span>
        ) : (
          <span className=" text-red-600">Pending</span>
        )}
      </h1>
      <h1 className="text-white text-lg">
        Last Payment: <span className="text-primary-green">{lastPayment}</span>
      </h1>
      <h1 className="text-white text-lg">
        Outstanding Balance:{" "}
        {outstandingBalance > 0 ? (
          <span className="text-red-600">
            ${outstandingBalance.toPrecision(3)}
          </span>
        ) : (
          <span className="text-primary-green">
            ${outstandingBalance.toPrecision(3)}
          </span>
        )}
      </h1>
      <div className="space-x-2">
        <button
          onClick={deleteMutation}
          className="px-4 py-1 bg-red-600 text-white hover:bg-opacity-80 transition-colors rounded-md"
        >
          Remove
        </button>
        <button
          onClick={updateMutation}
          className="px-4 py-1 bg-primary-green text-white bg-opacity-80 hover:bg-opacity-100 transition-colors rounded-md"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Member;
