import NavBar from "@/components/NavBar";
import { requireRole } from "@/lib/auth";

export default async function CustomerPage() {
  const profile = await requireRole(["customer"]);

  return (
    <>
      <NavBar profile={profile} />
      <main className="mx-auto max-w-4xl p-6">
        <h1 className="text-2xl font-bold">Welcome, {profile.full_name}</h1>
        <p className="mt-2 text-slate-600">
          Customer dashboard. The product catalog, ordering, and order history
          will be added here.
        </p>
      </main>
    </>
  );
}