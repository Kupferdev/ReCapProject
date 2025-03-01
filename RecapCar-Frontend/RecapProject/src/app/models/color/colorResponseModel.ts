import { ResponseModel } from "../response.model";
import { Color } from "./color";

export interface ColorResponseModel extends ResponseModel{
    data:Color[];
}