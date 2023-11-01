import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    targetCurrency: { code: 'usd', symbol: '$' },
    currenciesCurrentPage: 1,
    coinsViewMode: 'grid'
};


const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        changeTargetCurrency: (state, action) => {
            state.targetCurrency = action.payload;
        },
        changeCurrenciesCurrentPage: (state, action) => {
            state.currenciesCurrentPage = action.payload;
        },
        changeCoinsViewMode: (state, action) => {
            state.coinsViewMode = action.payload;
        }
    }
});


export const {
    changeTargetCurrency,
    changeCurrenciesCurrentPage,
    changeCoinsViewMode
} = optionsSlice.actions;
export default optionsSlice.reducer;