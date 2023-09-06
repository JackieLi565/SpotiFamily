import Header from "@/components/Header";
import HeaderText from "@/components/Main/HeaderText";
import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-elevated-base h-full">
      <Header
        action={
          <Link
            className="text-lg text-sub-gray hover:text-primary-green transition-colors"
            href={"/Admin-Login"}
          >
            Admin Login
          </Link>
        }
      />

      <HeaderText />
    </main>
  );
}
