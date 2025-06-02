import HotelzLogo from '@/components/HotelzLogo'
import React from 'react'
import RightPanelComponent from './right-panel/RightPanelComponent'

const HeaderComponent = () => {
  return (
    <div className='flex w-full items-center bg-white border-b border-[#A6B4DA]'>
      <HotelzLogo />
      <div className='flex w-full justify-between items-center py-[16px] '>
        <div>User Company Logo</div>
        <RightPanelComponent />
      </div>
    </div>
  )
}

export default HeaderComponent
