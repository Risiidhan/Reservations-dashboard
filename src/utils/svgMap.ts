import AlertIcon from '../../public/image/svg/alert.svg';
import CollapseIcon from '../../public/image/svg/collapseIcon.svg';
import DashboardIcon from '../../public/image/svg/dashboardIcon.svg';
import DiningIcon from '../../public/image/svg/diningIcon.svg';
import HelpIcon from '../../public/image/svg/helpIcon.svg';
import HotelLogo from '../../public/image/svg/hotelLogo.svg';
import HotelLogoWithText from '../../public/image/svg/hotelLogoWithText.svg';
import NotificationIcon from '../../public/image/svg/notification.svg';
import QuickStartIcon from '../../public/image/svg/quickStartIcon.svg';
import PlusIcon from '../../public/image/svg/plusIcon.svg';
import Reservation from '../../public/image/svg/reservation/reservation.svg';
import Confirmed from '../../public/image/svg/reservation/confirmed.svg';
import Pending from '../../public/image/svg/reservation/pending.svg';
import Tables from '../../public/image/svg/reservation/tables.svg';
import ArrowUp from '../../public/image/svg/reservation/arrowUp.svg';
import ArrowDown from '../../public/image/svg/reservation/arrowDown.svg';



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
  plusIcon: PlusIcon?.default || PlusIcon,
  reservation: Reservation?.default || Reservation,
  confirmed: Confirmed?.default || Confirmed,
  pending: Pending?.default || Pending,
  tables: Tables?.default || Tables,
  arrowUp: ArrowUp?.default || ArrowUp,
  arrowDown: ArrowDown?.default || ArrowDown
};

export function getSvgIconByName(name: string) {
  return svgMap[name] || null;
}
