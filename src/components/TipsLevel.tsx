import {FC} from 'react';
import {BsFillEmojiHeartEyesFill,BsFillEmojiLaughingFill,BsFillEmojiSmileFill,BsFillEmojiNeutralFill, BsFillEmojiFrownFill} from "react-icons/bs";
import { BAD_SERVICE, EXCELLENT_SERVICE, GOOD_SERVICE, OK_OK_SERVICE, TOP_NOTCH_SERVICE } from './TipsConstant';

    type TipsLevelProps={
        className?: string
       tip: string
    }

const TipsLevel: FC<TipsLevelProps> =({tip}) =>{

  return (
    <ul className='min-w-fit text-sm text-gray-500 md:text-base hidden sm:block'>
        <li className={`flex justify-between items-center gap-x-8 border px-1 
                    ${tip== TOP_NOTCH_SERVICE &&'bg-green-100'}`}> 
            <span>25%- Top Notch</span>
             <span className={`text-green-500 ${tip==TOP_NOTCH_SERVICE && "animate-spin"}`}><BsFillEmojiHeartEyesFill/></span>
        </li>
        <li className={`flex justify-between items-center gap-x-8 border px-1
                ${tip==EXCELLENT_SERVICE &&'bg-yellow-100'}`}  > 
            <span>20%- Excellent</span>
             <span className={`text-yellow-500 ${tip==EXCELLENT_SERVICE && "animate-spin"}`}><BsFillEmojiLaughingFill/></span>
        </li>
        <li className={`flex justify-between items-center gap-x-8 border px-1
                    ${tip==GOOD_SERVICE &&'bg-blue-100'}`}> 
            <span>15%- Good</span>
             <span className={`text-blue-500 ${tip==GOOD_SERVICE && "animate-spin"}`}><BsFillEmojiSmileFill/></span>
        </li>
        <li className={`flex justify-between items-center gap-x-8 border px-1
                    ${tip==OK_OK_SERVICE &&'bg-orange-100'}`}> 
            <span>10%- Ok Ok</span>
             <span className={`text-orange-500 ${tip==OK_OK_SERVICE && "animate-spin"}`}><BsFillEmojiNeutralFill/></span>
        </li>
        <li className={`flex justify-between items-center gap-x-8 border px-1
                    ${tip==BAD_SERVICE &&'bg-red-100'}`}> 
            <span>5%- Bad</span>
             <span className={`text-red-500 ${tip==BAD_SERVICE && "animate-spin"}`}><BsFillEmojiFrownFill/></span>
        </li>
    </ul>
  )
}

export default TipsLevel;