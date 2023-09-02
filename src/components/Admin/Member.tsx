import { FC } from "react";
type MemberProps = {
  name: string;
  imageURL: string;
  payment: boolean;
  lastPayment: string;
  points: number;
  id: string;
};
const Member: FC<MemberProps> = ({
  name,
  imageURL,
  payment,
  points,
  lastPayment,
  id,
}) => {
  const renderPointsStyle = () => {
    if (points >= 500)
      return <span className="text-primary-green">{points}</span>;

    if (points < 500 && points > 200)
      return <span className=" text-orange-400">{points}</span>;

    if (points <= 200) return <span className="text-red-600">{points}</span>;
  };
  return (
    <div className="space-y-6">
      <div className=" rounded-full w-64 h-64 bg-red-300" />
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
        Current Points: {renderPointsStyle()}
      </h1>
      <div className="space-x-2">
        <button className="px-4 py-1 bg-red-600 text-white hover:bg-opacity-80 transition-colors rounded-md">
          Remove
        </button>
        <button className="px-4 py-1 bg-primary-green text-white bg-opacity-80 hover:bg-opacity-100 transition-colors rounded-md">
          Update
        </button>
      </div>
    </div>
  );
};

export default Member;
