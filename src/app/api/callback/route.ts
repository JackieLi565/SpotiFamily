import { spotifyApi } from "@/constants";
import { notFound, redirect } from "next/navigation";
import admin from "@/lib/firebase.config";

const db = admin.database;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  try {
    const date = new Date();
    const code = searchParams.get("code");

    if (!code) notFound();

    const authData = await spotifyApi.authorizationCodeGrant(code);
    spotifyApi.setAccessToken(authData.body.access_token);
    const clientData = await spotifyApi.getMe();

    const collectionRef = db.collection("family");

    const doc = await collectionRef
      .where("email", "==", clientData.body.email)
      .get();

    if (doc.docs.length === 0) notFound();

    const [userDocumentRef] = doc.docs;

    const userDocumentData = userDocumentRef.data();

    if (userDocumentData.lastUpdated === undefined) {
      // set up user profile
    }
    if (date.getTime() - userDocumentData.lastUpdated > 86_400_000) {
      // top tracks
      // top genre
      // top song
      // top artists
      // users recent tracks
      // current top genre
      // current top song
      // current top artist
      // user info
      // followers
      // username
      // user img
      const topArtists = await spotifyApi.getMyTopArtists();
      const topTracks = await spotifyApi.getMyTopTracks();

      const trackedTopArtists = topArtists.body.items.map((artistObj) => {
        return { name: artistObj.name, imageUrl: artistObj.images[0] };
      });

      const trackedTopTracks = topTracks.body.items.map((trackObj) => {
        return { name: trackObj.name, imageUrl: trackObj.album.images[0] };
      });

      await collectionRef.doc(userDocumentRef.id).update({
        lastUpdated: date.getTime(),
        trackedTopArtists,
        trackedTopTracks,
      });
    }
  } catch (e: any) {
    console.log(e.message);
  }

  redirect("/");
}
