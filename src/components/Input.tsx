import { useField } from "formik"
import {FC, InputHTMLAttributes, ReactNode} from 'react';

    type InputProps={
        placeholder: string
        id: string
        name: string
        className?: string
        children?: ReactNode
    }& InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> =({ name,placeholder, children,...rest}) =>{
  const [field, meta]= useField(name);
  let {value, onChange}= field;
  const {error, touched}= meta;

  if(value==0){
    value= placeholder 
  }

  return (
    <>
      <input name={name} value={value} onChange={onChange} placeholder={placeholder}
      {...rest}
       className={`w-full text-xs sm:text-sm  font-normal border-b border-teal-400 outline-none focus:border focus:bg-teal-100 py-2 sm:pl-2  ${value>0 && 'bg-gray-100'}` }/>
       {touched&& error && <div className="text-red-500 text-xs lg:text-sm ">{error}</div>}
    </>
  )
}

export default Input;