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
      <h2
        className="text-center mb-3 font-medium leading-[130%] tracking-[0px] w-full max-w-169.25"
        style={{
          fontFamily: 'Geist, sans-serif',
          fontSize: 'clamp(28px, 5vw, 48px)',
        }}
      >
        <span className="text-[#1a1a2e]">Launch in 3 </span>
        <span className="text-[#9ba3c4]">streamlined steps</span>
      </h2>

      {/* Subtext */}
      <p
        className="text-center mb-8 font-normal leading-[140%] tracking-[0px]"
        style={{
          fontFamily: 'Geist, sans-serif',
          color: '#4a6bdc',
          fontSize: 'clamp(15px, 2.5vw, 18px)',
        }}
      >
        No coding required&nbsp;-&nbsp;No engineering costs
      </p>

      {/* Tabs */}
      <div className="flex mb-10 sm:mb-12 md:mb-16 rounded-full bg-white border border-[#e0e2ed] overflow-x-auto max-w-full">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`px-5 sm:px-7 md:px-9 py-3 sm:py-4 rounded-full transition-all border-none cursor-pointer whitespace-nowrap
              ${active === i
                ? 'bg-white text-[#1a1a2e] font-semibold shadow-md'
                : 'bg-transparent text-[#7b82a8] font-normal'
              }`}
            style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Big Card WITH bg2.png */}
      <div
        className="w-full max-w-265 rounded-2xl sm:rounded-3xl flex flex-col items-center pt-8 sm:pt-10 md:pt-14 pb-8 sm:pb-10 px-4 sm:px-6 md:px-8 min-h-125"
        style={{
          backgroundImage: "url('/bg2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Card Title */}
        <h3
          className="font-semibold text-white text-center leading-[1.2] mb-3"
          style={{ fontSize: 'clamp(22px, 4vw, 36px)' }}
        >
          Connect to all your knowledge<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          with 1-click integrations
        </h3>

        <p
          className="text-center text-white/85 mb-8 sm:mb-10 px-2"
          style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}
        >
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
            <div className="flex items-center justify-center gap-2 py-4 sm:py-4 ">
              {/* <img src="/Card_Logo.png" alt="" /> */}
              <Image src={Card_Logo} alt="Company logo" />
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
                  className="flex items-center gap-2.5 w-full h-12.75 rounded-lg
                  px-4 
                  bg-white/5
                  shadow-sm
                  border border-white/6
                  text-[#2a2a3a]
                  transition-all duration-200 ease-in-out cursor-pointer
                  hover:bg-white hover:text-[#1a1a2e]
                  hover:scale-[1.03]
                  hover:shadow-md
                  hover:mx-auto
                  hover:justify-center hover:gap-3"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="object-contain shrink-0"
                  />

                  <span className="text-[#5a6080]">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="pb-2" />
          </div>
        </div>
      </div>

      {/* See All Button */}
      <button
        className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium bg-white border border-[#d0d4e8] text-[#3a3a5a] cursor-pointer hover:bg-gray-50 transition-colors"
        style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}
      >
        See all 100+ integrations
      </button>

    </section>
  )
}