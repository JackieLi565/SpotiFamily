"use client";
import Image from "next/image";
import { FC, useEffect } from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import LogoutButton from "../Buttons/LogoutButton";
type HeaderProps = {
  cookieValue: string | undefined;
};
const Header: FC<HeaderProps> = ({ cookieValue }) => {
  return (
    <nav className="bg-elevated-base w-full flex justify-between items-center px-3 md:px-8 py-4">
      <div className="flex items-center gap-2">
        <Image
          className="h-12 w-12"
          src={"/spotify.svg"}
          alt="spotify icon"
          height={80}
          width={80}
        />{" "}
        <p className="text-2xl text-white">SpotiFamily</p>
      </div>

      <div className="flex gap-6">
        {cookieValue ? (
          <>
            <div className="space-x-4">
              <Link
                href={"/Payment"}
                className="text-lg text-sub-gray hover:text-primary-green transition-colors"
              >
                Payment
              </Link>
            </div>
            <LogoutButton />
          </>
        ) : (
          <Link
            href={"/Login"}
            className="text-lg text-sub-gray hover:text-primary-green transition-colors"
          >
            Admin Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
