type UserData = {
  currentTopTrack: {
    imageUrl: string;
    trackName: string;
    uri: string;
    artist: { name: string; uri: string }[];
  };
  email: string;
  imageUrl: string;
  lastUpdated: number;
  name: string;
  recentArtists: { name: string; imageUrl: string; uri: string }[];
  recentTracks: {
    name: string;
    imageUrl: string;
    uri: string;
    artist: { name: string; uri: string }[];
  }[];
  topGenre: string;
  trackedTopArtists: { name: string; imageUrl: string; uri: string }[];
  trackedTopTracks: {
    name: string;
    imageUrl: string;
    uri: string;
    artist: { name: string; uri: string }[];
  }[];
};

export type { UserData };
