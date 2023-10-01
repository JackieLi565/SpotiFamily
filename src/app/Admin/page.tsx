import { validateAdmin } from "@/utils/auth";
import { LoadingOutlined } from "@ant-design/icons";
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
    <main className="flex-1">
      <LoadingOutlined className="text-primary-green text-8xl" />
      <h1 className="text-white"> welcome </h1>
    </main>
  );
};

export default Page;
