import admin from "firebase-admin";

const createAppInstance = () => {
  if (admin.apps.length > 0) return admin.app();

  const cert = admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.split(String.raw`\n`).join(
      "\n"
    ),
  });

  return admin.initializeApp({
    credential: cert,
    databaseURL: "https://spotifamily-89375.firebaseio.com",
  });
};

createAppInstance();

export default {
  database: admin.firestore(),
};
