import SpotifyWebApi from "spotify-web-api-node";

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/callback"
      : "https://spotifamily.vercel.app/api/callback",
});

export const collections = {
  family: "family",
  admin: "admin",
};
