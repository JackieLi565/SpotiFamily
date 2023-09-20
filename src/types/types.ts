import { firestore } from "firebase-admin";
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

export type ActionResponse = {
  success: boolean;
  error: boolean;
  message?: string;
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
  paymentHistory: firestore.Timestamp[];
  paymentStatus: boolean;
  outstandingBalance: number;
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

export type PaymentRequest = {
  state: boolean;
  dateAccepted: firestore.Timestamp;
  dateSubmitted: firestore.Timestamp;
  remainingBalance: number;
};
