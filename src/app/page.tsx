import HeaderText from "@/components/Main/HeaderText";
import Navbar from "@/components/Main/Navbar";
export default function Page() {
  return (
    <main className="bg-elevated-base h-full">
      <Navbar isLoggedIn={false} />
      <HeaderText />
    </main>
  );
}
