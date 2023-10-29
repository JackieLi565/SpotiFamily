import RequestForm from "@/components/Forms/RequestForm";
import { validateAdmin } from "@/utils/auth";
import { cookies } from "next/headers";
const data = async () => {
  const timer = setTimeout(() => {
    return "ehllo";
  }, 1000);
};

const Page = async () => {
  const cookieStore = cookies();
  validateAdmin(cookieStore);

  const serverStuff = await data();
  console.log(serverStuff);

  return (
    <main className="flex-1 py-16 max-w-7xl m-auto w-full">
      <h1 className="text-white text-4xl">Welcome Back, </h1>
      <div>incoming requests</div>
      <RequestForm id={""} name={""} amount={0} />
      <div>my family</div>
    </main>
  );
};

export default Page;
