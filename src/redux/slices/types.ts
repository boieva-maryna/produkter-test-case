export interface Response<T = any> {
  results: T[];
  currentPage: number;
  pageCount: number;
  pageSize: number;
  rowCount: number;
}
