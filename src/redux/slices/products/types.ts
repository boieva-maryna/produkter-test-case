export interface Product {
  id: number;
  name: string;
}

export interface ProductSearchParams {
  page: number;
  pageSize: number;
  searchText: string;
  productCategoryTypeIds: number[];
  complianceTypeIds: number[];
  sourceTypeIds: number[];
}
