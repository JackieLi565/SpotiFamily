import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
  return (
    <main className="bg-error-blob bg-cover flex flex-col justify-center items-center flex-1 gap-3">
      <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
        Looks like we ran into an error.
      </h1>
      <p className="text-center text-lg max-w-3xl mx-auto text-sub-gray ">
        This error may have been caused do to{" "}
        <span className=" text-primary-green">
          the parent did not add your name to the Spotify Dashboard
        </span>{" "}
        or the system did not{" "}
        <span className=" text-primary-green">find your account profile.</span>{" "}
        Please contact your guardian and let them know about these errors.
      </p>
      <Link href={"/"} className="bg-elevated-base px-6 rounded-md py-2 group">
        <p className="text-white group-hover:text-primary-green transition-colors">
          Sign in with Spotify
        </p>
      </Link>
    </main>
  );
}
