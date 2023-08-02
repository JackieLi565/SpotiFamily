function getPayment() {
  /**
   * Current paid status
   * Current points
   * payment history
   */
}

export default function Payment() {
  const payment = true;
  return (
    <>
      <div className=" bg-elevated-base w-full px-4 py-2 rounded space-y-2">
        <p className="text-sub-gray">Current payment status:</p>
        {payment ? (
          <h1 className="text-primary-green text-2xl w-full text-center">
            Paid
          </h1>
        ) : (
          <h1 className="text-red-500 text-2xl w-full  text-center">
            Awaiting
          </h1>
        )}
      </div>

      <div className="bg-elevated-base w-full px-4 py-2 rounded space-y-2">
        <h1 className="text-white text-2xl w-full">My Points:</h1>
        <p className=" bg-gradient-to-r  from-blue-500 to-primary-green bg-clip-text text-transparent w-full text-2xl font-semibold text-center">
          500
        </p>
      </div>

      <div className="bg-elevated-base w-full px-4 py-3 rounded space-y-2">
        <h1 className="text-primary-green text-2xl w-full">Your Next Bill</h1>
        <p className="text-sub-gray w-full text-center mb-2">March 29, 2023</p>

        <h1 className="text-white text-xl w-full">Payment History</h1>
        <div className="border-[1px] border-y-gray-300 max-w-full" />
        {/** Map payments */}
        <div className="space-y-1">
          <p className="text-sub-gray">Febuaray 1, 2023</p>
          <p className="text-sub-gray">June 12, 2023</p>
          <p className="text-sub-gray">October 15, 2023</p>
          <p className="text-sub-gray">March 29, 2023</p>
        </div>
      </div>
    </>
  );
}
