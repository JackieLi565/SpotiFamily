import Image from "next/image";
import spotifyIcon from "../../../public/spotify.svg";
import Link from "next/link";
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
          <form className=" space-y-4 rounded-md text-sub-gray">
            <label className="block" htmlFor="">
              Account Name
              <input
                type="text"
                className="block bg-transparent border border-sub-gray rounded mt-2 px-2 py-1"
              />
            </label>

            <label className="block" htmlFor="">
              Account Secret
              <input
                type="text"
                className="block bg-transparent border border-sub-gray rounded mt-2 px-2 py-1"
              />
            </label>
            <Link href="/" className="text-sub-gray block">
              Not an admin? return back to login page{" "}
              <span className="underline text-primary-green">here</span>
            </Link>
            <button
              type="submit"
              className="border border-primary-green text-primary-green hover:text-white hover:bg-primary-green transition-colors rounded px-4 py-1"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Page;
