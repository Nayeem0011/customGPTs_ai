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
    <footer className="bg-[#eef0f7] px-16 py-12 flex flex-col"
    >

      {/* Top Section */}
      <div className="flex justify-center">
        <div className="flex gap-16">

          {/* Left Side */}
          <div className="flex flex-col justify-between min-w-[200px]">

            {/* Top part — শুধু logo */}
            <div className="flex items-center gap-2">
              <img src="/Logo_2.png" alt="" />
            </div>

            {/* Bottom part — text + badges + social */}
            <div className="flex flex-col gap-4 pt-6">



              {/* Badges */}
              <div className="flex items-center gap-4 ">
                {[
                  { label: "", src: "/Logo2.png" },
                  { label: "", src: "/Logo.png" },
                  { label: "", src: "/Logo_3.png" },
                  { label: "", src: "/Logo_4.png" },
                ].map(({ label, src }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <img src={src} alt={label} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] text-gray-500">{label}</span>
                  </div>
                ))}
              </div>

              <p className="text-[12px] text-blue-500">GDPR & SOC2 Compliant</p>

              {/* Social Icons */}
              <div className="flex items-center gap-6 mt-6">
                <img src="/Tweiter.png" alt="" />
                <img src="/Insta.png" alt="" />
                <img src="/Fi.png" alt="" />
                <img src="/Github.png" alt="" />
              </div>
            </div>
          </div>
          {/* Links Section */}
          <div className="flex gap-16 flex-1">
            {footerLinks.map((col, index) => (
              <div key={index} className="flex flex-col gap-3">
                <p className="font-['Geist'] font-medium text-[16px] leading-none tracking-normal text-[#4A4A59]">
                  {col.title}
                </p>
                {col.links.map((link, i) => (
                  <a key={i}
                    href="#"
                    className="font-['Geist'] font-normal text-[16px] leading-[150%] tracking-[-0.4px] text-[#8B929E] hover:text-[#4A4A59] whitespace-nowrap"
                  >
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