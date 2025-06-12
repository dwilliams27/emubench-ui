import axios, { type AxiosInstance } from 'axios';
import { config } from '@/config';
import type { Session } from '@supabase/supabase-js';
import type { GetActiveTestConfigResponse } from '@/constants/api';
import type { TestState } from '@/constants/games';

export interface Api {
  updateAuthToken: (session: Session | null) => void;
  makeApiCall: (endpoint: string, method: string, data?: any) => Promise<any>;
  fetchTestConfigs: () => Promise<GetActiveTestConfigResponse>;
  getTestState: (id: string) => Promise<TestState>;
}

export class EmuBenchServ implements Api {
  axiosInstance: AxiosInstance;
  private sessionId: string;
  
  constructor(initialSession?: Session | null) {
    this.sessionId = 'test-session-id';
    
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
      console.error('[API] Error making API call:', error);
      throw error;
    }
  }

  fetchTestConfigs = async () => {
    try {
      const response = await this.axiosInstance.get(
        '/test-orx/tests'
      );
      return response.data;
    } catch (error) {
      console.error('[API] Unabled to fetch test configs:', error);
      throw error;
    }
  }

  getTestState = async(id: string) => {
    try {
      const response = await this.axiosInstance.get(
        `/test-orx/tests/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(`[API] Unabled to fetch test state for ${id}:`, error);
      throw error;
    }
  }
}
