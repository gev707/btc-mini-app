import { createSlice } from '@reduxjs/toolkit';
import { getCurrency } from './thunk';
import { ICurrencyConfigDataStore } from './types';

const initialState: ICurrencyConfigDataStore = {
    currency: {
        bpi: {},
        time: {
            updated: ''
        },
        chartName: ''
    },
    isLoading:false,
    responseError: undefined 
}

const CurrencyConfigDataStore = createSlice({
    name: 'CurrencyConfigDataStore',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCurrency.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCurrency.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.currency = payload;
            })
            .addCase(getCurrency.rejected, (state,{payload}) => {
                state.isLoading = false
                state.responseError = payload
            })
    }
})

export default CurrencyConfigDataStore.reducer