import Image from "next/image";
import admin from "@/lib/firebase.config";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import jwt from "jsonwebtoken";
import { User } from "@/types/types";
import profileIcon from "../../../public/profileIcon.svg";
// get name
// top 3 artists
// top 3 songs
// current fav song
async function getProfileDetails() {
  const database = admin.database;
  const cookieStore = cookies();
  const cookie = cookieStore.get("SpooCookie");

  if (!cookie) notFound();

  try {
    const cookieData = jwt.verify(cookie.value, process.env.JWT_SECRET) as {
      id: string;
      iat: number;
    };

    const { profile, music } = (
      await database.collection("family").doc(cookieData.id).get()
    ).data() as User;

    const { name, imageUrl } = profile;
    const { trackedTopArtists, trackedTopTracks, currentTopTrack } = music;

    return {
      name,
      image: imageUrl,
      tracks: trackedTopTracks.slice(0, 3),
      artists: trackedTopArtists.slice(0, 3),
      track: currentTopTrack,
    };
  } catch {
    notFound();
  }
}

export default async function Profile() {
  const profileData = await getProfileDetails();

  return (
    <div className="w-[275px] h-fit sticky top-4 space-y-4">
      <div className="rounded bg-elevated-base w-full h-20 flex px-4 items-center gap-4">
        <Image
          className="rounded-full object-fill h-12 w-12"
          src={profileData.image ? profileData.image : profileIcon}
          alt="profile picture"
          width={80}
          height={80}
        />
        <div>
          <p className="text-sub-gray">Welcome back,</p>
          <h1 className="text-white text-2xl">{profileData.name}</h1>
        </div>
      </div>

      <div className="h-96 w-full bg-elevated-base rounded px-4 py-4 space-y-3">
        <h1 className="text-primary-green text-2xl font-semibold w-full">
          My Stats
        </h1>
        <div className="border-[1px] border-y-gray-300 max-w-full" />
        <div className="space-y-1">
          <h2 className="text-gray-300 text-md">Top 3 Artists</h2>
          <div className="flex flex-col gap-1">
            {profileData.artists.map((artist, index) => (
              <a
                target="_blank"
                href={artist.uri}
                key={artist.uri}
                className="text-sub-gray px-2 hover:text-primary-green"
              >
                {index + 1}. {artist.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="text-gray-300 text-md">Top 3 Songs</h2>
          <div className="flex flex-col gap-1">
            {profileData.tracks.map((track, index) => (
              <a
                target="_blank"
                href={track.uri}
                key={track.uri}
                className="text-sub-gray px-2 hover:text-primary-green"
              >
                {index + 1}. {track.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="text-gray-300 text-md">Current Favourite</h2>
          <a
            href={profileData.track.uri}
            className="text-sub-gray px-2 hover:text-primary-green"
          >
            {profileData.track.trackName}
          </a>
        </div>
      </div>
    </div>
  );
}
