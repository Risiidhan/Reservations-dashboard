  'use client';

  import React from 'react';
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from '@/components/ui/collapsible';
  import { Button } from '@/components/ui/button';
  import { ChevronRight } from 'lucide-react';
  import DashboardIconSvg from './svg/DashboardIconSvg';
  import DiningIconSvg from './svg/DiningIconSvg';
  import { Sidebar, useSidebar } from '@/components/ui/sidebar';
  import "./styles.css"

  const sidebarContent: SidebarSection[] = [
    {
      title: 'Overview',
      menu: {
          title: 'Dashboard',
          redirectTo: '/',
          icon: <DashboardIconSvg />
      },
    },
    {
      title: 'Booking & Reservation',
      menu: {
          title: 'Dining',
          redirectTo: '/',
          icon: <DiningIconSvg />,
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


  const renderMenu = (menu: SidebarMenu) => {
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
              <div className="flex items-center text-[#525D6F] font-medium gap-2">
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


  export const SidemenuComponent: React.FC = () => {
   const { open } = useSidebar();

  return (
   <div className={`relative transition-all duration-300 ${open ? "sidebar-width" : "w-0"}`}>
      <Sidebar className={`bg-white h-[calc(100%-70px)] sidebar-width top-[70px] border-r border-[#A6B4DA] p-4`}>
        <nav className="space-y-4 bg-white">
          {sidebarContent.map((item, index) => (
            <div key={index} className="border-b border-[#A6B4DA] pb-4">
              <p className="text-[15.25px] pl-[16px] font-bold text-[#53637C] mb-4 uppercase">
                {item.title}
              </p>
              {renderMenu(item.menu)}
            </div>
          ))}
        </nav>
      </Sidebar>
    </div>
  );
  };

