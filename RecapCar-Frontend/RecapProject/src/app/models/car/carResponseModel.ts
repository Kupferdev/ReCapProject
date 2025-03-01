import { ResponseModel } from "../response.model";
import { Car } from "./car";

export interface CarResponseModel extends ResponseModel{
    data:Car[];
}