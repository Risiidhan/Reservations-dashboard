import SvgIcon from "@/components/SvgIcon";
import { Button } from "@/components/ui/button";
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from '@/components/ui/collapsible';
import { ChevronRight } from "lucide-react";

  export const sidebarContent: SidebarSection[] = [
    {
      title: 'Overview',
      menu: {
          title: 'Dashboard',
          redirectTo: '/',
          icon: <SvgIcon name="dashboardIcon" width={20} height={20} className="size-5"/>
      },
    },
    {
      title: 'Booking & Reservation',
      menu: {
          title: 'Dining',
          redirectTo: '/',
          icon: <SvgIcon name="diningIcon" width={20} height={20} className="size-5"/>,
          submenu: [
              {
                  title: 'Reservations Overview',
                  redirectTo: '/'
              },
              {
                  title: 'Table & Capacity',
                  redirectTo: '/'
              },
              {
                  title: 'Floor Plan',
                  redirectTo: '/'
              },
              {
                  title: 'Block dates & times',
                  redirectTo: '/'
              },
              {
                  title: 'Manage restaurant',
                  redirectTo: '/'
              },
          ],
      },
    },
  ];

  

  export const renderMenu = (menu: SidebarMenu) => {
  if (!menu.submenu) {
        return (
      <Button
        variant="ghost"
        className="w-full justify-start text-[15px] hover:bg-[#EDE7FF]">
        <div className="flex items-center text-[#525D6F] gap-2 font-medium">
          {menu.icon}
          {menu.title}
        </div>
      </Button>
    );
  }
      return (
        <Collapsible>
          <CollapsibleTrigger className="cursor-pointer" asChild>
            <Button
              variant="ghost"
              className="group w-full hover:bg-[#EDE7FF] justify-between text-[15px] font-normal"
            >
              <div className="flex items-center text-[#525D6F] gap-2">
                {menu.icon}
                {menu.title}
              </div>
              <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
            </Button>
          </CollapsibleTrigger>
        <CollapsibleContent className="relative mt-2 pl-6">
          {/* vertical line */}
          <div className="absolute top-[-1rem] h-full w-px bg-[#A084E8]" />

          {menu.submenu.map((subItem, index) => (
            <div key={index} className="relative flex items-center group">
              {/* horizontal branch line */}
              <span className="absolute top-1/2 h-px w-4 bg-[#A084E8]" />
              <Button
                variant="ghost"
                className={`relative left-[1rem] justify-start font-medium w-[90%] hover:bg-[#EDE7FF] cursor-pointer text-[14px] pl-2 
                    ${ index === 0 ? 'text-[#7A29FA]' : 'text-[#687181]'}`}>
                {subItem.title}
              </Button>
            </div>
          ))}
        </CollapsibleContent>
        </Collapsible>
      );
  };