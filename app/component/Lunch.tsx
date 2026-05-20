'use client'
import { useState } from 'react'
import Image from "next/image";
import Card_Logo from "../../public/Card_Logo.png";
import Card_Btn1 from "../../public/Card_Btn1.png";
import Card_Btn2 from "../../public/Card_Btn2.png";
import Card_Btn3 from "../../public/Card_Btn3.png";
import Card_Btn4 from "../../public/Card_Btn4.png";
import Card_Btn5 from "../../public/Card_Btn5.png";

const tabs = ['Connect data', 'Customize', 'Deploy']

export default function LaunchSteps() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#eceef5]">
      {/* Heading */}
      <h2 className="text-center mb-2 sm:mb-2.75 md:mb-3 lg:mb-3.25 xl:mb-3.5 2xl:mb-3 text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] font-geist font-medium leading-[130%] tracking-[0px]">
        <span className="text-[#1a1a2e]">Launch in 3 </span>
        <span className="text-[#9ba3c4]">streamlined steps</span>
      </h2>
      {/* Subtext */}
      <p className="text-center text-[4a6bdc] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-3.5 sm:mb-3.75 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 font-geist font-normal leading-[140%] tracking-[0px]">
        No coding required&nbsp;-&nbsp;No engineering costs
      </p>
      {/* Tabs */}
      <div className="flex mb-6 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-12 2xl:mb-16 rounded-full bg-white border border-[#e0e2ed] overflow-x-auto max-w-full">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`px-3.75 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-9 py-2.75 sm:py-3 md:py-3.25 lg:py-3.5 xl:py-3.75 2xl:py-4 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] rounded-full transition-all border-none cursor-pointer whitespace-nowrap
              ${active === i
                ? 'bg-white text-[#1a1a2e] font-geist font-semibold shadow-md'
                : 'bg-transparent text-[#7b82a8] font-geist font-normal'
              }`}>
            {tab}
          </button>
        ))}
      </div>
      {/* Big Card WITH bg2.png */}
      <div className="w-full max-w-265 rounded-2xl sm:rounded-3xl flex flex-col items-center pt-8 sm:pt-10 md:pt-14 pb-8 sm:pb-10 px-4 sm:px-6 md:px-8 min-h-125"
        style={{
          backgroundImage: "url('/bg2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Card Title */}
        <h3 className="font-geist font-semibold text-white text-center text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[36px] leading-[1.2] mb-3" >
          Connect to all your knowledge<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          with 1-click integrations
        </h3>
        <p className="font-geist text-center text-white/85 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] mb-8 sm:mb-10 px-2" >
          Make your information accessible with 1400+ supported<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          file types and dozens of integrations
        </p>
        {/* App Window */}
        <div className="w-full max-w-110 rounded-xl sm:rounded-xl overflow-hidden">
          <div
            style={{
              backgroundImage: "url('/choto_bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* App Header */}
            <div className="flex items-center justify-center gap-2 py-2.75 sm:py-3 md:py-3.25 lg:py-3.5 xl:py-3.75 2xl:py-4">
              {/* <img src="/Card_Logo.png" alt="" /> */}
              <Image src={Card_Logo} alt="Company logo" className='w-24 md:w-26 lg:w-28 xl:w-30 2xl:w-34'/>
            </div>
            {/* Menu Items */}
            <div className="flex flex-col gap-2 p-4">
              {[
                { label: 'New Agent', icon: Card_Btn1 },
                { label: 'Dashboard', icon: Card_Btn2 },
                { label: 'Agents', icon: Card_Btn3 },
                { label: 'Resources', icon: Card_Btn4 },
                { label: 'Slack Community', icon: Card_Btn5 },
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-2.5 w-full h-9 sm:h-10 md:h-11 lg:h-12.5 rounded-lg px-4 bg-white/5 shadow-sm border border-white/6 text-[#2a2a3a] transition-all duration-200 ease-in-out cursor-pointer hover:bg-white hover:text-[#1a1a2e] hover:scale-[1.03] hover:shadow-md hover:mx-auto hover:justify-center hover:gap-3">
                  <Image src={item.icon} alt={item.label} className="w-3 sm:w-3.25 md:w-3.5 lg:w-3.75 xl:w-4 2xl:w-5 h-3 sm:h-3.25 md:h-3.5 lg:h-3.75 xl:h-4 2xl:h-5 object-contain shrink-0" />
                  <span className="font-geist text-[#5a6080] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">{item.label}</span>
                </button>
              ))}
            </div>
            <div className="pb-2" />
          </div>
        </div>
      </div>
      {/* See All Button */}
      <button className="font-geist mt-6 sm:mt-8 px-3.5 sm:px-3.75 md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-2.5 sm:py-2.75 md:py-3 lg:py-3.25 xl:py-3.5 2xl:py-3 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] rounded-full font-medium bg-white border border-[#d0d4e8] text-[#3a3a5a] cursor-pointer hover:bg-gray-50 transition-colors">
        See all 100+ integrations
      </button>

    </section>
  )
}