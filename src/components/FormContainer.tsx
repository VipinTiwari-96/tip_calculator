import {FC} from 'react';
import FormPage from './FormPage';
// import FormPage from './FormPage';

    type MainComponentProps={}

const FormContainer: FC<MainComponentProps> =() =>{
  return (
      <div className="max-w-2xl mx-auto p-4 text-gray-700 font-semibold">
        <h2 className='bg-orange-400 text-white font-semibold md:text-2xl text-center py-3 rounded-t-3xl'>
          TIP CALCULATOR
          </h2>

          <FormPage/>
    </div>
  )
}

export default FormContainer;