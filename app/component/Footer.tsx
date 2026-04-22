
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
    <footer className="bg-[#eef0f7] px-4 sm:px-8 md:px-16 py-8 flex flex-col">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-24 w-full max-w-[1200px] mx-auto">

        {/* Left Side */}
        <div className="flex flex-col gap-32 md:min-w-[180px] md:max-w-[200px]">
          <img src="/Logo_2.png" alt="Logo" className="h-7 w-auto " />

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5 flex-wrap">
              {["/Logo2.png", "/Logo.png", "/Logo_3.png", "/Logo_4.png"].map((src, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>

            <p className="text-[11px] text-blue-500">GDPR & SOC2 Compliant</p>

            <div className="flex items-center gap-4">
              <img src="/Tweiter.png" alt="Twitter" className="w-4 h-4" />
              <img src="/Insta.png" alt="Instagram" className="w-4 h-4" />
              <img src="/Fi.png" alt="Fi" className="w-4 h-4" />
              <img src="/Github.png" alt="Github" className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Links — Desktop */}
<div className="hidden md:flex flex-1 justify-between">
  {footerLinks.map((col, index) => (
    <div key={index} className="flex flex-col gap-2 w-fit">
      <p
        className="text-[#4A4A59] whitespace-nowrap"
        style={{
          fontFamily: 'Geist',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          verticalAlign: 'middle',  // ✅ যোগ হলো
          height: '16px',           // ✅ যোগ হলো
        }}
      >
        {col.title}
      </p>
      {col.links.map((link, i) => (
        <a key={i} href="#"
          className="text-[#8B929E] hover:text-[#4A4A59] whitespace-nowrap"
          style={{
            fontFamily: 'Geist',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            letterSpacing: '-0.4px',
          }}
        >
          {link}
        </a>
      ))}
    </div>
  ))}
</div>
        {/* Links — Mobile Accordion */}
        <div className="flex flex-col md:hidden divide-y divide-gray-200">
          {footerLinks.map((col, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-2.5 text-left"
              >
                <span className="font-['Geist'] font-medium text-[14px] text-[#4A4A59]">
                  {col.title}
                </span>
                <span className="text-[#8B929E] text-base leading-none">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="flex flex-col gap-1.5 pb-2.5 pl-1">
                  {col.links.map((link, i) => (
                  <a key={i} href="#"
  className="font-['Geist'] font-normal text-[16px] leading-[150%] text-[#8B929E] hover:text-[#4A4A59]"
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
      <div className="mt-6 pt-4 border-t border-gray-300 text-center max-w-[1200px] mx-auto w-full">
        <p className="text-[12px] text-gray-500">
          © Copyright 2025 – CustomGPT.ai – All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer