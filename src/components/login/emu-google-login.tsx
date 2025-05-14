import { useSupabase } from "@/contexts/supabase-context";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    handleSignInWithGoogle: (response: any) => void;
  }
}

export function EmuGoogleLogin() {
  const { client } = useSupabase();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleSignInWithGoogle = async (response: any) => {
    try {
      const { data, error } = await client.auth.signInWithIdToken({
        provider: 'google',
        token: response.credential,
      });
      
      if (error) {
        console.error("Google authentication error:", error);
        setLoginError(error.message);
      } else if (data?.session) {
        console.log("Successfully signed in:", data.user);
        // Redirect to dashboard after successful login
        navigate('/dashboard');
      }
    } catch (err) {
      console.error("Unexpected authentication error:", err);
      setLoginError("An unexpected error occurred during login");
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <img 
        className="mb-4"
        src="/emubench.svg" 
        alt="EmuBench Logo" 
        width={64} 
        height={64} 
      />
      <GoogleLogin 
        onSuccess={handleSignInWithGoogle} 
        onError={() => {
          console.log('Google auth error');
          setLoginError("Google authentication failed");
        }}
        useOneTap
      />
      {loginError && (
        <div className="text-red-500 mt-2 text-sm">{loginError}</div>
      )}
    </div>
  );
}
