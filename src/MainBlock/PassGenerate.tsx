import { generatePass } from '../Redux/Slices/passgenSlice';
import {arrowPath} from '../imges/svgsPath';
import { useDispatch } from 'react-redux';
function PassGenerate () {
   const dispatch = useDispatch()
   return (
      <div className="pass-generate">
         <button onClick={() => dispatch(generatePass())} className="pass-generate__btn">generate</button>
         <svg className='pass-generate__icon' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d={arrowPath}/></svg>
      </div>
   )
}
export default PassGenerate;