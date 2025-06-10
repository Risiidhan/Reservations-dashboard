import SvgIcon from "@/components/SvgIcon";

  export const sidebarContent: SidebarSection[] = [
    {
      title: 'Overview',
      menu: {
        title: "Dashboard",
        icon: <SvgIcon name="dashboardIcon" width={20} height={20} className="size-5" />,
        type: "button",
        action: () => null,
      },
    },
    {
      title: 'Booking & Reservation',
      menu: {
          title: 'Dining',
           type: "button",
            action: () => null,
          icon: <SvgIcon name="diningIcon" width={20} height={20} className="size-5"/>,
          submenu: [
              {
                  title: 'Reservations Overview',
                  type: "link",
                  redirectTo: '/'
              },
              {
                  title: 'Table & Capacity',
                  type: "link",
                  redirectTo: '/'
              },
              {
                  title: 'Floor Plan',
                  type: "link",
                  redirectTo: '/'
              },
              {
                  title: 'Block dates & times',
                  type: "link",
                  redirectTo: '/'
              },
              {
                  title: 'Manage restaurant',
                  type: "link",
                  redirectTo: '/'
              },
          ],
      },
    },
  ];