import { NextResponse } from "next/server";
import AdminSDK from "@/lib/firebase.config";
import { collections } from "@/constants";
import { revalidatePath } from "next/cache";
const db = AdminSDK.database;

export async function DELETE(
  __: Request,
  { params }: { params: { slug: string } }
) {
  const userId = params.slug;
  const deleteResult = await db
    .collection(collections.family)
    .doc(userId)
    .delete();

  revalidatePath("/Home/Admin");
  return NextResponse.json(deleteResult);
}

export async function PUT(
  __: Request,
  { params }: { params: { slug: string } }
) {
  const userId = params.slug;
  const updateResult = await db
    .collection(collections.family)
    .doc(userId)
    .update({
      "payment.paymentStatus": true,
    });

  revalidatePath("http://localhost:3000/Home/Admin");
  return NextResponse.json(updateResult);
}
