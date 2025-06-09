import React from 'react'
import "../style.css"
import { AnalyticCardComponentType } from '@/types/AnalyticCardTypes'


const AnalyticCardComponent: React.FC<AnalyticCardComponentType> = ({heading, value, icon, footerTitle, footerIcon, bottomBorder}) => {
  return (
    <div style={{borderBottom: `4px solid ${bottomBorder}`}} className='analytic-card'>
        <div className="flex justify-between w-full">
            <div className='flex flex-col'>
                <div className='text-[15px]'>{heading}</div>
                <div className='text-[42px] font-[600] leading-[40px]'>{value}</div>
            </div>
            {icon}
        </div>

        <div className='flex items-center justify-between w-full'>
            <div className='text-[13px]'>{footerTitle}</div>
            {footerIcon}
        </div>
    </div>
  )
}

export default AnalyticCardComponent