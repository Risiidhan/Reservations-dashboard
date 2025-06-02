import { BadgeType } from '@/enum/BadgeType';
import React from 'react'

const IconBadgeContainer = ({badgeType}: {badgeType: BadgeType}) => {

  const renderIcon = () => {
    switch (badgeType) {
      case BadgeType.Alert:
        return '🚗';
      case BadgeType.Notification:
        return '⚽️';  
      default:
        return null;
  };
  }
  return (
    <div className='right-panel-container-btn relative'>
      <div className='red-dot'></div>
           {renderIcon()}
    </div>
  )
}

export default IconBadgeContainer
