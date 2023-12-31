import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { changeSettings } from '../Redux/Slices/passgenSlice';
type checkboxType = {
   id: number
   title: string
}
function PassCheckboxes () {
   const dispatch = useDispatch();
   function changePassConfig(e: ChangeEvent<HTMLInputElement>, index: number) {
      dispatch(changeSettings(index))
   }
   const checkboxes = [{id: 1, title: 'Include Uppercase Letters'}, {id: 1, title: 'Include Lowercase Letters'},
   {id: 1, title: 'Include Numbers'}, {id: 1, title: 'Include Symbols'},]
   return (
      <div className="checkboxes">
         {checkboxes.map((el: checkboxType, index: number) => {
            return (
               <div key={index} className="checkboxes__block">
                  <input onChange={(e) => changePassConfig(e, index)} id={'checkbox' + index} type="checkbox" className="checkboxes__checkbox"/>
                  <label className="checkboxes__title" htmlFor={'checkbox' + index}>{el.title}</label>
               </div>
            )
         })}
      </div>
   )
}
export default PassCheckboxes;