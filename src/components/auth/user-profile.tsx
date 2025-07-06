import { useAuth } from "@/contexts/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutButton } from "./logout-button";

export function UserProfile() {
  const { user } = useAuth();
  
  if (!user) return null;

  const fallbackText = user.displayName || 
    user.email?.[0] || 
    'U';
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row ml-2">
        <Avatar className="h-8 w-8">
          { user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || "User"} />}
          <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ml-2 justify-center">
          <span className="font-medium text-sm">
            {user.displayName || user.email}
          </span>
          <span className="text-xs text-muted-foreground">
            {user.email}
          </span>
        </div>
      </div>
      <LogoutButton />
    </div>
  );
}
