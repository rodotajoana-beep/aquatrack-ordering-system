import type { ReactNode } from "react";

export default function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-sky-700">AquaTrack</h1>
        <h2 className="mt-4 text-xl font-semibold">{title}</h2>
        <p className="mb-6 text-sm text-slate-500">{subtitle}</p>
        {children}
      </div>
    </main>
  );
}