import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const cookieStore = cookies();
  const cookieList = cookieStore.getAll();
  for (const cookie of cookieList) {
    cookies().delete(cookie.name);
  }

  return NextResponse.redirect(new URL("/", request.url));
}
