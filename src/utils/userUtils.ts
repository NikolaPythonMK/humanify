import { User } from "@/interfaces/User";

export function getUser(): User | null{

    const token = localStorage.getItem('jwt-token');

    if (!token){
        return null;
    }

    const parts = token.split('.');
    const decodedPayload = JSON.parse(atob(parts[1]));
    console.log('decodedPyload: ', decodedPayload);

    return {
        email: decodedPayload.email,
        role: decodedPayload.role,
        unique_name: decodedPayload.unique_name,
        allowedFeatures: []
    }
}
