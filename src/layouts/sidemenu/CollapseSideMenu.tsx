"use client";

import React from 'react'
import { useSidebar } from '@/components/ui/sidebar';
import SvgIcon from '@/components/SvgIcon';

const CollapseSideMenu: React.FC = () => {
   const { open, setOpen } = useSidebar();

  return (
         <div className="sidebar-toggle hover:scale-105 transition-all duration-300"
            onClick={() => setOpen(!open)} >
          <div className={`${open? "" : "scale-x-[-1]"} transition-normal duration-300`}>
        <SvgIcon name='collapseIcon' width={18} height={18}/>
          </div>
      </div>
  )
}

export default CollapseSideMenu