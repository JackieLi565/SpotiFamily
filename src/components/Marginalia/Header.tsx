import Image from "next/image";
import { FC, ReactElement } from "react";

type HeaderProps = {
  action: ReactElement;
};
const Header: FC<HeaderProps> = ({ action }) => {
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
      {action}
    </nav>
  );
};

export default Header;
