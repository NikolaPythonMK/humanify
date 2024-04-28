import { API_URL } from "@/constants";
import { getUser } from "@/utils/userUtils";

async function login(username: string, password: string){
    try {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        });

        if (!response.ok) {
            console.log('Incorect username or password!');
            console.log(response);
        }

        const data = await response.json();

       // console.log(JSON.parse(user));

        //console.log(getUser());
    }
    catch (error) {
        console.log('ERROR')
        throw new Error('Error during login');
    }
}


export { login };