import admin from "@/lib/firebase.config";
import { cookies } from "next/headers";
import { MemberCardData, UserData } from "@/types/types";
import { notFound } from "next/navigation";
import MemberCard from "./MemberCard";
import { verify } from "jsonwebtoken";

async function getMemberFeed() {
  const database = admin.database;
  const cookieStore = cookies();
  const cookie = cookieStore.get("SpooCookie");

  try {
    if (!cookie) throw new Error("No cookie found");
    const cookieData = verify(cookie.value, process.env.JWT_SECRET) as {
      id: string;
    };
    const documentList = await database.collection("family").get();

    const documentDataList: MemberCardData[] = [];

    documentList.forEach((doc) => {
      const data = doc.data() as UserData;

      const id = doc.id;

      if (data.name && id !== cookieData.id) {
        documentDataList.push({
          id,
          image: data.imageUrl,
          name: data.name,
          recentlyPlayed: data.recentTracks.slice(0, 5),
          topArtists: data.trackedTopArtists.slice(0, 3),
          topGenre: data.topGenre,
        });
      }
    });

    return documentDataList;
  } catch (e: any) {
    console.log(e.message);

    notFound();
  }
}

export default async function MemberFeed() {
  const members = await getMemberFeed();
  return (
    <>
      <h1 className="text-white text-3xl font-semibold py-6 my-2">
        Explore Members
      </h1>
      <MemberCard members={members} />
    </>
  );
}
