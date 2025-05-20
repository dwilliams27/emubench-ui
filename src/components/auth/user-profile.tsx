import { useAuth } from "@/contexts/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutButton } from "./logout-button";

export function UserProfile() {
  const { user } = useAuth();
  
  if (!user) return null;

  const fallbackText = user.user_metadata?.full_name?.[0] || 
    user.email?.[0] || 
    'U';
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row ml-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name || "User"} />
          <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ml-2">
          <span className="font-medium text-sm">
            {user.user_metadata?.full_name || user.email}
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
