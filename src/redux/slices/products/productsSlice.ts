import apiSlice from "../apiSlice";
import { Product, ProductSearchParams } from "./types";
import { Response } from "../types";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Response<Product>, ProductSearchParams>({
      query: (body) => ({
        url: "/product/search",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = extendedApiSlice;
