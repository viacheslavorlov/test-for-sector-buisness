import {createSlice} from '@reduxjs/toolkit';

interface SearchSliceSchema {
    value: string
}

const initialState: SearchSliceSchema = {
    value: '',
};

export const searchSliceSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.value = action.payload;
        }
    },

});

export const { reducer: searchSliceReducer, actions: searchSliceActions } = searchSliceSlice;
