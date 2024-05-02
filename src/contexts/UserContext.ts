import { User } from "@/interfaces/User";
import { createContext, useContext } from "react";

export const UserContext = createContext<User | undefined>(undefined);

export function useUserContext() {
    const user = useContext(UserContext);
    if(!user){
        throw new Error('Value for UserContext must be provided.');
    }
    return user;
}
