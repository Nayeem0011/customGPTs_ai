
import React from 'react'

const footerLinks = [
  { title: "Product", links: ["Customer Intelligence", "Custom Deep Research", "Enterprise"] },
  { title: "Use cases", links: ["Onboarding & Training", "Engagement Analytics", "Competitive Analysis", "Customer Service"] },
  { title: "Company", links: ["About Us", "Testimonials", "Partner Directory", "Solution Partner Program", "Contact Us"] },
  { title: "Resources", links: ["Blog", "FAQs", "Case Studies", "Security & Trust", "Documentation"] },
  { title: "Dev Resources", links: ["RAG API", "SDK", "OpenAI", "Compatibility", "MCP Server", "Dev StarterKit", "Integrations", "How it works"] },
]

const Footer = () => {
  return (
    <footer className="bg-[#eef0f7] px-16 py-12 flex flex-col">

      {/* Top Section */}
      <div className="flex justify-center">
        <div className="flex gap-16">

          {/* Left Side */}
          <div className="flex flex-col gap-6 min-w-[200px]">

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">G</div>
              <span className="font-semibold text-[15px] text-gray-800">CustomGPT.ai</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-[8px] font-bold text-center text-gray-600 leading-tight p-1">AICPA SOC</div>
              <div className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-[8px] font-bold text-center text-gray-600 leading-tight p-1">SOC2</div>
              <div className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-[8px] font-bold text-center text-blue-600 leading-tight p-1">GDPR</div>
              <div className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-[8px] font-bold text-center text-gray-600 leading-tight p-1">ISO</div>
            </div>

            <p className="text-[12px] text-blue-500 -mt-4">GDPR & SOC2 Compliant</p>

            <div className="flex items-center gap-4">
              {/* Icons same as before */}
              <a href="#" className="text-gray-600 hover:text-gray-900">X</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">IG</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">DC</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">GH</a>
            </div>

          </div>

          {/* Links Section */}
          <div className="flex gap-12 flex-1">
            {footerLinks.map((col, index) => (
              <div key={index} className="flex flex-col gap-3">
                <p className="text-[14px] font-semibold text-gray-800 mb-1">{col.title}</p>
                {col.links.map((link, i) => (
                  <a key={i} href="#" className="text-[13px] text-gray-500 hover:text-gray-800 whitespace-nowrap">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 pt-6 border-t border-gray-300 text-center">
        <p className="text-[13px] text-gray-500">
          © Copyright 2025 – CustomGPT.ai – All Rights Reserved
        </p>
      </div>

    </footer>
  )
}

export default Footer