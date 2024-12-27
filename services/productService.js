import { client } from "@/lib/HttpKit";

const productService = {
  getProducts: (params) => {
    const url = params.q
      ? `products/search`
      : params.category
      ? `products/category/${params.category}`
      : `products`;
    return client.get(url, { params });
  },

  getCategories: () => {
    const url = `products/category-list`;
    return client.get(url);
  },
};

export default productService;
