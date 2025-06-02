import React from 'react'
import '../style.css';


const ProfileComponent = ({children}: {children : React.ReactNode}) => {
   return(
     <div className='right-panel-container-btn'>
         {children}
    </div>
   )

}

export default ProfileComponent
