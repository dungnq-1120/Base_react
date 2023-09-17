import RestClient from "./RestClient";
import ProductServices from "./product.service";

const restClient = new RestClient();

export const productServices = new ProductServices(restClient);
