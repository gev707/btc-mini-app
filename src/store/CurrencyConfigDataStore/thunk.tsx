import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../../rest-config';
import { ICurrency, IResponseError } from './types';

export const getCurrency = createAsyncThunk<
  { rejectValue: IResponseError }
>(
  'CurrencyConfigDataStore/getCurrency',
  async (_, { rejectWithValue }) => {
    try {
      const res: AxiosResponse = await axios.get<ICurrency>(`${API_URL}`);
      return res.data;
    } catch (error: IResponseError | unknown) {
      rejectWithValue(error)
    }
  })