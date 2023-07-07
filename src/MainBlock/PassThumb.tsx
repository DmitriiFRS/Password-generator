import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { changeThumbValue } from "../Redux/Slices/passgenSlice";

function PassThumb() {
   const dispatch = useDispatch();
   const thumbValue = useSelector((state: RootState) => state.passgen.sliderValue);
   let percentage = (thumbValue / 20) * 100;
   return (
      <div className="pass-thumb">
         <div className="pass-thumb__header">
            <h3 className="pass-thumb__length">Character Length</h3>
            <span className="pass-thumb__count">{thumbValue}</span>
         </div>
         <div className="pass-thumb__thumb">
            <div className="pass-thumb__line" style={{width: percentage +'%'}}></div>
            <input 
            onChange={(e) => {dispatch(changeThumbValue(Number(e.target.value)))}}
            value={thumbValue} max={20} min={0} type="range" className="pass-thumb__input" />
         </div>
      </div>
   )
}
export default PassThumb;