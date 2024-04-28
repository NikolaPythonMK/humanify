import { API_URL } from "@/constants";
import { convertToFeatures } from "@/utils/convertToRoute";

async function getRoutes(){
    try {
        const response = await fetch(`${API_URL}/api/shared/routes`);
        console.log(response);
        if(!response.ok){
            console.log('NOT OK');
        }
        const data = await response.json();
        console.log(JSON.parse(data));
        console.log(convertToFeatures(JSON.parse(data)));
    }
    catch (error) {
        console.log('ERROR: ', error);
    }
}


export { getRoutes };