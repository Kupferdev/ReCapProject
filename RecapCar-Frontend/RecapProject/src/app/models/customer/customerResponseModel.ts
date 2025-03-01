import { ResponseModel } from "../response.model";
import { Customer } from "./customer";

export interface CustomerResponseModel extends ResponseModel{
    data: Customer[];
}