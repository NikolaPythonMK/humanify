import { Feature } from "./Feature";

export interface User {
    email: string,
    unique_name: string,
    role: string,
    allowedFeatures: Feature[]
}