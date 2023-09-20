import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import LogoutButton from "../Buttons/LogoutButton";
const Header: FC = () => {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get("SpooCookie")?.value;
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
        <div className="space-x-4">
          <Link
            href={"/Payment"}
            className="text-lg text-sub-gray hover:text-primary-green transition-colors"
          >
            Payment
          </Link>
        </div>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Header;
