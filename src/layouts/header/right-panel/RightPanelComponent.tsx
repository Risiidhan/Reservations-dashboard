import React from 'react';
import ProfileComponent from './ProfileComponent';
import IconBadgeContainer from './IconBadgeContainer';
import { BadgeType } from '../../../../types/enum/BadgeType';
import MobileSidemenuComponent from '@/layouts/sidemenu/MobileSidemenuComponent';

const RightPanelComponent : React.FC  = () => {
  return (
    <div className='flex gap-[10px]'>
      <IconBadgeContainer badgeType={BadgeType.Notification} />
      <IconBadgeContainer badgeType={BadgeType.Alert} />
      <div className='hidden tablet:flex'>
      <ProfileComponent />
      </div>
        <div className='flex tablet:hidden'><MobileSidemenuComponent /></div>
    </div>
  )
}

export default RightPanelComponent

