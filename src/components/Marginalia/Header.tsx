import Image from "next/image";
import { FC, ReactElement } from "react";
import Link from "next/link";
type HeaderProps = {
  action: ReactElement;
};
const Header: FC<HeaderProps> = ({ action }) => {
  return (
    <nav className="sticky top-0 bg-elevated-base w-full flex justify-between items-center px-3 md:px-8 py-4">
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
        {action}
      </div>
    </nav>
  );
};

export default Header;
