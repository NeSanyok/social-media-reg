import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IGetUserResponse } from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://161.35.153.209:5430/api" }),
  endpoints: (builder) => ({
    getUser: builder.query<IGetUserResponse, string>({
      query: (user_id) => `/user?user_id=${user_id}`,
    }),
    loginUser: builder.mutation<any, any>({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
    }),
    regData: builder.mutation<any, any>({
        query: (regData) => ({
          url: "/registration",
          method: "POST",
          body: regData,
        }),
      }),
  }),
});

export const { useGetUserQuery, useLoginUserMutation, useRegDataMutation } = authApi;
