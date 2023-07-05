function PassThumb() {
   return (
      <div className="pass-thumb">
         <div className="pass-thumb__header">
            <h3 className="pass-thumb__length">Character Length</h3>
            <span className="pass-thumb__count">10</span>
         </div>
         <div className="pass-thumb__thumb">
            <div className="pass-thumb__line"></div>
            <input max={20} min={0} type="range" className="pass-thumb__input" />
         </div>
      </div>
   )
}
export default PassThumb;