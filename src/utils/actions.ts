"use server";
import { revalidatePath } from "next/cache";
import AdminSDK from "@/lib/firebase.config";
import { collections } from "@/constants";
import { Payment } from "@/types/types";
const db = AdminSDK.database;

export async function addUser(formData: FormData) {
  try {
    const email = formData.get("email");

    if (!email) throw new Error("No email provided");
    const memberRef = db.collection(collections.family);

    const duplicateUser = await memberRef
      .where("profile.email", "==", email)
      .get();

    if (duplicateUser.docs.length !== 0) throw new Error("Duplicate user");

    const paymentData: Payment = {
      paymentHistory: [],
      paymentStatus: false,
      points: 0,
    };

    const newUser = {
      payment: paymentData,
      profile: {
        accountVerified: false,
        email,
      },
    };

    await memberRef.doc().create(newUser);
    revalidatePath("/");
    return { success: true, error: undefined };
  } catch (e: any) {
    console.log(e.message);
    return { success: undefined, error: true };
  }
}
