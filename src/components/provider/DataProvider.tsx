import {FC, useState, ReactNode} from 'react';
import * as yup from "yup";
import { BAD_SERVICE, EXCELLENT_SERVICE, GOOD_SERVICE, OK_OK_SERVICE, TOP_NOTCH_SERVICE } from '../TipsConstant';
import {dataContext} from "./context";

    type DataProviderProps={
      children?: ReactNode
    }

   export type Value= {amount:number, persons: number}

const DataProvider : FC<DataProviderProps> =({children}) =>{
    const[tip,  setTip]= useState("");
    const[perManTip,  setPerManTip]= useState(0);
    const[selectError,  setSelectError]= useState("");

    const schema= yup.object().shape({
    amount:yup.number().required().min(1),
    persons: yup.number().required().min(1)
   })

   const initialValues:Value={
    amount:0,
    persons:0
   }
   
  const handleSubmit=(value:Value)=>{
    if(tip==""){
      setSelectError("select the tip...")
      } 
      else if(tip==TOP_NOTCH_SERVICE){
              setPerManTip((value.amount*25/100)/value.persons);
            }
            else if(tip== EXCELLENT_SERVICE){
              setPerManTip((value.amount*20/100)/value.persons);
            }
            else if(tip==GOOD_SERVICE){
              setPerManTip((value.amount*15/100)/value.persons);
            }
            else if(tip==OK_OK_SERVICE){
              setPerManTip((value.amount*10/100)/value.persons)
            }
            else if(tip==BAD_SERVICE){
              setPerManTip((value.amount*5/100)/value.persons)
            }
  }
    
  return (<>
    <dataContext.Provider value={
      {tip,setTip,selectError,setSelectError,perManTip,setPerManTip,
      handleSubmit,initialValues,schema}}>
           {children}
    </dataContext.Provider>
  </>)
}

export default DataProvider;