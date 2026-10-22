import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type Role = "customer" | "staff" | "delivery";

export type Profile = {
  id: string;
  full_name: string;
  phone: string | null;
  role: Role;
};

export const ROLE_HOME: Record<Role, string> = {
  customer: "/customer",
  staff: "/staff",
  delivery: "/delivery",
};

export const ROLE_LABEL: Record<Role, string> = {
  customer: "Customer",
  staff: "Station Staff",
  delivery: "Delivery Personnel",
};

export async function getProfile(): Promise<Profile | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data } = await supabase
    .from("profiles")
    .select("id, full_name, phone, role")
    .eq("id", user.id)
    .single();

  return (data as Profile) ?? null;
}

export async function requireRole(allowed: Role[]): Promise<Profile> {
  const profile = await getProfile();
  if (!profile) redirect("/");
  if (!allowed.includes(profile.role)) redirect(ROLE_HOME[profile.role]);
  return profile;
}