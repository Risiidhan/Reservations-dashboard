import HotelzLogo from '@/components/HotelzLogo'
import React from 'react'
import RightPanelComponent from './right-panel/RightPanelComponent'
import CollapseSideMenu from '../sidemenu/CollapseSideMenu'

const HeaderComponent : React.FC = () => {
  return (
    <div className='flex header-height w-full items-center bg-white border-b border-[#A6B4DA]'>
      <div className='sidebar-width relative h-full flex justify-center items-center border-r border-[#A6B4DA] px-4'>
      <HotelzLogo />
      <div className='hidden tablet:flex'><CollapseSideMenu /></div>
      </div>
      <div className='flex w-full flex-1 justify-between items-center main-content-padding'>
        <div>User Company Logo</div>
        <div><RightPanelComponent /></div>
      </div>
    </div>
  )
}

export default HeaderComponent
