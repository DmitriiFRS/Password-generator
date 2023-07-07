import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { renderStrength } from "../Redux/Slices/passgenSlice";
function PassStrength () {
   const dispatch = useDispatch();
   const passStatus = useSelector((state: RootState) => state.passgen.passStatus);
   const sliderValue = useSelector((state: RootState) => state.passgen.sliderValue);
   const strengthCount = useSelector((state: RootState) => state.passgen.strengthCount);
   const strength = [
      {title: 'Too weak!', color: '#F64A4A'},
      {title: 'Weak', color: '#FB7C58'},
      {title: 'Medium', color: '#F8CD65'},
      {title: 'Strong', color: '#A4FFAF'}
   ]
   let value = strengthCount + 1;
   useEffect(() => {
      dispatch(renderStrength());
   }, [passStatus, sliderValue])
   return (
      <div className="pass-strength">
         <h3 className="pass-strength__title">strength</h3>
         <div className="pass-strength__indicator-container">
            <span className="pass-strength__indicator-title">{strength[strengthCount].title}</span>
            <div className="pass-strength__indicator">
               {strength.map((el, index) => {
                  value--
                  return (
                     <div key={index} className='pass-strength__field' style=
                     {{background: value >= 0 ? strength[strengthCount].color : '', border: value >= 0 ? 0 : ''}}></div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
export default PassStrength;