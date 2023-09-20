import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Profile from "@/components/Cards/Profile";
import Payment from "@/components/Cards/Payment";
import MemberFeed from "@/components/Home/MemberFeed";
import AnimateFade from "@/components/Animations/Fade";

export default function Page() {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get("SpooCookie")?.value;
  if (!cookieValue) redirect("/");
  if (!jwt.verify(cookieValue, process.env.JWT_SECRET)) redirect("/");

  return (
    <>
      <main className="py-6">
        <div className="relative flex px-6 md:flex-row flex-col justify-center max-w-6xl m-auto gap-4">
          <AnimateFade type="left">
            <Profile />
          </AnimateFade>

          <div className="flex-1">
            <AnimateFade type="center">
              <MemberFeed />
            </AnimateFade>
          </div>
          <AnimateFade type="right">
            <Payment />
          </AnimateFade>
        </div>
      </main>
    </>
  );
}
