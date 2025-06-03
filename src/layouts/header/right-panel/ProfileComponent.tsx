import React from 'react'
import '../style.css';
import Image from 'next/image';


const ProfileComponent: React.FC = () => {
   return(
     <div className='right-panel-container-btn hover-effect h-full relative overflow-hidden onclick-effect'>
         <Image
            src="/image/dummy-profile-img.png"
            alt="profile-pic"
            fill
            className="object-cover h-full"
            />
    </div>
   )
 
}

export default ProfileComponent
