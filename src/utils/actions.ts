"use server";
import { revalidatePath } from "next/cache";
import AdminSDK from "@/lib/firebase.config";
import { collections } from "@/constants";
import { ActionResponse, Payment, PaymentRequest } from "@/types/types";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { firestore } from "firebase-admin";

const db = AdminSDK.database;

export async function addUser(formData: FormData): Promise<ActionResponse> {
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
      outstandingBalance: 500,
    };

    const newUser = {
      payment: paymentData,
      profile: {
        accountVerified: false,
        email,
      },
    };

    await memberRef.doc().create(newUser);
    return { success: true, error: false };
  } catch (e: any) {
    console.log(e.message);
    return { success: false, error: true };
  }
}

export async function adminLogin(formData: FormData): Promise<ActionResponse> {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    const adminDoc = await db
      .collection(collections.admin)
      .doc("security")
      .get();

    const adminCredentials = adminDoc.data() as {
      username: string;
      password: string;
    };

    if (username !== adminCredentials.username)
      return { success: false, error: true, message: "Invalid Email" };
    if (password !== adminCredentials.password)
      return { success: false, error: true, message: "Invalid Password" };
  } catch (e: any) {
    console.log(e);
    return { success: false, error: true, message: e.message };
  }

  const cookie = jwt.sign({ verifiedAdmin: true }, process.env.JWT_SECRET);
  cookies().set("admin", cookie, {
    httpOnly: true,
    maxAge: 3600,
    secure: true,
    sameSite: "lax",
  });
  return redirect("/Home/Admin");
}

export async function paymentAmount(
  formData: FormData
): Promise<ActionResponse> {
  const amount = formData.get("amount");
  const cookieStore = cookies();
  const cookie = cookieStore.get("SpooCookie") as RequestCookie;
  const requestRef = db.collection("requests");

  try {
    const cookieData = jwt.verify(cookie.value, process.env.JWT_SECRET) as {
      id: string;
      iat: number;
    };

    if (!amount) throw new Error("Undefined value");
    const requestAmount = parseInt(amount.toString());
    if (requestAmount < 0) throw new Error("");
    const documentData: PaymentRequest = {
      amount: requestAmount,
      userId: cookieData.id,
      state: false,
      dateSubmitted: firestore.Timestamp.fromDate(new Date()),
    };

    await requestRef.add(documentData);
    return {
      success: true,
      error: false,
      message: "Payment Request Appointed",
    };
  } catch (e: any) {
    return { success: false, error: true, message: e.message };
  }
}
