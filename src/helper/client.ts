/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosError, AxiosResponse } from 'axios';
import { get } from 'lodash';
import { appConfiguration } from '@/config';
import { messageConstants } from '@/constants';
import { CustomErrorProps } from '@/types';

const { baseUrl } = appConfiguration;

const { WENT_WRONG } = messageConstants;

export const client = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

client.interceptors.response.use(
  (response: AxiosResponse) => {
    const axiosData = get(response, 'data.result', {});

    return Promise.resolve(axiosData);
  },
  (error: AxiosError) => {
    const statusCode = get(error, 'response.data.statusCode', 500);

    const message = get(error, 'response.data.error.message', WENT_WRONG);

    const customError: CustomErrorProps = { name: 'Error', statusCode, message };

    return Promise.reject(customError);
  },
);
