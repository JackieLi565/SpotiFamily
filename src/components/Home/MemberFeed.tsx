import admin from "@/lib/firebase.config";
import { cookies } from "next/headers";
import { MemberCardData, User } from "@/types/types";
import MemberCard from "./MemberCard";
import { verify } from "jsonwebtoken";
import { collections } from "@/constants";
async function getMemberFeed() {
  const db = admin.database;
  const cookieStore = cookies();
  const cookie = cookieStore.get("SpooCookie");

  try {
    if (!cookie) throw new Error("No cookie found");
    const cookieData = verify(cookie.value, process.env.JWT_SECRET) as {
      id: string;
    };
    const documentList = await db
      .collection(collections.family)
      .where("profile.accountVerified", "==", true)
      .get();

    const documentDataList: MemberCardData[] = [];

    documentList.forEach((doc) => {
      const { music, profile } = doc.data() as User;
      const { imageUrl, name } = profile;
      const { recentTracks, trackedTopArtists, topGenre } = music;
      const id = doc.id;

      if (id !== cookieData.id) {
        documentDataList.push({
          id,
          image: imageUrl,
          name,
          recentlyPlayed: recentTracks.slice(0, 5),
          topArtists: trackedTopArtists.slice(0, 3),
          topGenre,
        });
      }
    });

    return documentDataList;
  } catch (e: any) {
    return [];
  }
}

export default async function MemberFeed() {
  const members = await getMemberFeed();
  return (
    <>
      <h1 className="text-white text-3xl font-semibold py-6 my-2">
        Explore Members
      </h1>
      {members.length !== 0 ? (
        <MemberCard members={members} />
      ) : (
        <div className="text-3xl text-sub-gray flex justify-center py-64 border border-primary-green rounded-md">
          <h1 className="max-w-sm text-center">
            No Members Found Besides You.
          </h1>
        </div>
      )}
    </>
  );
}
