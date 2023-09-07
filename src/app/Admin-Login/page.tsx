import Image from "next/image";
import spotifyIcon from "../../../public/spotify.svg";
import AdminLogin from "@/components/Forms/AdminLogin";
const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className=" bg-elevated-base w-full flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2">
          <Image className="h-12 w-12" src={spotifyIcon} alt="spotify icon" />{" "}
          <p className="text-2xl text-white">SpotiFamily</p>
        </div>
      </header>

      <main className="flex justify-center items-center flex-1">
        <section className="bg-elevated-base w-1/4 rounded-md px-4 py-8">
          <h1 className="text-primary-green text-2xl">Admin Login</h1>
          <div className="border border-sub-gray my-4" />
          <AdminLogin />
        </section>
      </main>
    </div>
  );
};

export default Page;
