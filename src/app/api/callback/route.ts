import { spotifyApi } from "@/constants";
import { notFound } from "next/navigation";
import admin from "@/lib/firebase.config";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { Info, Music, User } from "@/types/types";

const db = admin.database;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  try {
    const date = new Date();
    const code = searchParams.get("code");
    if (!code) throw new Error("Undefined token");

    const authData = await spotifyApi.authorizationCodeGrant(code);
    spotifyApi.setAccessToken(authData.body.access_token);
    const clientData = await spotifyApi.getMe();

    const collectionRef = db.collection("family");
    const doc = await collectionRef
      .where("profile.email", "==", clientData.body.email)
      .get();

    if (doc.docs.length === 0)
      NextResponse.redirect(new URL("/500", request.url));

    const [userDocumentRef] = doc.docs;

    const userDocumentData = userDocumentRef.data() as User;

    const musicData = await musicDataMap();

    if (!musicData) NextResponse.redirect(new URL("/500", request.url));

    const profileData: Info = {
      accountVerified: true,
      email: clientData.body.email,
      lastUpdated: date.getTime(),
      name: clientData.body.display_name,
      imageUrl: clientData.body.images && clientData.body.images[1].url,
    };

    const user = {
      music: musicData,
      profile: profileData,
    };

    await collectionRef.doc(userDocumentRef.id).update(user);

    const response = NextResponse.redirect(new URL("/Home", request.url));

    const cookie = jwt.sign({ id: userDocumentRef.id }, process.env.JWT_SECRET);

    response.cookies.set("SpooCookie", cookie, {
      httpOnly: true,
      maxAge: 3600,
      secure: true,
      sameSite: "lax",
    });

    return response;
  } catch (e: any) {
    console.log(e);
    return NextResponse.redirect(new URL("/404", request.url));
  }
}

function frequencyFinder(list: string[]) {
  const frequencyMap: { [key: string]: number } = {};
  for (const item of list) {
    if (frequencyMap[item] === undefined) {
      frequencyMap[item] = 1;
    } else {
      frequencyMap[item]++;
    }
  }
  let mostFrequentItem;
  let frequency = 0;
  for (const itemKey in frequencyMap) {
    if (frequencyMap[itemKey] > frequency) {
      mostFrequentItem = itemKey;
      frequency = frequencyMap[itemKey];
    }
  }

  return mostFrequentItem ? mostFrequentItem : "None";
}

async function musicDataMap(): Promise<Music | undefined> {
  // top tracks
  const topTracks = await spotifyApi.getMyTopTracks();

  if (topTracks.statusCode !== 200) {
    return undefined;
  }
  // top artists
  const topArtists = await spotifyApi.getMyTopArtists();
  // recent tracks
  const recentTracks = await spotifyApi.getMyRecentlyPlayedTracks();
  // recent artistsID
  const recentArtistsId = recentTracks.body.items.flatMap((track) =>
    track.track.artists.map((artist) => artist.id)
  );

  // re4cent artists
  const recentArtists = await Promise.all(
    recentArtistsId.map(async (id) => {
      const artistObject = await spotifyApi.getArtist(id);
      return {
        name: artistObject.body.name,
        imageUrl: artistObject.body.images[0]
          ? artistObject.body.images[0].url
          : "",
        uri: artistObject.body.uri,
      };
    })
  );

  // top genre
  const listOfGenres = topArtists.body.items.flatMap((artist) => artist.genres);
  const topGenre = frequencyFinder(listOfGenres);
  // current top song
  const listOfRecentTrackId = recentTracks.body.items.map(
    (track) => track.track.id
  );
  const currentTopTrackId = frequencyFinder(listOfRecentTrackId);
  const currentTopTrackInfo = await spotifyApi.getTrack(
    currentTopTrackId as string
  );

  const currentTopTrack = {
    trackName: currentTopTrackInfo.body.name,
    imageUrl: currentTopTrackInfo.body.album.images[0]
      ? currentTopTrackInfo.body.album.images[0].url
      : "",
    uri: currentTopTrackInfo.body.uri,
    artist: currentTopTrackInfo.body.artists.map((artist) => ({
      name: artist.name,
      uri: artist.uri,
    })),
  };

  const trackedTopArtists = topArtists.body.items.map((artistObj) => {
    return {
      name: artistObj.name,
      imageUrl: artistObj.images[0] ? artistObj.images[0].url : "",
      uri: artistObj.uri,
    };
  });

  const trackedTopTracks = topTracks.body.items.map((trackObj) => {
    return {
      name: trackObj.name,
      imageUrl: trackObj.album.images[0] ? trackObj.album.images[0].url : "",
      uri: trackObj.uri,
      artist: trackObj.artists.map((artist) => ({
        name: artist.name,
        uri: artist.uri,
      })),
    };
  });

  return {
    trackedTopArtists,
    trackedTopTracks,
    currentTopTrack,
    topGenre,
    recentTracks: recentTracks.body.items.map((track) => ({
      name: track.track.name,
      imageUrl: track.track.album.images[0]
        ? track.track.album.images[0].url
        : "",
      uri: track.track.uri,
      artist: track.track.artists.map((artist) => ({
        name: artist.name,
        uri: artist.uri,
      })),
    })),
    recentArtists,
  };
}
