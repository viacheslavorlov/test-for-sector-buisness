import {RootState} from '../store';

export const currentPageSelector = (state: RootState) => state.pages.currentPage || 1;

export const totalPageCountSelector = (state: RootState) => state.pages.totalPageCount || 10;
