import React from 'react';
import NotificationComponent from "./NotificationComponent"
import AlertComponent from './AlertComponent';
import ProfileComponent from './ProfileComponent';

const RightPanelComponent = () => {
  return (
    <div className='flex gap-[10px]'>
      <NotificationComponent>😀</NotificationComponent>
      <AlertComponent>😀</AlertComponent>
      <ProfileComponent>😀</ProfileComponent>
    </div>
  )
}

export default RightPanelComponent

