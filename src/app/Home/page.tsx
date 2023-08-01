import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export default function Page() {
  if (!jwt.verify("SpooCookie", process.env.JWT_SECRET)) redirect("/");

  return <main className="relative h-[1000px]">Welcome back</main>;
}
