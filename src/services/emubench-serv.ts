import axios, { type AxiosInstance } from 'axios';
import { config } from '@/config';

export class EmuBenchServ {
  axiosInstance: AxiosInstance;
  
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: config.API_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'x-dmcp-session-id': 'test-session-id',
      },
    });
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
