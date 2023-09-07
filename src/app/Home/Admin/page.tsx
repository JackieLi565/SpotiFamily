import AddUser from "@/components/Admin/AddUser";
import Member from "@/components/Admin/Member";
import LogoutButton from "@/components/Buttons/LogoutButton";
import Header from "@/components/Header";
import AdminSDK from "@/lib/firebase.config";
import { collections } from "@/constants";
import { Payment, Info } from "@/types/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

type MemberCard = {
  id: string;
  payment: Payment;
  profile: Info;
};

const fetchMemberDetails = async () => {
  const db = AdminSDK.database;
  const memberRef = db.collection(collections.family);
  try {
    const docData = await memberRef
      .where("profile.accountVerified", "==", true)
      .get();

    const memberData: MemberCard[] = [];

    docData.forEach((doc) =>
      memberData.push({
        id: doc.id,
        payment: doc.data().payment as Payment,
        profile: doc.data().profile as Info,
      })
    );
    return memberData;
  } catch {
    throw new Error("Could not fetch data");
  }
};
const Page = async () => {
  const memberData = await fetchMemberDetails();
  const cookieStore = cookies();
  const cookieValue = cookieStore.get("admin")?.value;
  if (!cookieValue) redirect("/");
  if (!jwt.verify(cookieValue, process.env.JWT_SECRET)) redirect("/");

  return (
    <main className="flex flex-col h-screen">
      <Header action={<LogoutButton />} />
      <section className="flex-1 py-4">
        <h1 className=" text-sub-gray w-full md:px-24 my-8 md:text-4xl">
          Welcome back <span className="text-primary-green ">Admin</span>
        </h1>
        <div className="flex md:px-24 gap-8">
          <AddUser />
          <div className="flex max-w-7xl m-auto md:gap-20 flex-wrap">
            {memberData ? (
              memberData.map(({ id, profile, payment }) => {
                return (
                  <Member
                    key={id}
                    name={profile.name ? profile.name : `User ${id}`}
                    imageURL={profile.imageUrl ? profile.imageUrl : ""}
                    payment={payment.paymentStatus}
                    lastPayment={
                      payment.paymentHistory[payment.paymentHistory.length - 1]
                    }
                    points={payment.points}
                    id={id}
                  />
                );
              })
            ) : (
              <h1 className="text-red-600">No users</h1>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
