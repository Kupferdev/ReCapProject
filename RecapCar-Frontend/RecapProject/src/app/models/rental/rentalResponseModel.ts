import { ResponseModel } from "../response.model";
import { RentalDetails } from "./rentalDetails";

export interface RentalResponseModel extends ResponseModel{
    data: RentalDetails[];
}