import { logoutAction } from "@/data/actions/auth-actions";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button type="submit">
        <LogOut className="hover:text-primary h-6 w-6" />
      </button>
    </form>
  );
}
