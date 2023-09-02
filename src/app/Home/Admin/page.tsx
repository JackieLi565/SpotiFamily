import AddUser from "@/components/Admin/AddUser";
import Member from "@/components/Admin/Member";
import LogoutButton from "@/components/Buttons/LogoutButton";
import Header from "@/components/Header";
import AdminSDK from "@/lib/firebase.config";
import { UserData } from "@/types/types";
const fetchMemberDetails = async () => {
  const database = AdminSDK.database;
  const memberDocs = await database.collection("family").get();

  const familyData: any[] = [];
  memberDocs.forEach((doc) => {
    const docData = doc.data() as UserData;
    familyData.push({
      id: doc.id,
      imageUrl: docData.imageUrl,
    });
  });
};
const Page = async () => {
  const memberDetails = [
    {
      id: "dsadasdasda",
      imageURL: "",
      name: "Jackie",
      payment: true,
      lastPayment: "Aug 12, 2023",
      points: 500,
    },
    {
      id: "dasda",
      imageURL: "",
      name: "James",
      payment: false,
      lastPayment: "Feb 20, 2023",
      points: 400,
    },
    {
      id: "dsadasdasdsada",
      imageURL: "",
      name: "Adam",
      payment: false,
      lastPayment: "June 2, 2023",
      points: 20,
    },
    {
      id: "dmodsaodas",
      imageURL: "",
      name: "Carly",
      payment: true,
      lastPayment: "April 6, 2023",
      points: 431,
    },
    {
      id: "dmodsaodas",
      imageURL: "",
      name: "Carly",
      payment: true,
      lastPayment: "April 6, 2023",
      points: 431,
    },
  ];
  return (
    <main className="flex flex-col h-screen">
      <Header action={<LogoutButton />} />
      <section className="flex-1 py-4">
        <h1 className=" text-sub-gray w-full md:px-24 my-8 md:text-4xl">
          Welcome back <span className="text-primary-green ">Admin</span>
        </h1>
        <div className="flex md:px-24 gap-8">
          <AddUser />
          <div className="flex max-w-7xl m-auto md:gap-20 flex-wrap">
            {memberDetails.map(
              ({ name, imageURL, payment, lastPayment, points, id }) => {
                return (
                  <Member
                    key={id}
                    name={name}
                    imageURL={imageURL}
                    payment={payment}
                    lastPayment={lastPayment}
                    points={points}
                    id={id}
                  />
                );
              }
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
