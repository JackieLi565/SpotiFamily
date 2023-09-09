import Header from "@/components/Marginalia/Header";
import HeaderText from "@/components/HeaderText";
import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-elevated-base h-full">
      <Header
        action={
          <Link
            className="text-lg text-sub-gray hover:text-primary-green transition-colors"
            href={"/Login"}
          >
            Admin Login
          </Link>
        }
      />

      <HeaderText />
    </main>
  );
}
