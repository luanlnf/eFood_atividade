import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../models/restaurante'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurante: builder.query<Restaurante[], void>({
      query: () => 'Restaurantes'
    }),
    getPerfil: builder.query<Restaurante, string>({
      query: (id) => `Restaurantes/${id}`
    })
  })
})

export const { useGetRestauranteQuery, useGetPerfilQuery } = api

export default api
