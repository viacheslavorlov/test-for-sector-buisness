import { createSlice } from '@reduxjs/toolkit';

interface SearchSliceSchema {
    value: string
}

const initialState: SearchSliceSchema = {
    value: '',
};

export const searchsliceSlice = createSlice({
    name: 'searchslice',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.value = action.payload;
        }
    },

});

export const { reducer: searchSliceReducer, actions: searchSliceActions } = searchsliceSlice;
