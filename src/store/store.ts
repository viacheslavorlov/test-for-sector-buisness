import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {postsAPI} from './api';
import {pageSliceReducer} from './pageSlice/pageSlice';
import {searchSliceReducer} from './searchSlice/searchslice';

export const store = configureStore({
    reducer: {
        search: searchSliceReducer,
        pages: pageSliceReducer,
        [postsAPI.reducerPath]: postsAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
