import React from 'react'

import Image from "next/image";
import heroimage from "../../public/Frame 1707480634.png";
import icon from "../../public/Icon.png";
import icon2 from "../../public/Icon_2.png";

const HeroPage = () => {
  return (
    <section>
      <div className="flex flex-col items-center pt-1 sm:pt-8 md:pt-12 lg:pt-18">
        <p className="text-white font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] tracking-[0px] text-center align-middle uppercase">
          #1 AI AGENT FOR BUSINESSES
        </p>

        <h1 className="text-white font-semibold text-[44px] sm:text-[56px] md:text-[62px] lg:text-[70px] xl:text-[75px] 2xl:text-[80px] leading-[110%] tracking-[-1px] text-center align-middle mt-1 md:mt-2 mb-4 md:mb-5 lg:mb-6">
          <span className="font-bold">Create </span>
          <span className="font-normal">CustomGPTs </span>
          <span className="font-bold">from your <br className='lg:block hidden' /> business information</span>
        </h1>

        <p className="text-white mb-5 sm:mb-6 md:mb-7 lg:mb-8 font-normal text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[140%] tracking-[-0.7px] text-center align-middle">
          Launch in minutes with 100+ data sources and deployment options
        </p>

        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mb-6 sm:mb-7 md:mb-8 lg:mb-10 flex-wrap justify-center">
          <div className="flex items-center gap-1 md:gap-3 lg:gap-3 rounded-[10px] border border-white/20 px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 font-medium leading-[120%] align-middle text-white text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
            <Image src={icon} alt="check" className="w-3 h-3 md:w-4 md:h-4" />
            Industry-leading accuracy
          </div>
          <div className="flex items-center gap-1 md:gap-3 lg:gap-3 rounded-[10px] border border-white/20 px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 font-medium leading-[120%] align-middle text-white text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
            <Image src={icon2} alt="shield" className="w-3 h-3 md:w-4 md:h-4" />
            Zero data sharing & training
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 flex-wrap justify-center">
          <button
            className="rounded-lg md:rounded-xl px-3 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 lg:px-8 lg:py-3.5 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background: 'radial-gradient(114.65% 114.65% at 9.73% 17.27%, #1E82E0 0%, #1C38EA 100%)',
              boxShadow: '4px 4px 4px 0px #131AE41A inset, -3px -3px 4px 0px #BFE5FB66 inset',
            }}
          >
            Sign up free
          </button>
          <button
            className="rounded-lg md:rounded-xl px-3 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 lg:px-8 lg:py-3.5 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-[#4A4A59] bg-white hover:bg-gray-50 transition-colors"
            style={{ border: '1px solid rgba(203, 203, 203, 0.5)' }}
          >
            Chat with the AI
          </button>
        </div>
      </div>

      {/* Bottom decorative card */}
      <div className="relative w-fit mx-auto mt-10 px-3">
        <Image src={heroimage} alt="heroimage" className="" />
      </div>
    </section>
  )
}

export default HeroPage

