import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Navbar from "@/components/Main/Navbar";
import Profile from "@/components/Home/Profile";
import Payment from "@/components/Home/Payment";
import MemberFeed from "@/components/Home/MemberFeed";

export default function Page({}) {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get("SpooCookie")?.value;
  if (!cookieValue) redirect("/");
  if (!jwt.verify(cookieValue, process.env.JWT_SECRET)) redirect("/");

  return (
    <>
      <Navbar isLoggedIn={true} />
      <main className="py-6">
        <div className="relative flex justify-center max-w-6xl m-auto gap-4">
          <div className="w-[275px] h-fit sticky top-4 space-y-4">
            <Profile />
          </div>
          <div className="flex-1">
            <h1 className="text-white text-3xl font-semibold py-6">
              Explore Members
            </h1>
            <MemberFeed />
          </div>
          <div className="w-[217px] h-fit sticky top-4 space-y-4">
            <Payment />
          </div>
        </div>
      </main>
    </>
  );
}
