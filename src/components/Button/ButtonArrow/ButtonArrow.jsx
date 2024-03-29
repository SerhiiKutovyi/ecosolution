
import icon from '../../../images/icon.svg';
import { BtnArrow } from './ButtonArrow.styled';


const ButtonArrow = () => {
     return (
       <BtnArrow type='button'>
         <svg>
           <use href={icon + '#icon-arrow-right'}></use>
         </svg>
       </BtnArrow>
     );
}
 
export default ButtonArrow;