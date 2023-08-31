import SpotifyWebApi from "spotify-web-api-node";

const webUrl = "http://localhost:3000";

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: `${webUrl}/api/callback`,
});
