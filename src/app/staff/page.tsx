import NavBar from "@/components/NavBar";
import { requireRole } from "@/lib/auth";

export default async function StaffPage() {
  const profile = await requireRole(["staff"]);

  return (
    <>
      <NavBar profile={profile} />
      <main className="mx-auto max-w-4xl p-6">
        <h1 className="text-2xl font-bold">Staff dashboard</h1>
        <p className="mt-2 text-slate-600">
          Order management, product and stock management, delivery assignment,
          and the sales summary will be added here.
        </p>
      </main>
    </>
  );
}