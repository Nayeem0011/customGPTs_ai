// import React from 'react'

// import Image from "next/image";
// import card_logo1 from "../../public/card_logo1.png";
// import card_logo2 from "../../public/card_logo2.png";
// import card_logo3 from "../../public/card_logo3.png";
// import card_logo4 from "../../public/card_logo4.png";
// import card_logo5 from "../../public/card_logo5.png";
// import card_logo6 from "../../public/card_logo6.png";
// import card_logo7 from "../../public/card_logo7.png";
// import card_logo8 from "../../public/card_logo8.png";
// import card_logo9 from "../../public/card_logo9.png";
// import card_logo10 from "../../public/card_logo10.png";
// import card_logo11 from "../../public/card_logo11.png";
// import card_logo12 from "../../public/card_logo12.png";

// const HeroPage = () => {
//   return (
//     <section>
//       <div className=''>
//         <div className="flex flex-col items-center pt-24">
//           <p className="text-white uppercase text-center font-normal text-base leading-[140%] tracking-normal" style={{ fontFamily: 'Geist' }}>
//             #1 AI AGENT FOR BUSINESSES
//           </p>

//           <h1 className="text-[clamp(40px,7vw,80px)] leading-[1.1] text-white max-w-6xl mb-6">
//             <span className="font-bold">Create </span>

//             <span className="font-normal">CustomGPTs </span>
//             <span className="font-bold">from your business information</span>
//           </h1>

//           <p
//             className="font-normal text-white mb-8 text-center leading-[140%] tracking-[-0.7px]"
//             style={{ fontFamily: 'Geist', fontSize: '24px' }}
//           >
//             Launch in minutes with 100+ data sources and deployment options
//           </p>

//           <div className="flex items-center gap-4 mb-10 flex-wrap justify-center">
//             <div className="flex items-center gap-3 rounded-[10px] border border-white/20 px-4 py-3 text-white text-sm">
//               <img src="/icon.png" alt="check" className="w-4 h-4" />
//               Industry-leading accuracy
//             </div>
//             <div className="flex items-center gap-3 rounded-[10px] border border-white/20 px-4 py-3 text-white text-sm">
//               <img src="/icon_2.png" alt="shield" className="w-4 h-4" />
//               Zero data sharing & training
//             </div>
//           </div>

//           <div className="flex items-center gap-4 flex-wrap justify-center">
//             <button
//               className="rounded-xl px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
//               style={{
//                 background: 'radial-gradient(114.65% 114.65% at 9.73% 17.27%, #1E82E0 0%, #1C38EA 100%)',
//                 boxShadow: '4px 4px 4px 0px #131AE41A inset, -3px -3px 4px 0px #BFE5FB66 inset',
//               }}
//             >
//               Sign up free
//             </button>
//             <button
//               className="rounded-xl px-8 py-3.5 text-base font-semibold text-[#4A4A59] bg-white hover:bg-gray-50 transition-colors"
//               style={{ border: '1px solid rgba(203, 203, 203, 0.5)' }}
//             >
//               Chat with the AI
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom decorative card */}
//       <div className="relative w-fit mx-auto p-2 rounded-2xl bg-white/20 mt-10">
//         {/* Inner box */}
//         <div className="w-241.5 h-135.75 rounded-xl bg-white flex justify-between ">

//           {/* Left SVG shape */}
//           <div className='flex items-end justify-center'>
//             <svg width="223" height="477" viewBox="0 0 223 477" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M0 0C99.8755 0 183.465 75.7576 193.258 175.152L223 477H0V0Z" fill="url(#paint0_linear_1_155)" />
//               <defs>
//                 <linearGradient id="paint0_linear_1_155" x1="111.5" y1="0" x2="111.5" y2="477" gradientUnits="userSpaceOnUse">
//                   <stop stop-color="#E1F1FF" />
//                   <stop offset="1" stop-color="white" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>

//           {/* Floating logos container (all logos are absolutely positioned) */}
//           <div className=''>
//             {/* Small logo 1 */}
//             <div className='absolute top-26.5 left-60.5'>
//               <Image className='w-7.5 h-7.5 rounded-full' src={card_logo1} alt="loading ..." />
//             </div>

//             {/* Small logo 2 */}
//             <div className='absolute top-39 left-88.5'>
//               <Image className='w-7.5 h-7.5 rounded-full' src={card_logo2} alt="loading ..." />
//             </div>

//             {/* Medium logo (with gray background circle) */}
//             <div className='absolute top-18.75 left-113.25 rounded-full flex items-center justify-center w-15.25 h-15.25 bg-[#EEEEEE]'>
//               <Image className='w-13.25 h-13.25 rounded-full' src={card_logo3} alt="loading ..." />
//             </div>

//             {/* Small logo 4 */}
//             <div className='absolute top-39 left-143.5'>
//               <Image className='w-7.5 h-7.5  rounded-full' src={card_logo4} alt="loading ..." />
//             </div>

//             {/* Small logo 5 */}
//             <div className='absolute top-26.5 left-173.75'>
//               <Image className='w-7.5 h-7.5  rounded-full' src={card_logo5} alt="loading ..." />
//             </div>

//             {/* Medium logo (bottom right) */}
//             <div className='absolute w-15.25 h-15.25 top-60.25 left-154.75 flex items-center justify-center rounded-[200px] bg-[#EEEEEE]'>
//               <Image className='w-13.25 h-13.25 rounded-full' src={card_logo6} alt="loading ..." />
//             </div>

//             {/* Small logo 7 */}
//             <div className='absolute top-89.25 left-143.5'>
//               <Image className='w-7.5 h-7.5 rounded-full' src={card_logo7} alt="loading ..." />
//             </div>

//             {/* Small logo 8 */}
//             <div className='absolute top-102 left-173.75'>
//               <Image className='w-7.5 h-7.5 rounded-full' src={card_logo8} alt="loading ..." />
//             </div>

//             {/* Medium logo (bottom center) */}
//             <div className='absolute w-15.25 h-15.25 top-113.25 left-113.25 flex items-center justify-center rounded-[200px] bg-[#EEEEEE]'>
//               <Image className='w-13.25 h-13.25 rounded-full' src={card_logo9} alt="loading ..." />
//             </div>

//             {/* Small logo 10 */}
//             <div className='absolute top-102 left-60.5'>
//               <Image className='w-7.5 h-7.5 rounded-full' src={card_logo10} alt="loading ..." />
//             </div>

//             {/* Medium logo (bottom left) */}
//             <div className='absolute top-89.25 left-88.5'>
//               <Image className='w-7.5 h-7.5 rounded-full' src={card_logo11} alt="loading ..." />
//             </div>

//             {/* Center video (perfectly centered using absolute) */}
//             <div className='absolute w-15.25 h-15.25 top-60.25 left-71.75 flex items-center justify-center rounded-[200px] bg-[#EEEEEE]'>
//               <Image className='w-13.25 h-13.25 rounded-full' src={card_logo12} alt="loading ..." />
//             </div>
//           </div>

//           {/* Center content (video circle) */}
//           <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
//             {/* Circular container with gradient + shadow */}
//             <div className="w-42.75 h-42.75 rounded-[140px] bg-[radial-gradient(50%_50%_at_50%_50%,#BADAFF_0%,#FFFFFF_100%)] border-10 border-[#FFFFFF] shadow-[0px_4px_9px_0px_#2349EA29,0px_16px_16px_0px_#2349EA24,0px_36px_22px_0px_#2349EA14,0px_64px_26px_0px_#2349EA05,0px_100px_28px_0px_#2349EA00] overflow-hidden flex items-center justify-center pointer-events-auto">
//               {/* Video element inside circle */}
//               <video
//                 className="w-full h-full object-cover"
//                 autoPlay   // auto play video
//                 muted      // no sound
//                 loop       // repeat continuously
//                 playsInline // mobile friendly playback
//               >
//                 <source src="/video.mp4" type="video/mp4" />
//               </video>
//             </div>
//           </div>

//           {/* Right SVG shape (mirror of left) */}
//           <div className='flex items-end justify-center'>
//             <svg width="223" height="477" viewBox="0 0 223 477" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M223 0C123.124 0 39.5354 75.7576 29.7419 175.152L0 477H223V0Z" fill="url(#paint0_linear_1_154)" />
//               <defs>
//                 <linearGradient id="paint0_linear_1_154" x1="111.5" y1="0" x2="111.5" y2="477" gradientUnits="userSpaceOnUse">
//                   <stop stop-color="#E1F1FF" />
//                   <stop offset="1" stop-color="white" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroPage





import React from 'react'
import Image from "next/image";
import card_logo1 from "../../public/card_logo1.png";
import card_logo2 from "../../public/card_logo2.png";
import card_logo3 from "../../public/card_logo3.png";
import card_logo4 from "../../public/card_logo4.png";
import card_logo5 from "../../public/card_logo5.png";
import card_logo6 from "../../public/card_logo6.png";
import card_logo7 from "../../public/card_logo7.png";
import card_logo8 from "../../public/card_logo8.png";
import card_logo9 from "../../public/card_logo9.png";
import card_logo10 from "../../public/card_logo10.png";
import card_logo11 from "../../public/card_logo11.png";
import card_logo12 from "../../public/card_logo12.png";

const logos = [
  { src: card_logo1,  size: 'sm', top: '18%',  left: '22%'  },
  { src: card_logo2,  size: 'sm', top: '27%',  left: '34%'  },
  { src: card_logo3,  size: 'md', top: '12%',  left: '44%'  },
  { src: card_logo4,  size: 'sm', top: '27%',  left: '55%'  },
  { src: card_logo5,  size: 'sm', top: '18%',  left: '67%'  },
  { src: card_logo6,  size: 'md', top: '42%',  left: '60%'  },
  { src: card_logo7,  size: 'sm', top: '63%',  left: '55%'  },
  { src: card_logo8,  size: 'sm', top: '72%',  left: '67%'  },
  { src: card_logo9,  size: 'md', top: '80%',  left: '44%'  },
  { src: card_logo10, size: 'sm', top: '72%',  left: '22%'  },
  { src: card_logo11, size: 'sm', top: '63%',  left: '34%'  },
  { src: card_logo12, size: 'md', top: '42%',  left: '28%'  },
]

const HeroPage = () => {
  return (
    <section>
      <div className="flex flex-col items-center pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6">

        <p className="text-white uppercase text-center font-normal text-sm sm:text-base leading-[140%]" style={{ fontFamily: 'Geist' }}>
          #1 AI AGENT FOR BUSINESSES
        </p>

        <h1 className="text-[clamp(32px,6vw,80px)] leading-[1.1] text-white max-w-6xl mb-4 sm:mb-6 text-center px-2">
          <span className="font-bold">Create </span>
          <span className="font-normal">CustomGPTs </span>
          <span className="font-bold">from your business information</span>
        </h1>

        <p
          className="font-normal text-white mb-6 sm:mb-8 text-center leading-[140%] tracking-[-0.4px] text-[16px] sm:text-[20px] lg:text-[24px] max-w-2xl"
          style={{ fontFamily: 'Geist' }}
        >
          Launch in minutes with 100+ data sources and deployment options
        </p>

        <div className="flex items-center gap-3 mb-8 flex-wrap justify-center">
          <div className="flex items-center gap-2 sm:gap-3 rounded-[10px] border border-white/20 px-3 sm:px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm">
            <img src="/icon.png" alt="check" className="w-4 h-4" />
            Industry-leading accuracy
          </div>
          <div className="flex items-center gap-2 sm:gap-3 rounded-[10px] border border-white/20 px-3 sm:px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm">
            <img src="/icon_2.png" alt="shield" className="w-4 h-4" />
            Zero data sharing & training
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
          <button
            className="rounded-xl px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background: 'radial-gradient(114.65% 114.65% at 9.73% 17.27%, #1E82E0 0%, #1C38EA 100%)',
              boxShadow: '4px 4px 4px 0px #131AE41A inset, -3px -3px 4px 0px #BFE5FB66 inset',
            }}
          >
            Sign up free
          </button>
          <button
            className="rounded-xl px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-[#4A4A59] bg-white hover:bg-gray-50 transition-colors"
            style={{ border: '1px solid rgba(203,203,203,0.5)' }}
          >
            Chat with the AI
          </button>
        </div>
      </div>

      {/* Bottom decorative card */}
      <div className="relative w-full max-w-[966px] mx-auto p-2 rounded-2xl bg-white/20 mt-8 sm:mt-10 px-4 sm:px-2">
        <div className="relative w-full rounded-xl bg-white overflow-hidden" style={{ paddingBottom: '56%' }}>

          {/* Left SVG */}
          <div className="absolute bottom-0 left-0 h-[70%] sm:h-[80%] lg:h-full w-auto">
            <svg className="h-full w-auto" viewBox="0 0 223 477" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0C99.8755 0 183.465 75.7576 193.258 175.152L223 477H0V0Z" fill="url(#left-grad)" />
              <defs>
                <linearGradient id="left-grad" x1="111.5" y1="0" x2="111.5" y2="477" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E1F1FF" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right SVG */}
          <div className="absolute bottom-0 right-0 h-[70%] sm:h-[80%] lg:h-full w-auto">
            <svg className="h-full w-auto" viewBox="0 0 223 477" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M223 0C123.124 0 39.5354 75.7576 29.7419 175.152L0 477H223V0Z" fill="url(#right-grad)" />
              <defs>
                <linearGradient id="right-grad" x1="111.5" y1="0" x2="111.5" y2="477" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E1F1FF" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating logos — percentage-based positioning */}
          {logos.map((logo, i) => (
            <div
              key={i}
              className="absolute"
              style={{ top: logo.top, left: logo.left, transform: 'translate(-50%, -50%)' }}
            >
              {logo.size === 'md' ? (
                <div className="w-[5vw] max-w-[60px] min-w-[32px] h-[5vw] max-h-[60px] min-h-[32px] rounded-full bg-[#EEEEEE] flex items-center justify-center">
                  <Image
                    className="w-[80%] h-[80%] rounded-full object-contain"
                    src={logo.src}
                    alt=""
                  />
                </div>
              ) : (
                <Image
                  className="w-[3vw] max-w-[30px] min-w-[18px] h-[3vw] max-h-[30px] min-h-[18px] rounded-full object-contain"
                  src={logo.src}
                  alt=""
                />
              )}
            </div>
          ))}

          {/* Center video circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#BADAFF_0%,#FFFFFF_100%)] overflow-hidden flex items-center justify-center pointer-events-auto"
              style={{
                width: 'clamp(100px, 14vw, 171px)',
                height: 'clamp(100px, 14vw, 171px)',
                border: 'clamp(4px, 1vw, 10px) solid #FFFFFF',
                boxShadow: '0px 4px 9px 0px #2349EA29, 0px 16px 16px 0px #2349EA24, 0px 36px 22px 0px #2349EA14',
              }}
            >
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroPage