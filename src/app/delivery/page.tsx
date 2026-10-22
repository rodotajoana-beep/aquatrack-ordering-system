import NavBar from "@/components/NavBar";
import { requireRole } from "@/lib/auth";

export default async function DeliveryPage() {
  const profile = await requireRole(["delivery"]);

  return (
    <>
      <NavBar profile={profile} />
      <main className="mx-auto max-w-4xl p-6">
        <h1 className="text-2xl font-bold">My deliveries</h1>
        <p className="mt-2 text-slate-600">
          Assigned deliveries and status updates will be added here.
        </p>
      </main>
    </>
  );
}