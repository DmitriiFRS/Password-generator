function PassStrength () {
   const strength = [
      {title: 'Too weak!', color: '#F64A4A'},
      {title: 'Weak', color: '#FB7C58'},
      {title: 'Medium', color: '#F8CD65'},
      {title: 'Strong', color: '#A4FFAF'}
   ]
   return (
      <div className="pass-strength">
         <h3 className="pass-strength__title">strength</h3>
         <div className="pass-strength__indicator-container">
            <span className="pass-strength__indicator-title">{strength[2].title}</span>
            <div className="pass-strength__indicator">
               {strength.map((el, index) => {
                  return (
                     <div key={index} className='pass-strength__field' style={{background: el.color}}></div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
export default PassStrength;