"use client";

import React from 'react'
import SidemenuCollapseIcon from './svg/SidemenuCollapseIcon'
import { useSidebar } from '@/components/ui/sidebar';

const CollapseSideMenu = () => {
   const { open, setOpen } = useSidebar();

  return (
         <div className="sidebar-toggle"
        onClick={() => setOpen(!open)} >
          <div className={`${open? "" : "scale-x-[-1]"} transition-normal duration-300`}>
        <SidemenuCollapseIcon />
          </div>
      </div>
  )
}

export default CollapseSideMenu