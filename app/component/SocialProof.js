// 'use client';

// import Marquee from "react-fast-marquee";

// import Image from "next/image";
// import company_logo from "../../public/company_logo.svg.svg";
// import company_logo1 from "../../public/company_logo1.svg.svg";
// import company_logo2 from "../../public/company_logo2.svg.svg";
// import company_logo3 from "../../public/company_logo3.svg.svg";
// import company_logo4 from "../../public/company_logo4.svg.svg";
// import company_logo5 from "../../public/company_logo5.svg.svg";
// import company_logo6 from "../../public/company_logo6.svg.svg";
// import company_logo7 from "../../public/company_logo7.svg.svg";

// const logos = [
//   company_logo,
//   company_logo1,
//   company_logo2,
//   company_logo3,
//   company_logo4,
//   company_logo5,
//   company_logo6,
//   company_logo7,
// ];

// const SocialProof = () => {
//   return (
//     <section className="flex flex-col items-center gap-10 mb-20">
//       <div>
//         <p className="text-[#42424F] font-['Geist'] font-medium text-[20px] leading-[160%] tracking-[0em] text-center align-middle uppercase">
//           Trusted by 10,000+ organizations worldwide
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto w-full px-6">
//         <Marquee speed={50} gradient={false} autoFill={false}>
//           <div className="flex items-center justify-center gap-6">
//             {logos.map((logo, index) => (
//               <div key={index} className="flex items-center gap-6">
//                 <div className="w-px h-6 bg-[#E5E5E5]" />
//                 <Image
//                   src={logo}
//                   alt="Company logo"
//                   className="h-10.5 w-31.25 object-contain opacity-100 hover:opacity-80 transition cursor-pointer"
//                 />
//               </div>
//             ))}

//             {/* last separator (optional same behavior) */}
//             <div className="w-px h-6 bg-[#E5E5E5]" />
//           </div>
//         </Marquee>
//       </div>
//     </section>
//   );
// };

// export default SocialProof;




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
    <section className="flex flex-col items-center gap-6 sm:gap-10 mb-12 lg:mb-20 px-0">
      <div className="px-4">
        <p className="text-[#42424F] font-['Geist'] font-medium text-[14px] sm:text-[17px] lg:text-[20px] leading-[160%] text-center uppercase">
          Trusted by 10,000+ organizations worldwide
        </p>
      </div>

      <div className="w-full">
        <Marquee speed={40} gradient={true} gradientColor="#ffffff" gradientWidth={40} autoFill={true}>
          <div className="flex items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center">
                <div className="w-px h-5 sm:h-6 bg-[#E5E5E5] mx-4 sm:mx-6" />
                <Image
                  src={logo}
                  alt="Company logo"
                  className="h-7 sm:h-9 lg:h-10 w-auto object-contain opacity-100 hover:opacity-70 transition cursor-pointer"
                />
              </div>
            ))}
            <div className="w-px h-5 sm:h-6 bg-[#E5E5E5] mx-4 sm:mx-6" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default SocialProof;