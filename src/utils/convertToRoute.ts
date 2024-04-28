import { Feature } from "@/interfaces/Feature";


export function convertToFeatures(routes: string[]): Feature[]{
    return routes.map(route => {
        const parts = route.split(' ');
        const name = `Can ${parts[0].toLocaleLowerCase()} ${parts[1].split('/').pop()}`;
        return {
            route,
            name,
        } as Feature
    })
}