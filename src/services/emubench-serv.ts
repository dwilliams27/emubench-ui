import axios, { type AxiosInstance } from 'axios';
import { config } from '@/config';
import type { GetActiveTestConfigResponse } from '@/constants/api';
import type { TestState } from '@/constants/games';
import { getIdToken } from 'firebase/auth';
import { auth } from '@/constants/firebase';

export interface Api {
  getAuthToken: () => Promise<string>;
  makeApiCall: (endpoint: string, method: string, data?: any) => Promise<any>;
  fetchTestConfigs: () => Promise<GetActiveTestConfigResponse>;
  getTestState: (id: string) => Promise<TestState>;
}

export class EmuBenchServ implements Api {
  axiosInstance: AxiosInstance;
  
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: config.API_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getAuthToken() {
    const user = auth.currentUser;
  
    if (!user) {
      throw new Error('User not authenticated');
    }

    const token = await getIdToken(user);
    return token;
  }

  makeApiCall = async (endpoint: string, method: string, data?: any) => {
    const authToken = await this.getAuthToken();
    try {
      const response = await this.axiosInstance({
        url: endpoint,
        method: method,
        data: data,
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      return response;
    } catch (error) {
      console.error('[API] Error making API call:', error);
      throw error;
    }
  }

  fetchTestConfigs = async () => {
    const authToken = await this.getAuthToken();
    try {
      const response = await this.axiosInstance.get(
        '/test-orx/tests',
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('[API] Unabled to fetch test configs:', error);
      throw error;
    }
  }

  getTestState = async(id: string) => {
    const authToken = await this.getAuthToken();
    try {
      const response = await this.axiosInstance.get(
        `/test-orx/tests/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error(`[API] Unabled to fetch test state for ${id}:`, error);
      throw error;
    }
  }
}
