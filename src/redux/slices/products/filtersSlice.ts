import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductSearchParams } from "./types";

const initialState: ProductSearchParams = {
  page: 1,
  pageSize: 10,
  searchText: "",
  productCategoryTypeIds: [],
  complianceTypeIds: [],
  sourceTypeIds: [],
};

export const filtersSlice = createSlice({
  name: "productFilters",
  initialState,
  reducers: {
    setFilters: (
      state,
      action: PayloadAction<Partial<ProductSearchParams>>
    ) => ({
      ...state,
      page: initialState.page,
      ...action.payload,
    }),
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
