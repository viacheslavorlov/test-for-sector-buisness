import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PostInterface} from '../entities/Post';

export const postsAPI = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getPosts: builder.query<PostInterface[], number>({
            query: (page) => `/posts?_page=${page}`
        })
    }),
});


export const {useGetPostsQuery} = postsAPI;
