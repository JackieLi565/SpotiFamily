import HeaderText from "@/components/Main/HeaderText";
import Navbar from "@/components/Main/Navbar";
import Image from "next/image";
import home from "../../public/spotifyFamily.jpg";
export default function Page() {
  return (
    <main className="bg-elevated-base h-full">
      <Navbar isLoggedIn={false} />

      <HeaderText />
    </main>
  );
}
