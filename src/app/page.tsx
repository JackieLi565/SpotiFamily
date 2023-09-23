import HeaderText from "@/components/HeaderText";
import Image from "next/image";
import homeImage from "../../public/images/home.png";
import Scale from "@/components/Animations/Scale";
export default function Page() {
  return (
    <main className="bg-green-waves bg-cover flex flex-col justify-between items-center flex-1">
      <HeaderText />
      <section className="overflow-hidden">
        <Scale amount={1.1}>
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
