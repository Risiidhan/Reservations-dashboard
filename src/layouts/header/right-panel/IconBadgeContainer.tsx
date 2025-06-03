import { BadgeType } from '../../../../types/enum/BadgeType';
import React from 'react'
import NotificationSvg from '../svg/NotificationSvg';
import AlertSvg from '../svg/AlertSvg';

const a = {
  [BadgeType.Alert]: <AlertSvg />,
  [BadgeType.Notification]: <NotificationSvg />
}

type IconBadgeProps = {
  badgeType: BadgeType;
}
const IconBadgeContainer: React.FC <IconBadgeProps> = ({badgeType}) => {
  return (
    <div className='right-panel-container-btn relative hover-effect onclick-effect'>
      <div className='red-dot'></div>
          {a[badgeType]}
    </div>
  )
}

export default IconBadgeContainer
