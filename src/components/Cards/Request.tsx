import { FC } from "react";
import { PaymentRequest } from "@/types/types";
import { ContainerOutlined } from "@ant-design/icons";
type RequestCardProps = {
  data: PaymentRequest;
  id: string;
};
const RequestCard: FC<RequestCardProps> = ({ data }) => {
  return (
    <div className="bg-elevated-base max-w-7xl border border-sub-gray m-auto px-10 py-4 rounded-lg flex gap-3 flex-col md:flex-row md:items-center">
      <div className="w-48 space-y-2">
        <h1 className="text-sub-gray">Request Amount</h1>
        <div className="pl-6 text-primary-green">{data.amount}</div>
      </div>
      <div className="flex-1 space-y-2">
        <h1 className="text-sub-gray">Date Submmited</h1>
        <div className="pl-6 text-white">
          {data.dateSubmitted.toDate().toUTCString()}
        </div>
      </div>
      {data.dateAccepted && (
        <div className="flex-1 space-y-2">
          <h1 className="text-sub-gray">Date Accepted</h1>
          <div className="pl-6 text-white">
            {data.dateAccepted.toDate().toUTCString()}
          </div>
        </div>
      )}
      {data.remainingBalance && (
        <div className="flex-1 space-y-2">
          <h1 className="text-sub-gray">Remaining Balance</h1>
          <div className="pl-6 text-primary-green">{data.remainingBalance}</div>
        </div>
      )}
      <div className="flex-1 space-y-2">
        <h1 className="text-sub-gray">Status</h1>
        <div className="pl-6 text-white">
          {data.state ? (
            <p className="text-primary-green">Accepted</p>
          ) : (
            <p className="text-red-600">Awaiting</p>
          )}
        </div>
      </div>
      <ContainerOutlined className="text-primary-green text-2xl" />
    </div>
  );
};

export default RequestCard;
