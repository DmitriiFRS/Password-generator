import { copyPath } from '../imges/svgsPath';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/Store';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { displayCopyTitle } from '../Redux/Slices/passgenSlice';
function PassField() {
   
   const dispatch = useDispatch();
   const passwordValue = useSelector((state: RootState) => state.passgen.password);
   const isCopy = useSelector((state:RootState) => state.passgen.isCopy);
   function copyTitleCall() {
      dispatch(displayCopyTitle(true));
      setTimeout(() => {
         dispatch(displayCopyTitle(false));
      }, 2500)
   }
   return (
      <div className="pass__field">
         <input value={passwordValue} readOnly placeholder='P4$5W0rD!' type="text" className="pass__input" />
         <div className="pass_copy-container">
            {isCopy && <span className="pass__copied">Copied</span>}
            <CopyToClipboard text={passwordValue}>
               <div onClick={copyTitleCall} className="pass__copy-img-container">
                  <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d={copyPath} fill="#currentColor"/></svg>
               </div>
            </CopyToClipboard>
         </div>
      </div>
   )
}
export default PassField;