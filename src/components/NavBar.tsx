import LogoutButton from "./LogoutButton";
import { ROLE_LABEL, type Profile } from "@/lib/auth";

export default function NavBar({ profile }: { profile: Profile }) {
  return (
    <header className="bg-sky-700 text-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <span className="text-lg font-bold">AquaTrack</span>
        <div className="flex items-center gap-4 text-sm">
          <span>
            {profile.full_name || "User"} ({ROLE_LABEL[profile.role]})
          </span>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}