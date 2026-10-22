import { redirect } from "next/navigation";
import { getProfile, ROLE_HOME } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function Home() {
  const profile = await getProfile();
  if (profile) redirect(ROLE_HOME[profile.role]);

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-xl font-bold text-red-700">Profile not found</h1>
        <p className="my-4 text-sm text-slate-600">
          Your account has no profile yet. Make sure the SQL script was run in
          Supabase, then sign up with a new account.
        </p>
        <div className="inline-block rounded-lg bg-sky-700">
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}