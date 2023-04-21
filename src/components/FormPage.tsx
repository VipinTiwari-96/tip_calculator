import {FC, useContext} from 'react';
import Input from './Input';
import {MdGroups} from "react-icons/md"
import TipsLevel from './TipsLevel';
import {Formik, Form} from "formik";
import { dataContext } from './provider/context';
import { BAD_SERVICE, EXCELLENT_SERVICE, GOOD_SERVICE, OK_OK_SERVICE, TOP_NOTCH_SERVICE } from './TipsConstant';
import Select from './Select';

    type FormProps={}

const FormPage: FC<FormProps> =() =>{
  const{tip, setTip, selectError, setSelectError,
        perManTip,setPerManTip, handleSubmit, initialValues, schema}= useContext(dataContext);

  return (
    <>
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}  >
      <Form className="bg-white mt-6 rounded-t-3xl px-6 pt-8 pb-32 ">
      <div>
      <label htmlFor="amount" className='text-sm sm:text-xl '>Bill Amount</label>
        <div className='flex gap-2 w-2/3 sm:w-1/2'>
        <div className='w-full'>
         <Input type="number" name='amount' placeholder='Amount to be paid' id='amount' /> 
         </div>
           <span className='sm:text-xl'>&#8377;</span>
         
         </div>
      </div>

      <div className=' my-10 sm:flex gap-8 '>
        <div className='sm:w-1/2'>
          <label htmlFor="service" className='text-sm sm:text-xl'>How was the service?</label>
         
         <Select  id="service" name="service"
              className={`w-2/3 sm:w-full text-gray-500 text-xs sm:text-sm lg:text-base font-normal 
              border-b border-teal-400 outline-none 
              focus:border p-2 ${tip !=="" && "bg-gray-100"}`}>
            <option value="" >Select the tip...</option>
            <option value={TOP_NOTCH_SERVICE}>25%- Top Notch </option>
            <option value={EXCELLENT_SERVICE}>20%- Excellent</option>
            <option value={GOOD_SERVICE}>15%- Good</option>
            <option value={OK_OK_SERVICE}>10%- Ok Ok</option>
            <option value={BAD_SERVICE}>5%- Bad</option>
         </Select>

        </div>
           <TipsLevel tip={tip} />
      </div>

      <div>
       <label htmlFor="persons" className='text-sm sm:text-xl '>Total number of persons</label>
         <div className='flex gap-2 w-2/3 sm:w-1/2'>
          <div className='w-full'>
         < Input type="number" placeholder='No. of people sharing the bill' id='persons' name='persons'/>
            </div>
            <MdGroups className='text-2xl sm:text-3xl'/>
         </div>
      </div>
       
    <div className='flex justify-between w-2/3 sm:w-1/2 mt-6'>
      <button type='submit' className='bg-teal-400 text-white p-2 sm:py-3 sm:px-6 rounded-md '>Calculate</button>
      <button type='reset' className='bg-orange-400 text-white p-2 sm:py-3 sm:px-6 rounded-md ' 
          onClick={()=>{
             setTip("")
             setPerManTip(0)
             setSelectError("")
             }}> Reset</button>
    </div>
      
      {perManTip>0? <div className='text-center mt-10 '>
          <h2 className='sm:text-2xl '>Tip Amount</h2>
           <div className=' sm:text-lg mt-2'>{perManTip}&#8377; each</div>
        </div>: <div className='text-center mt-10 '>Liked our service? Then it's goot to give some tips...</div>}
        </Form>
   </Formik> 
 </> )
}

export default FormPage;