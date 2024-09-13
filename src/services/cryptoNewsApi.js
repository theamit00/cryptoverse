import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'x-rapidapi-key': 'a580575353mshed2cc182d97b1bap14c28ejsn7057f7aa01de',
    'x-rapidapi-host': 'news-api14.p.rapidapi.com'
}

const baseUrl = "https://news-api14.p.rapidapi.com"

const createRequest = (url) => ({url, headers : cryptoNewsHeaders   });

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
        getCryptoNews : builder.query({
            query : ({newsCategory,limit}) => createRequest(`/v2/search/articles?query=${newsCategory}&language=en&limit=${limit}`),
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;