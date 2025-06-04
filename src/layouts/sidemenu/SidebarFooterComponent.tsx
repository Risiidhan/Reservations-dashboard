import React from 'react';
import Image from 'next/image';
import QuickStartIconSvg from './svg/QuickStartIconSvg';
import HelpIconSvg from './svg/HelpIconSvg';


type FooterItem = {
  title: string;
  icon: React.ReactNode;
  redirectTo: string;
};

const footerData: FooterItem[] = [
  { title: 'Quickstart', icon: <QuickStartIconSvg />, redirectTo: '/' },
  { title: 'Help', icon: <HelpIconSvg />, redirectTo: '/' },
];

const SidebarFooterComponent = () => {
  return (
     <div className="w-full bg-[#1A1D49] rounded-t-[20px] p-[24px] flex flex-col gap-[20px]">
           
            <div className="flex items-center gap-[8px] 
            px-[6px] py-[12px] 
            border border-[#FFFFFF5E] rounded-[10px]
            hover:bg-white transition-all duration-300 cursor-pointer group/footer ">
              <div className="relative rounded-full overflow-hidden h-[40px] w-[40px]">
                <Image
                  src="/image/dummy-profile-img.png"
                  alt="profile-pic"
                  fill
                  sizes="100%"
                  className="object-cover h-full"
                />
              </div>
              <div className="flex flex-col text-white group-hover/footer:text-[#1A1D49]">
                <div className="text-[14.5px] leading-[12px]">Marice Cervantes</div>
                <div className="text-[12px]">marice@gmail.com</div>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              {footerData.map((item, index) => (
                <div key={index} className="flex items-center gap-[10px]
                hover:underline transition-all duration-300 cursor-pointer
                text-white ">
                  {item.icon}
                  {item.title}
                </div>
              ))}
            </div>
          </div>
  )
}

export default SidebarFooterComponent