import { redirect } from "next/navigation";
import { spotifyApi } from "@/constants";
export async function GET(request: Request) {
  const scopes = [
    "user-top-read",
    "ugc-image-upload",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "streaming",
    "app-remote-control",
    "user-read-email",
    "user-read-private",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
    "user-library-modify",
    "user-library-read",
    "user-read-playback-position",
    "user-read-recently-played",
    "user-follow-read",
    "user-follow-modify",
  ];

  redirect(spotifyApi.createAuthorizeURL(scopes, "state"));
}

//
