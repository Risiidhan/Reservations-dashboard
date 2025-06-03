  'use client';

  import React from 'react';
  import { Sidebar, useSidebar } from '@/components/ui/sidebar';
  import "./styles.css"
  import { renderMenu, sidebarContent } from './content';

  export const SidemenuComponent: React.FC = () => {
   const { open } = useSidebar();

  return (
    
   <div className={`relative transition-all duration-300 ${open ? "tablet:sidebar-width" : "w-0"}`}>
      <Sidebar className={`bg-white sidebar-position sidebar-width  border-r border-[#A6B4DA] p-4`}>
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

