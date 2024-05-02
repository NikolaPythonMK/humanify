import { API_URL } from "@/constants";
import { Feature } from "@/interfaces/Feature";
import { getToken } from "@/utils/userUtils";

export interface AllRolesResponse {
    data: any | null,
    error: string
}


export async function getAllRoles(): Promise<AllRolesResponse>{
    try {
        const response = await fetch(`${API_URL}/api/auth/permission`, {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        })

        const data = await response.json();
        console.log('D: ', data);

        if (!data.ok) {
            throw new Error(data);
        }

        console.log(data);
        return { data, error: '' }
    }
    catch (error) {
        return {data: null, error: 'Error'}
    }
}