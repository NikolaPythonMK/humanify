import { API_URL } from "@/constants";
import { LoginResponse } from "@/interfaces/LoginResponse";

async function login(username: string, password: string): Promise<LoginResponse>{
    try {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data);
        }

        localStorage.setItem('user', JSON.stringify(data));
        return {error: null}
    }
    catch (error: any) {
        return {error: error.message}
    }
}

export { login };