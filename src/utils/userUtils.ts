import { User } from "@/interfaces/User";
import { convertToFeatures } from "./convertToRoute";

export function getUser(): User | null{

    const rawUser = localStorage.getItem('user');
    console.log(rawUser);

    if (!rawUser) return null;

    const token = JSON.parse(rawUser).token;
    const rawRoutes = JSON.parse(rawUser).allowedRoutes;


    const parts = token.split('.');
    const decodedPayload = JSON.parse(atob(parts[1]));

    const allowedRoutes = convertToFeatures(rawRoutes);

    return {
        email: decodedPayload.email,
        role: decodedPayload.role,
        unique_name: decodedPayload.unique_name,
        allowedFeatures: allowedRoutes
    }
}

export function getToken(){
    const rawUser = localStorage.getItem('user');
    if (!rawUser) return null;
    return JSON.parse(rawUser).token;   
}
