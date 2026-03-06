import type { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export type AdminAccessReason =
  | "not-authenticated"
  | "missing-user-doc"
  | "inactive-user"
  | "not-admin";

export interface AdminAccessResult {
  allowed: boolean;
  reason?: AdminAccessReason;
}

export const normalizeValue = (value: unknown) =>
  String(value ?? "").trim().toLowerCase();

export async function getAdminAccess(
  user: User | null
): Promise<AdminAccessResult> {
  if (!user) {
    return { allowed: false, reason: "not-authenticated" };
  }

  const userSnap = await getDoc(doc(db, "users", user.uid));

  if (!userSnap.exists()) {
    return { allowed: false, reason: "missing-user-doc" };
  }

  const userData = userSnap.data();
  const role = normalizeValue(userData.role ?? userData.Role);
  const isActive =
    userData.isActive !== false &&
    normalizeValue(userData.status) !== "inactive";

  if (!isActive) {
    return { allowed: false, reason: "inactive-user" };
  }

  if (role !== "admin") {
    return { allowed: false, reason: "not-admin" };
  }

  return { allowed: true };
}
