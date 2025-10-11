import axiosClient from "./axiosClient";

type PaginationOptions = {
  page?: number;
  pageSize?: number;
};

const MAX_PAGE_SIZE = 6;

const getProductsPagination = (
  { page = 1, pageSize = MAX_PAGE_SIZE }: PaginationOptions = {}
) => {
  const safePage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
  const boundedPageSize = Number.isFinite(pageSize) && pageSize > 0
    ? Math.min(Math.floor(pageSize), MAX_PAGE_SIZE)
    : MAX_PAGE_SIZE;

  const params = new URLSearchParams({
    "pagination[page]": String(safePage),
    "pagination[pageSize]": String(boundedPageSize),
    "sort[0]": "id:desc",
    populate: "*",
  });

  return axiosClient.get(`/products?${params.toString()}`);
};

type ProductIdentifier =
  | string
  | number
  | {
      id?: string | number | null;
      documentId?: string | null;
    };

const getProductById = (identifier: ProductIdentifier) => {
  const params = new URLSearchParams({
    "pagination[pageSize]": "1",
    populate: "*",
  });

  const orFilters: Array<{ field: "id" | "documentId"; value: string }> = [];

  const appendFilter = (field: "id" | "documentId", value: unknown) => {
    if (value === null || value === undefined) {
      return;
    }

    if (typeof value === "string" || typeof value === "number") {
      const trimmed = String(value).trim();
      if (trimmed.length > 0) {
        orFilters.push({ field, value: trimmed });
      }
    }
  };

  if (typeof identifier === "string" || typeof identifier === "number") {
    appendFilter("id", identifier);
    appendFilter("documentId", identifier);
  } else if (identifier && typeof identifier === "object") {
    appendFilter("id", identifier.id ?? null);
    appendFilter("documentId", identifier.documentId ?? null);
  }

  orFilters.forEach(({ field, value }, index) => {
    params.append(`filters[$or][${index}][${field}][$eq]`, value);
  });

  return axiosClient.get(`/products?${params.toString()}`);
};

const getProducts = () =>
  axiosClient.get(`/products?populate=*&sort[0]=id:desc`);

const productApis = {
  getProductsPagination,
  getProductById,
  getProducts,
};

export default productApis;
