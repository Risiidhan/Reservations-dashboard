import React from 'react';
import ProfileComponent from './ProfileComponent';
import IconBadgeContainer from './IconBadgeContainer';
import { BadgeType } from '../../../../types/enum/BadgeType';

const RightPanelComponent : React.FC  = () => {
  return (
    <div className='flex gap-[10px]'>
      <IconBadgeContainer badgeType={BadgeType.Notification} />
      <IconBadgeContainer badgeType={BadgeType.Alert} />
      <ProfileComponent />
    </div>
  )
}

export default RightPanelComponent

