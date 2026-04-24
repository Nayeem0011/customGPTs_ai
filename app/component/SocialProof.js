'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";
import company_logo from "../../public/company_logo.svg.svg";
import company_logo1 from "../../public/company_logo1.svg.svg";
import company_logo2 from "../../public/company_logo2.svg.svg";
import company_logo3 from "../../public/company_logo3.svg.svg";
import company_logo4 from "../../public/company_logo4.svg.svg";
import company_logo5 from "../../public/company_logo5.svg.svg";
import company_logo6 from "../../public/company_logo6.svg.svg";
import company_logo7 from "../../public/company_logo7.svg.svg";

const logos = [
  company_logo,
  company_logo1,
  company_logo2,
  company_logo3,
  company_logo4,
  company_logo5,
  company_logo6,
  company_logo7,
];

const SocialProof = () => {
  return (
    <section className="flex flex-col items-center gap-5 sm:gap-6 md:gap-8 lg:gap-10 mb-20 mt-0 md:mt-10 lg:mt-20">
      <div>
        <p className="text-[#42424F] font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] leading-[160%] tracking-[0em] text-center align-middle uppercase">
          Trusted by 10,000+ organizations worldwide
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6">
        <Marquee speed={50} gradient={true} gradientColor="#ffffff" gradientWidth={40} autoFill={true}>
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-5 lg:gap-6">

            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="w-px h-4 md:h-5 lg:h-6 bg-[#E5E5E5]" />
                <Image
                  src={logo}
                  alt="Company logo"
                  className="h-5.5 w-20.25 sm:h-6.5 sm:w-22.25 md:h-7.5 md:w-24.25 lg:h-8.5 lg:w-26.25 xl:h-9.5 xl:w-38.25 2xl:h-10.5 2xl:w-31.25 object-contain opacity-100 hover:opacity-80 transition cursor-pointer"
                />
              </div>
            ))}

            {/* last separator (optional same behavior) */}
            <div className="w-px h-4 md:h-5 lg:h-6 bg-[#E5E5E5]" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default SocialProof;
