import { useSupabase } from "@/contexts/supabase-context";
import { GoogleLogin } from "@react-oauth/google";

declare global {
  interface Window {
    handleSignInWithGoogle: (response: any) => void;
  }
}

export function EmuGoogleLogin() {
  const { client } = useSupabase();

  const handleSignInWithGoogle = async (response: any) => {
    const { data, error } = await client.auth.signInWithIdToken({
      provider: 'google',
      token: response.credential,
    });
    
    if (error) {
      console.error("Google authentication error:", error);
    } else if (data) {
      console.log("Successfully signed in:", data.user);
    }
  };

  return (
    <>
      <GoogleLogin onSuccess={handleSignInWithGoogle} onError={() => console.log('Google auth error')} />
    </>
  );
}
