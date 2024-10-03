import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pizzaApi = createApi({
    reducerPath: 'pizzaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/' }),
    endpoints: builder => ({
        getOrders: builder.query({
            query: () => 'orders',
            provideTags: ['Orders'],
        }),
        createOrder: builder.mutation({
            query: newOrder => ({
                url: 'orders',
                method: 'POST',
                body: newOrder,
            }),
            invalidateTags: ['Orders'],
        })
    })
})

export const {useGetOrdersQuery, useCreateOrderMutation} = pizzaApi