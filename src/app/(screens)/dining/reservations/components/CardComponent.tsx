import SvgIcon from '@/components/SvgIcon'
import React from 'react'

const CardComponent = () => {
  return (
    <div className='flex gap-[16px] bg-white py-[12px] px-[8px] justify-center items-center'>
        <div className='bg-amber-300 aspect-square w-[46px] h-auto flex items-center justify-center rounded-[7px]'>
            <SvgIcon name='reservation' width={20} height={27} />
        </div>
        <div className='flex flex-col'>
            <div className='text-[15px] text-[#6B7280]'>Total reservation</div>
            <div className='flex gap-[8px] items-baseline'>
                <div className='font-[600] text-[#111827] text-[30px] leading-[30px]'>124</div>
                <div className='font-[600] text-[15px]'>12%</div>
            </div>
        </div>
    </div>
  )
}

export default CardComponent