'use client';

import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const sidebarContent = [
  {
    title: 'Overview',
    menu: {
      title: 'Dashboard',
    },
  },
  {
    title: 'Booking & Reservation',
    menu: {
      title: 'Dining',
      submenu: [
        { title: 'Reservations Overview' },
        { title: 'Table & Capacity' },
        { title: 'Floor Plan' },
        { title: 'Block dates & times' },
        { title: 'Manage restaurant' },

      ],
    },
  },
];

const renderMenu = (menu: { title: string; submenu?: { title: string }[] }) => {
  if ('submenu' in menu) {
    return (
      <Collapsible>
       <CollapsibleTrigger className='cursor-pointer' asChild>
        <Button variant="ghost"
            className="group w-full hover:bg-[#EDE7FF] justify-between text-[15px] font-normal">
            {menu.title}
            <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
        </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 space-y-1 mt-2">
          {menu.submenu?.map((subItem, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start cursor-pointer font-normal hover:bg-[#EDE7FF] text-[14px]"
            >
              {subItem.title}
            </Button>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Button variant="ghost"
      className="w-full hover:bg-[#EDE7FF] cursor-pointer justify-start text-[15px] font-normal">
      {menu.title}
    </Button>
  );
};


export const SidemenuComponent = () => {
  return (
    <aside className="sidebar-width bg-white border-r border-[#A6B4DA] p-4">
      <nav className="space-y-4">
        {sidebarContent.map((item, index) => (
          <div key={index} className="border-b border-[#A6B4DA] pb-4">
            <p className="text-sm font-medium text-gray-700 mb-2 capitalize">
              {item.title}
            </p>
           {renderMenu(item.menu)}
          </div>
        ))}
      </nav>
    </aside>
  );
};

