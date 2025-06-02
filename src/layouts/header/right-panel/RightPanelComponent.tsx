import React from 'react';
import ProfileComponent from './ProfileComponent';
import IconBadgeContainer from './IconBadgeContainer';
import { BadgeType } from '@/enum/BadgeType';

const RightPanelComponent = () => {
  return (
    <div className='flex gap-[10px]'>
      <IconBadgeContainer badgeType={BadgeType.Alert} />
      <IconBadgeContainer badgeType={BadgeType.Notification} />
      <ProfileComponent>😀</ProfileComponent>
    </div>
  )
}

export default RightPanelComponent

