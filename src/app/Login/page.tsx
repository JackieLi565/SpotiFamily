import AdminLogin from "@/components/Forms/AdminLogin";
const Page = () => {
  return (
    <main className="bg-green-blob bg-cover flex justify-center items-center flex-1">
      <section className="bg-elevated-base w-1/4 rounded-md px-4 py-8">
        <h1 className="text-primary-green text-2xl">Admin Login</h1>
        <div className="border border-sub-gray my-4" />
        <AdminLogin />
      </section>
    </main>
  );
};

export default Page;
