import AlertIcon from '../../public/image/svg/alert.svg';
import CollapseIcon from '../../public/image/svg/collapseIcon.svg';
import DashboardIcon from '../../public/image/svg/dashboardIcon.svg';
import DiningIcon from '../../public/image/svg/diningIcon.svg';
import HelpIcon from '../../public/image/svg/helpIcon.svg';
import HotelLogo from '../../public/image/svg/hotelLogo.svg';
import HotelLogoWithText from '../../public/image/svg/hotelLogoWithText.svg';
import NotificationIcon from '../../public/image/svg/notification.svg';
import QuickStartIcon from '../../public/image/svg/quickStartIcon.svg';
import pillArrowUp from '../../public/image/svg/pillArrowUp.svg'
import pillArrowDown from '../../public/image/svg/pillArrowDown.svg'
import Calender from '../../public/image/svg/calender.svg'
import activeOrdersIcon from '../../public/image/svg/activeOrdersIcon.svg'
import pendingRequestIcon from '../../public/image/svg/pendingRequestIcon.svg'



const svgMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  alert: AlertIcon?.default || AlertIcon,
  collapseIcon: CollapseIcon?.default || CollapseIcon,
  dashboardIcon: DashboardIcon?.default || DashboardIcon,
  diningIcon: DiningIcon?.default || DiningIcon,
  helpIcon: HelpIcon?.default || HelpIcon,
  hotelLogo: HotelLogo?.default || HotelLogo,
  hotelLogoWithText: HotelLogoWithText?.default || HotelLogoWithText,
  notification: NotificationIcon?.default || NotificationIcon,
  quickStartIcon: QuickStartIcon?.default || QuickStartIcon,
  pillArrowUp: pillArrowUp?.default || pillArrowUp,
  pillArrowDown: pillArrowDown?.default || pillArrowDown,
  calender: Calender?.default || Calender,
  activeOrdersIcon: activeOrdersIcon?.default || activeOrdersIcon,
  pendingRequestIcon: pendingRequestIcon?.default || pendingRequestIcon,

};

export function getSvgIconByName(name: string) {
  return svgMap[name] || null;
}
