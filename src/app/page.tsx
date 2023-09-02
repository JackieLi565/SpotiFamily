import LogoutButton from "@/components/Buttons/LogoutButton";
import Header from "@/components/Header";
import HeaderText from "@/components/Main/HeaderText";
import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-elevated-base h-full">
      <Header action={<Link href={""} />} />

      <HeaderText />
    </main>
  );
}
