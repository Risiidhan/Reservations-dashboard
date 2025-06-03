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
      className="w-full justify-start text-[15px] font-normal hover:bg-[#EDE7FF]"
    >
      <div className="flex items-center gap-2">
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
            <div className="flex items-center gap-2">
              {menu.icon}
              {menu.title}
            </div>
            <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 space-y-1 mt-2">
          {menu.submenu.map((subItem, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start font-normal text-[14px]"
            >
              {subItem.title}
            </Button>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
};


export const SidemenuComponent = () => {
  return (
    <aside className="sidebar-width bg-white border-r border-[#A6B4DA] p-4">
      <nav className="space-y-4">
        {sidebarContent.map((item, index) => (
          <div key={index} className="border-b border-[#A6B4DA] pb-4">
            <p className="text-sm font-medium text-gray-700 mb-2 uppercase">
              {item.title}
            </p>
           {renderMenu(item.menu)}
          </div>
        ))}
      </nav>
    </aside>
  );
};

