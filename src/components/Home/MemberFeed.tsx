import Image from "next/image";
import admin from "@/lib/firebase.config";
import { cookies } from "next/headers";
import { MemberCardData, UserData } from "@/types/types";
import { notFound } from "next/navigation";
import jwt from "jsonwebtoken";
import MemberCard from "./MemberCard";

async function getMemberFeed() {
  const database = admin.database;
  const cookieStore = cookies();
  const cookie = cookieStore.get("SpooCookie");

  if (!cookie) notFound();

  try {
    const cookieData = jwt.verify(cookie.value, process.env.JWT_SECRET) as {
      id: string;
      iat: number;
    };

    const documentData = (
      await database.collection("family").doc(cookieData.id).get()
    ).data() as UserData;

    const documentList = await database.collection("family").get();

    const documentDataList: MemberCardData[] = [];

    documentList.forEach((doc) => {
      const data = doc.data() as UserData;
      console.log(data);

      const id = doc.id;
      documentDataList.push({
        id,
        image: data.imageUrl,
        name: data.name,
        recentlyPlayed: data.recentTracks.slice(0, 5),
        topArtists: data.trackedTopArtists.slice(0, 3),
        topGenre: data.topGenre,
      });
    });

    return documentDataList;
  } catch (e: any) {
    console.log(e.message);

    notFound();
  }
}

export default async function MemberFeed() {
  const members = await getMemberFeed();
  return <MemberCard members={members} />;
}
