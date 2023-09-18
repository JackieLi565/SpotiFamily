"use client";
import Header from "@/components/Marginalia/Header";
import HeaderText from "@/components/HeaderText";
import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-elevated-base h-screen">
      <section className="h-full flex flex-col justify-between">
        <div>
          <Header
            action={
              <Link
                className="text-lg text-sub-gray hover:text-primary-green transition-colors"
                href={"/Login"}
              >
                Admin Login
              </Link>
            }
          />
          <HeaderText />
        </div>
        <div className="flex justify-center w-full">
          <div className="w-2/3 border border-primary-green h-[350px] rounded-t-xl"></div>
        </div>
      </section>
    </main>
  );
}
