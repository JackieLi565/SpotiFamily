import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const validateMember = (cookieStore: ReadonlyRequestCookies) => {
  const cookieValue = cookieStore.get("SpooCookie")?.value;
  if (!cookieValue) redirect("/");
  if (!jwt.verify(cookieValue, process.env.JWT_SECRET)) redirect("/");
};

export const validateAdmin = (cookieStore: ReadonlyRequestCookies) => {
  const cookieValue = cookieStore.get("admin")?.value;
  if (!cookieValue) redirect("/");
  if (!jwt.verify(cookieValue, process.env.JWT_SECRET)) redirect("/");
};
