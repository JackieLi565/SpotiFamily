"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

const HeaderText: FC = () => {
  const router = useRouter();
  const auth = () => {
    router.push("/api/authorize");
  };

  return (
    <>
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 space-y-8">
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
          Swiftly keep track of family member payments reminder free.
        </h1>

        <p className="text-center text-lg max-w-3xl mx-auto text-sub-gray">
          Bid farewell to the complexities of traditional payment tracking and
          enjoy a<span className=" text-primary-green"> harmonious </span>{" "}
          environment where everyone&apos;s contributions are{" "}
          <span className=" text-primary-green">transparent</span> and{" "}
          <span className=" text-primary-green">accounted</span> for.
        </p>

        <button
          onClick={auth}
          className="bg-elevated-base group m-auto rounded-md text-black flex items-center gap-2 py-2 pl-4 pr-6"
        >
          <Image
            className="h-12 w-12"
            src={"/spotify.svg"}
            alt="spotify icon"
            height={80}
            width={80}
          />
          <p className="text-white group-hover:text-primary-green transition-colors">
            Sign in with Spotify
          </p>
        </button>
      </div>
    </>
  );
};

export default HeaderText;
