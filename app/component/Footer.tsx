'use client'

import React, { useState } from 'react'

const footerLinks = [
  { title: "Product", links: ["Customer Intelligence", "Custom Deep Research", "Enterprise"] },
  { title: "Use cases", links: ["Onboarding & Training", "Engagement Analytics", "Competitive Analysis", "Customer Service"] },
  { title: "Company", links: ["About Us", "Testimonials", "Partner Directory", "Solution Partner Program", "Contact Us"] },
  { title: "Resources", links: ["Blog", "FAQs", "Case Studies", "Security & Trust", "Documentation"] },
  { title: "Dev Resources", links: ["RAG API", "SDK", "OpenAI", "Compatibility", "MCP Server", "Dev StarterKit", "Integrations", "How it works"] },
]

const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <footer className="bg-[#eef0f7] px-6 sm:px-8 md:px-9 lg:px-10 xl:px-12 2xl:px-16 py-3.5 sm:py-3.75 md:py-4 lg:py-5 xl:py-6 2xl:py-8 flex flex-col">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8 sm:gap-9 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 w-full max-w-300 mx-auto">
        {/* Left Side */}
        <div className="flex flex-col gap-9 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32 md:min-w-45 md:max-w-50">
          <img src="/Logo_2.png" alt="Logo" className="w-[134px] h-auto " />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-3.75 xl:gap-4 2xl:gap-5 flex-wrap">
              {["/Logo2.png", "/Logo.png", "/Logo_3.png", "/Logo_4.png"].map((src, i) => (
                <div key={i} className="w-3.75 md:w-4 lg:w-5 xl:w-6 2xl:w-8 h-3.75 md:h-4 lg:h-5 xl:h-6 2xl:h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-blue-500">GDPR & SOC2 Compliant</p>
            <div className="flex items-center gap-2.75 sm:gap-3 md:gap-3.25 lg:gap-3.5 xl:gap-3.75 2xl:gap-4">
              <img src="/Tweiter.png" alt="Twitter" className="w-2.75 sm:w-3 md:w-3.25 lg:w-3.5 xl:w-3.75 2xl:w-4 h-2.75 sm:h-3 md:h-3.25 lg:h-3.5 xl:h-3.75 2xl:h-4" />
              <img src="/Insta.png" alt="Instagram" className="w-2.75 sm:w-3 md:w-3.25 lg:w-3.5 xl:w-3.75 2xl:w-4 h-2.75 sm:h-3 md:h-3.25 lg:h-3.5 xl:h-3.75 2xl:h-4" />
              <img src="/Fi.png" alt="Fi" className="w-2.75 sm:w-3 md:w-3.25 lg:w-3.5 xl:w-3.75 2xl:w-4 h-2.75 sm:h-3 md:h-3.25 lg:h-3.5 xl:h-3.75 2xl:h-4" />
              <img src="/Github.png" alt="Github" className="w-2.75 sm:w-3 md:w-3.25 lg:w-3.5 xl:w-3.75 2xl:w-4 h-2.75 sm:h-3 md:h-3.25 lg:h-3.5 xl:h-3.75 2xl:h-4" />
            </div>
          </div>
        </div>
        {/* Links — Desktop */}
        <div className="hidden sm:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 sm:gap-9 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-24">
          {footerLinks.map((col, index) => (
            <div key={index} className="flex flex-col gap-2 w-fit">
              <p
                className="text-[#4A4A59] font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] whitespace-nowrap">
                {col.title}
              </p>
              {col.links.map((link, i) => (
                <a key={i} href="#" className="text-[#8B929E] font-normal text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[150%] hover:text-[#4A4A59] whitespace-nowrap">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        
        {/* Links — Mobile Accordion */}
        <div className="flex flex-col sm:hidden divide-y divide-gray-200">
          {footerLinks.map((col, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-2.5 text-left"
              >
                <span className="font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#4A4A59]">
                  {col.title}
                </span>
                <span className="text-[#8B929E] text-base leading-none">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="flex flex-col pb-2.5 pl-1">
                  {col.links.map((link, i) => (
                    <a key={i} href="#"
                      className="font-normal text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[150%] text-[#8B929E] hover:text-[#4A4A59]"
                      style={{
                        letterSpacing: '-0.4px',
                        verticalAlign: 'middle',
                        height: '24px',
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 pt-4 border-t border-gray-300 text-center max-w-300 mx-auto w-full">
        <p className="text-[12px] text-gray-500">
          © Copyright 2025 – CustomGPT.ai – All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer