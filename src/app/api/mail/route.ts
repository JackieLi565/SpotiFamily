import { collections } from "@/constants";
import AdminSDK from "@/lib/firebase.config";
import { notifyUser } from "@/lib/mail.config";
import { User } from "@/types/types";
import { NextResponse } from "next/server";
const db = AdminSDK.database;
export async function GET(request: Request) {
  const collectionRef = db.collection(collections.family);
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");
    if (key !== process.env.CRON_SECRET) throw new Error("Invalid Cron Key");
    const documentList = await collectionRef.get();

    const emailList: string[] = [];
    documentList.forEach((doc) => {
      const documentData = doc.data() as User;

      emailList.push(documentData.profile.email);
    });

    await Promise.all(
      emailList.map(async (email) => {
        return notifyUser(email);
      })
    );

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false });
  }
}
