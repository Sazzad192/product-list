import { client } from "@/lib/HttpKit";

const productService = {
  getProducts: (params) => {
    const url = `products`;
    return client.get(url, { params });
  },
  productDetails: (uid) => {
    const url = `/trip/schedule_trip/${uid}/`;
    return client.get(url);
  },
  postProduct: (payload) => {
    const url = `/trip/create_trip/`;
    return client.post(url, payload);
  },
  patchProduct: (uid, payload) => {
    const url = `/trip/schedule_trip_update/${uid}/`;
    return client.patch(url, payload);
  },
  deleteProduct: (uid) => {
    const url = `/trip/schedule_trip/${uid}/`;
    return client.delete(url);
  },
};

export default productService;
