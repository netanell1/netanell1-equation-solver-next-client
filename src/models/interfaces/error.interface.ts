import { ErrorscodeEnum } from "../enums/errorscode.enum";

export interface ErrorModel {
    error: string;
    code: ErrorscodeEnum
}
