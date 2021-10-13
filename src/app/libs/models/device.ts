import { User } from "./user";

export class Device{
    id!: number;
    name?: string;
    manufacturer?: string;
    type?: number;
    operatingSystem?: string;
    osVersion?: string;
    processor?: string;
    ramAmount?: string;
    isAssigned?: boolean;
    userId?: number;
    user?: User;
}