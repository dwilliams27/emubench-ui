import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupabase } from '@/contexts/supabase-context';

export default function AuthCallback() {
  const navigate = useNavigate();
  const { client } = useSupabase();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await client.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          navigate('/login?error=auth_failed');
          return;
        }

        if (data?.session) {
          console.log('Successfully authenticated via OAuth');
          console.log('Session:', data.session);
          
          // Check if we have the Google provider token
          if (data.session.provider_token) {
            console.log('Google access token available:', data.session.provider_token);
          }
          
          navigate('/dashboard');
        } else {
          navigate('/login?error=no_session');
        }
      } catch (err) {
        console.error('Unexpected error in auth callback:', err);
        navigate('/login?error=unexpected');
      }
    };

    handleAuthCallback();
  }, [client.auth, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
}
