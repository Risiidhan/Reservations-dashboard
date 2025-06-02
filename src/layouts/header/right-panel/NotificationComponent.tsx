import React from "react";
import '../style.css';

const NotificationComponent = ({children}: {children : React.ReactNode}) => {
   return(
     <div className='right-panel-container-btn relative'>
           {children}
    </div>
   )
}
export default NotificationComponent;