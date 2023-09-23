import SpotifyWebApi from "spotify-web-api-node";

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: `${process.env.WEB_URL}/api/callback`,
});

export const collections = {
  family: "family",
  admin: "admin",
};
