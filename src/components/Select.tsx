import { FC, ReactNode } from "react";
import { useField } from "formik";

type SelectProps={
  id: string
  className: string
  name: string
  children?: ReactNode;
}

const Select:FC<SelectProps>=({ children, name, ...rest})=>{
  const [field, meta]= useField(name);

  const {value, onChange}= field;
  const {touched, error}= meta;

    return (<>
   <select {...rest} value={value} onChange={onChange}>{children}</select>
   {touched && error&& <div className='text-red-500 text-xs lg:text-sm'>{error}</div>}
    </>)
}


export default Select;