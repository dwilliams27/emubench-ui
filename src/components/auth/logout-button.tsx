import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const { signOut } = useAuth();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={signOut}
      className="gap-2"
    >
      <LogOut size={16} />
      <span>Logout</span>
    </Button>
  );
}
