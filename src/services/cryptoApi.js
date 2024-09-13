import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  'x-rapidapi-key': 'a580575353mshed2cc182d97b1bap14c28ejsn7057f7aa01de',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({url, headers : cryptoApiHeaders});

export const cryptoApi = createApi({
  reducerPath : "cryptoApi",
  baseQuery : fetchBaseQuery({baseUrl}),
  endpoints : (builder)=> ({
    getCryptos : builder.query({
      query : (limit=10)=> createRequest(`/coins?limit=${limit}`),
    })
  })
})

export const { useGetCryptosQuery } = cryptoApi;