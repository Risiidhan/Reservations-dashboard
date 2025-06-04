"use client";

import React from 'react'
import SidemenuCollapseIcon from './svg/SidemenuCollapseIcon'
import { useSidebar } from '@/components/ui/sidebar';

const CollapseSideMenu: React.FC = () => {
   const { open, setOpen } = useSidebar();

  return (
         <div className="sidebar-toggle hover:scale-105 transition-all duration-300"
            onClick={() => setOpen(!open)} >
          <div className={`${open? "" : "scale-x-[-1]"} transition-normal duration-300`}>
        <SidemenuCollapseIcon />
          </div>
      </div>
  )
}

export default CollapseSideMenu