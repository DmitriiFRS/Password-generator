import PassCheckboxes from "./PassCheckboxes";
import PassGenerate from "./PassGenerate";
import PassStrength from "./PassStrength";
import PassThumb from "./PassThumb";

function MainBlock() {
   return (
      <div className="main-block">
         <PassThumb />
         <PassCheckboxes />
         <PassStrength />
         <PassGenerate />
      </div>
   )
}
export default MainBlock;