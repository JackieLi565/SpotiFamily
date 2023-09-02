import admin from "@/lib/firebase.config";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import jwt from "jsonwebtoken";
import { UserData } from "@/types/types";

/**
 * Current paid status
 * Current points
 * payment history
 */
async function getPayment() {
  const database = admin.database;
  const cookieStore = cookies();
  const cookie = cookieStore.get("SpooCookie");

  if (!cookie) notFound();

  try {
    const cookieData = jwt.verify(cookie.value, process.env.JWT_SECRET) as {
      id: string;
      iat: number;
    };

    const documentData = (
      await database.collection("family").doc(cookieData.id).get()
    ).data() as UserData;

    return {
      paymentStatus: documentData.paymentStatus,
      paymentHistory: documentData.paymentHistory.slice(0, 5),
      points: documentData.points,
    };
  } catch {
    return {
      paymentStatus: true,
      paymentHistory: [],
      points: 500,
    };
  }
}

function getNextBillingDate() {
  const billingDay = 9;
  const currentDate = new Date();

  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  if (currentDay >= billingDay) {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }

  const nextBillingDate = new Date(currentYear, currentMonth, billingDay);
  return nextBillingDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function Payment() {
  const paymentData = await getPayment();

  return (
    <div className="w-[217px] h-fit sticky top-4 space-y-4">
      {/** PAYMENT STATUS */}
      <div className=" bg-elevated-base w-full px-4 py-2 rounded space-y-2">
        <p className="text-sub-gray">Current payment status:</p>
        {paymentData.paymentStatus ? (
          <h1 className="text-primary-green text-2xl w-full text-center">
            Paid
          </h1>
        ) : (
          <h1 className="text-red-500 text-2xl w-full  text-center">
            Awaiting
          </h1>
        )}
      </div>

      {/** POINTS */}
      <div className="bg-elevated-base w-full px-4 py-2 rounded space-y-2">
        <h1 className="text-white text-2xl w-full">My Points:</h1>
        <p className=" bg-gradient-to-r  from-blue-500 to-primary-green bg-clip-text text-transparent w-full text-2xl font-semibold text-center">
          {paymentData.points}
        </p>
      </div>

      {/** BILLING DATES */}
      <div className="bg-elevated-base w-full px-4 py-3 rounded space-y-2">
        <h1 className="text-primary-green text-2xl w-full">Your Next Bill</h1>
        <p className="text-sub-gray w-full text-center">
          {getNextBillingDate()}
        </p>
        <h1 className="text-white text-xl w-full">Payment History</h1>
        <div className="border-[1px] border-y-gray-300 max-w-full" />

        {paymentData.paymentHistory.length !== 0 ? (
          <ol className="space-y-1">
            {paymentData.paymentHistory.map((date) => (
              <li className="text-sub-gray">{date}</li>
            ))}
          </ol>
        ) : (
          <h3 className="text-sub-gray text-center">
            No avaliable payment data...
          </h3>
        )}
      </div>
    </div>
  );
}
