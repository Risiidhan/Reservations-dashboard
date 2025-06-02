import HotelzLogo from '@/components/HotelzLogo'
import React from 'react'
import RightPanelComponent from './right-panel/RightPanelComponent'

const HeaderComponent = () => {
  return (
    <div className='flex h-[70px] w-full items-center bg-white border-b border-[#A6B4DA]'>
      <div className='sidebar-width h-full border-r border-[#A6B4DA] px-4'>
      <HotelzLogo />
      </div>
      <div className='flex w-full flex-1 justify-between items-center py-[16px] px-4'>
        <div>User Company Logo</div>
        <RightPanelComponent />
      </div>
    </div>
  )
}

export default HeaderComponent
