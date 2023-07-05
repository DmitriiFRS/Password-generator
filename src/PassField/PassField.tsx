import { copyPath } from '../imges/svgsPath';
function PassField() {
   return (
      <div className="pass__field">
         <input placeholder='P4$5W0rD!' type="text" className="pass__input" />
         <div className="pass__copy-img-container">
         <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d={copyPath} fill="#currentColor"/></svg>
         </div>
      </div>
   )
}
export default PassField;