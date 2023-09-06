export type User = {
  music: Music;
  profile: Info;
  payment: Payment;
};

export type Music = {
  currentTopTrack: {
    imageUrl: string;
    trackName: string;
    uri: string;
    artist: { name: string; uri: string }[];
  };
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

export type mutationStatus =
  | {
      success: boolean;
      error: undefined;
    }
  | {
      success: undefined;
      error: boolean;
    };

export type Info = {
  accountVerified: boolean;
  email: string;
  imageUrl: string | undefined;
  lastUpdated: number;
  name: string | undefined;
};

// true is paid, false is pending
export type Payment = {
  paymentHistory: string[];
  paymentStatus: boolean;
  points: number;
};

export type MemberCardData = {
  id: string;
  image: string | undefined;
  name: string | undefined;
  recentlyPlayed: {
    name: string;
    imageUrl: string;
    uri: string;
    artist: {
      name: string;
      uri: string;
    }[];
  }[];
  topArtists: {
    name: string;
    imageUrl: string;
    uri: string;
  }[];
  topGenre: string;
};
