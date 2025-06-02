import React from 'react'
import '../style.css';

const AlertComponent = ({children}: {children : React.ReactNode}) => {
   return(
     <div className='right-panel-container-btn relative'>
      <div className='rounded-full bg-[#FF0000] w-[7px] aspect-square absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]'></div>
           {children}
    </div>
   )
}

export default AlertComponent
