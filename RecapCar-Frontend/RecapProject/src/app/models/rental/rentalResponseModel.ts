import { ResponseModel } from "../response.model";
import { Rental } from "./rental";

export interface RentalResponseModel extends ResponseModel{
    data: Rental[];
}