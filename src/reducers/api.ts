import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API = 'https://api.github.com'
const baseQuery = fetchBaseQuery({
    baseUrl: API,
})

export const githubApi = createApi({
    reducerPath: 'github',
    baseQuery: baseQuery,
    endpoints: builder => ({
        getUsersAsc: builder.query<unknown, string>({
            query: (name: string) => {
                return {
                    url: `/search/users?q=${name}&sort=repositories&order=asc&per_page=100`,
                }
            },
        }),
        getUsersDesc: builder.query<unknown, string>({
            query: (name: string) => {
                return {
                    url: `/search/users?q=${name}&sort=repositories&order=desc&per_page=100`,
                }
            },
        }),
    }),
})
export const { useGetUsersAscQuery, useGetUsersDescQuery } = githubApi
