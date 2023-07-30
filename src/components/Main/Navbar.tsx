import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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

      <Link
        href={"/Admin-Login"}
        className="text-lg text-sub-gray hover:text-primary-green transition-colors"
      >
        Admin Login
      </Link>
    </nav>
  );
};

export default Navbar;
