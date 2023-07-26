import {createSlice} from '@reduxjs/toolkit';

interface PageSlice {
    currentPage: number;
    totalPageCount: number;
}

const initialState: PageSlice = {
    currentPage: 1,
    totalPageCount: 10
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        plusPage: (state) => {
            if (state.currentPage < state.totalPageCount) {
                state.currentPage += 1;
            }
        },
        minusPage: (state) => {
            if (state.currentPage > 0) {
                state.currentPage -= 1;
            }
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
});

export const {
    actions: pageSliceActions,
    reducer: pageSliceReducer
} = pageSlice;
