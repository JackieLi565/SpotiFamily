import HeaderText from "@/components/HeaderText";
import Image from "next/image";
import homeImage from "../../public/images/home.png";
import Scale from "@/components/Animations/Scale";
export default function Page() {
  return (
    <main className="bg-elevated-base flex-1 flex flex-col justify-between">
      <HeaderText />
      <section className=" overflow-y-hidden">
        <Scale>
          <Image
            src={homeImage}
            alt="home image"
            className="mt-5 w-2/3 mx-auto rounded-t-lg"
          />
        </Scale>
      </section>
    </main>
  );
}
