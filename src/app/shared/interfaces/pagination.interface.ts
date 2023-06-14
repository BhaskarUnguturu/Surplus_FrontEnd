export interface Pagination {
    totalPages: number,
    totalCount: number,
    currentPage: number,
    perPage: number,
    data: any
}
export const pagination: Pagination = {
    totalPages: 0,
    totalCount: 0,
    currentPage: 1,
    perPage: 25,
    data: []
};