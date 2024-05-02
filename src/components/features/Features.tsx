import { useEffect } from "react";
import Roles from "../roles/Roles";
import style from './Features.module.scss';
import { getAllRoles } from "@/services/TeamApi";

export default function Features(){

    useEffect(() => {
       getAllRoles()
       .then((data) => {
        console.log('DATA: ', data);
       })
       .catch((error) => {
        console.log('ERROR');
       })
    }, [])
    


    return (
        <div>
            <div className={style.featuresHeader}>
                <h3 style={{margin: '0', padding: '0'}}>Features</h3>
                <Roles />
            </div>
        </div>
    );
}