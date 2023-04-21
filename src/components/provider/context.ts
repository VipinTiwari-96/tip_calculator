import {createContext} from "react";
import { Value } from "./DataProvider";

export const dataContext= createContext({tip:"", setTip:(e:string)=>{}, 
                selectError:"",setSelectError:(s:string)=>{},
                perManTip:0, setPerManTip:(n:number)=>{},
                handleSubmit:(value:Value)=>{},
                initialValues: {amount:0, service:'', persons:0},
                schema:{}
            } )

