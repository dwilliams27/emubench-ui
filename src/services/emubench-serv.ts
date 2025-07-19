import axios, { type AxiosInstance } from 'axios';
import { config } from '@/config';
import type { GetActiveTestConfigResponse } from '@/constants/api';
import type { TestState } from '@/constants/games';
import { getIdToken } from 'firebase/auth';
import { auth } from '@/constants/firebase';
import { REQ_SETUP_TEST } from '@/components/test/config/types';
import type z from 'zod';
import type { EmuActiveTestReponse } from '@/constants/shared';

export interface Api {
  getAuthToken: () => Promise<string>;
  makeApiCall: (endpoint: string, method: string, data?: any) => Promise<any>;
  fetchTestConfigs: () => Promise<GetActiveTestConfigResponse>;
  getTestState: (id: string) => Promise<TestState>;
  setupTest: (config: z.infer<typeof REQ_SETUP_TEST>) => Promise<{ testId: string }>;
  getActiveTestState: (testId: string) => Promise<EmuActiveTestReponse>;
}

export class EmuBenchServ implements Api {
  axiosInstance: AxiosInstance;
  
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: config.API_URL,
      timeout: 120000,
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

  setupTest = async (config: z.infer<typeof REQ_SETUP_TEST>) => {
    const authToken = await this.getAuthToken();
    try {
      const response = await this.axiosInstance.post(
        '/test-orx/setup',
        config,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('[API] Unabled to setup test:', error);
      throw error;
    }
  }

  getActiveTestState = async (testId: string) => {
    const authToken = await this.getAuthToken();
    try {
      const response = await this.axiosInstance.get(
        `/test-orx/tests/${testId}`,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('[API] Unabled to get active test:', error);
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
