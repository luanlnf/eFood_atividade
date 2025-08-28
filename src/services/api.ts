import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../models/restaurante'
import { PurchasePayload, PurchaseResponse } from '../models/checkout'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurante: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getPerfil: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestauranteQuery,
  useGetPerfilQuery,
  usePurchaseMutation
} = api

export default api
