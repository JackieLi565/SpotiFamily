import Image from "next/image";
import admin from "@/lib/firebase.config";
import { cookies } from "next/headers";
import { UserData } from "@/types/types";
import { notFound } from "next/navigation";
import jwt from "jsonwebtoken";

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

    return {
      image: documentData.imageUrl,
      name: documentData.name,
      recentlyPlayed: documentData.recentTracks.slice(0, 5),
      topArtists: documentData.trackedTopArtists.slice(0, 3),
      topGenre: documentData.topGenre,
    };
  } catch {
    notFound();
  }
}

export default async function MemberFeed() {
  const member = await getMemberFeed();
  return (
    <div className="space-y-4">
      <div className="w-full h-[600px] flex flex-col gap-4 bg-elevated-base rounded p-4">
        <div className="flex items-center gap-4 px-2">
          <Image
            className="rounded-full object-fill h-12 w-12"
            src={member.image}
            alt="profile picture"
            width={80}
            height={80}
          />
          <div className="flex justify-between w-full">
            <h1 className="text-sub-gray text-2xl">{member.name}</h1>
            <h1 className=" text-primary-green rounded text-2xl">Paid</h1>
          </div>
        </div>
        <div className="flex w-full h-full">
          <div className=" w-full p-2">
            <div className="flex">
              <div className="w-full space-y-1 ">
                <h3 className="text-center text-lg text-primary-green mb-3">
                  Recently Played
                </h3>
                <ol className="px-2 space-y-4 ">
                  {member.recentlyPlayed.map((track) => (
                    <li className="flex gap-4" key={track.uri}>
                      <Image
                        className="rounded-md object-fill h-14 w-14"
                        src={track.imageUrl}
                        alt={`${track.name} Picture`}
                        width={80}
                        height={80}
                      />
                      <div className="space-x-1">
                        <a href={track.uri} className="text-white text-lg">
                          {track.name}
                        </a>
                        <div className="space-x-2">
                          {track.artist.map((artist) => (
                            <a
                              href={artist.uri}
                              className="text-sub-gray text-md"
                            >
                              {artist.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <h1 className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-7xl pt-4 text-center font-semibold ">
              {member.topGenre.charAt(0).toUpperCase() +
                member.topGenre.slice(1)}
            </h1>
          </div>

          <div className="w-[300px]  flex flex-col items-center gap-6 ">
            {member.topArtists.map((artist) => (
              <a href={artist.uri} key={artist.uri}>
                <Image
                  className="rounded-full h-36 w-36 border-[1px] border-gray-600"
                  src={artist.imageUrl}
                  alt={`${artist.name} Picture`}
                  width={128}
                  height={128}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
