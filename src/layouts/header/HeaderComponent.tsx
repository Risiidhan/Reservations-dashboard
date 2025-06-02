import HotelzLogo from '@/components/HotelzLogo'
import React from 'react'
import RightPanelComponent from './right-panel/RightPanelComponent'

const HeaderComponent = () => {
  return (
    <div className='flex h-[70px] w-full items-center bg-white border-b border-[#A6B4DA]'>
      <div className=' w-[20%] h-full border-r border-[#A6B4DA]'>
      <HotelzLogo />
      </div>
      <div className='flex w-full flex-1 justify-between items-center py-[16px] '>
        <div>User Company Logo</div>
        <RightPanelComponent />
      </div>
    </div>
  )
}

export default HeaderComponent
