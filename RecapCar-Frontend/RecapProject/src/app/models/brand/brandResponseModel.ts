import { ResponseModel } from "../response.model";
import { Brand } from "./brand";

export interface BrandResponseModel extends ResponseModel{
    data:Brand[];
}