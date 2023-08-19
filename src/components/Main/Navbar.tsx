"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

type NavbarProps = {
  isLoggedIn: boolean;
};
const Navbar: FC<NavbarProps> = ({ isLoggedIn = false }) => {
  const { replace } = useRouter();
  const logout = () => {
    replace("/api/logout");
  };
  return (
    <nav className=" bg-elevated-base w-full flex justify-between items-center px-8 py-4">
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

      {!isLoggedIn ? (
        <Link
          href={"/Admin-Login"}
          className="text-lg text-sub-gray hover:text-primary-green transition-colors"
        >
          Admin Login
        </Link>
      ) : (
        <button
          className="text-lg text-sub-gray hover:text-primary-green transition-colors"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
