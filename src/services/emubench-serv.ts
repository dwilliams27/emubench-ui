import axios, { type AxiosInstance } from 'axios';
import { config } from '@/config';
import type { Session } from '@supabase/supabase-js';

export class EmuBenchServ {
  axiosInstance: AxiosInstance;
  private sessionId: string;
  
  constructor(initialSession?: Session | null) {
    this.sessionId = 'test-session-id'; // Default session ID
    
    this.axiosInstance = axios.create({
      baseURL: config.API_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'x-dmcp-session-id': this.sessionId,
      },
    });

    if (initialSession?.access_token) {
      this.updateAuthToken(initialSession);
    }
  }

  updateAuthToken(session: Session | null) {
    if (session?.access_token) {
      this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${session.access_token}`;

      if (session.user?.id) {
        this.sessionId = session.user.id;
        this.axiosInstance.defaults.headers['x-dmcp-session-id'] = this.sessionId;
      }
    } else {
      delete this.axiosInstance.defaults.headers.common['Authorization'];
    }
  }

  makeApiCall = async (endpoint: string, method: string, data?: any) => {
    try {
      const response = await this.axiosInstance({
        url: endpoint,
        method: method,
        data: data,
      });
      return response;
    } catch (error) {
      console.error('Error making API call:', error);
      throw error;
    }
  }
}
