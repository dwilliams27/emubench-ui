import axios, { type AxiosInstance } from 'axios';
import { config } from '@/config';
import type { GetActiveEmulatorConfigResponse } from '@/constants/api';
import { getIdToken } from 'firebase/auth';
import { auth } from '@/constants/firebase';
import type z from 'zod';
import type { EmuActiveTestReponse, EmuBootConfig, EmuGetTestHistoryResponse, EmuGetTraceLogsResponse, EmuSetupExperimentResponse } from '@/shared/types';
import { createEmuError } from '@/shared/utils/error';
import { EmuExperiment } from '@/shared/types/experiments';
import { EmuGetExperimentSummaryResponse } from '@/shared/types/requests';

export interface Api {
  getAuthToken: () => Promise<string>;
  makeApiCall: (endpoint: string, method: string, data?: any) => Promise<any>;
  fetchEmulatorConfigs: () => Promise<GetActiveEmulatorConfigResponse>;
  setupTest: (config: EmuBootConfig) => Promise<{ testId: string }>;
  getActiveTestState: (testId: string) => Promise<[EmuActiveTestReponse, number]>;
  getTrace: (traceId: string) => Promise<[EmuGetTraceLogsResponse, number]>;
  getTestHistory: (testResultId: string) => Promise<[EmuGetTestHistoryResponse, number]>;
  setupExperiment: (experiment: Omit<EmuExperiment, 'status' | 'id' | 'completedTestRunIds'>) => Promise<[EmuSetupExperimentResponse, number]>;
  getExperimentSummary: (experimentId: string) => Promise<[EmuGetExperimentSummaryResponse, number]>;
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
      adapter: 'xhr'
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
      throw createEmuError(error);
    }
  }

  setupTest = async (config: EmuBootConfig) => {
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
      throw createEmuError(error);
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
      return [response.data, response.status] as [EmuActiveTestReponse, number];
    } catch (error) {
      console.error('[API] Unabled to get active test:', error);
      throw createEmuError(error);
    }
  }

  fetchEmulatorConfigs = async () => {
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
      console.error('[API] Unable to fetch test configs:', error);
      throw createEmuError(error);
    }
  }

  getTrace = async(traceId: string) => {
    const authToken = await this.getAuthToken();
    try {
      const response = await this.axiosInstance.get(
        `/debug/trace-logs/${traceId}`,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );
      return [response.data, response.status] as [EmuGetTraceLogsResponse, number];
    } catch (error) {
      console.error(`[API] Unable to fetch trace for ${traceId}:`, error);
      throw createEmuError(error);
    }
  }

  getTestHistory = async(testResultId: string) => {
    const authToken = await this.getAuthToken();
    try {
      const response = await this.axiosInstance.get(
        `/test-orx/history/${testResultId}`,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );
      return [response.data, response.status] as [EmuGetTestHistoryResponse, number];
    } catch (error) {
      console.error(`[API] Unable to fetch history for ${testResultId}:`, error);
      throw createEmuError(error);
    }
  }

  setupExperiment = async(experimentConfig: Omit<EmuExperiment, 'status' | 'id' | 'completedTestRunIds'>) => {
    const authToken = await this.getAuthToken();
    try {
      const response = await this.axiosInstance.post(
        `/test-orx/setup-experiment`,
        { experimentConfig },
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );
      return [response.data, response.status] as [EmuSetupExperimentResponse, number];
    } catch (error) {
      console.error(`[API] Unabled to setup experiment ${experimentConfig.name}:`, error);
      throw createEmuError(error);
    }
  }

  getExperimentSummary = async(experimentId: string) => {
    const authToken = await this.getAuthToken();
    try {
      const response = await this.axiosInstance.get(
        `/test-orx/experiments/${experimentId}`,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );
      return [response.data, response.status] as [EmuGetExperimentSummaryResponse, number];
    } catch (error) {
      console.error(`[API] Unable to fetch experiment summary for ${experimentId}:`, error);
      throw createEmuError(error);
    }
  }
}
