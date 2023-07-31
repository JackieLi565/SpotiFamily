import { redirect } from "next/navigation";
import { spotifyApi, scopes } from "@/constants";
export async function GET(request: Request) {
  redirect(spotifyApi.createAuthorizeURL(scopes, "state"));
}

//
