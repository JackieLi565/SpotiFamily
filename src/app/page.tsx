import HeaderText from "@/components/HeaderText";
import Image from "next/image";
import homeImage from "../../public/images/home.png";
export default function Page() {
  return (
    <main className="bg-elevated-base flex-1 flex flex-col justify-between">
      <HeaderText />
      <Image
        src={homeImage}
        alt="home image"
        className="mt-5 w-2/3 mx-auto rounded-t-lg"
      />
    </main>
  );
}
