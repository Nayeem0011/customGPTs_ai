// "use client";
// import { useState } from "react";
// import { testimonialData } from "../data/testimonialData";
// import Image from "next/image";
// import TvIcon from "./svg/TvIcon";

// const Testimonial = () => {

//   const [index, setIndex] = useState(0);
//   const data = testimonialData;

//   // ✅ Infinite Next
//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % data.length);
//   };

//   // ✅ Infinite Prev
//   const prevSlide = () => {
//     setIndex((prev) => (prev - 1 + data.length) % data.length);
//   };

//   // ✅ Dynamic translate calculation
//   const getTranslateX = () => {
//     let total = 0;

//     for (let i = 0; i < index; i++) {
//       total += i === index ? 470 : 230;
//       total += 24; // gap-6 = 24px
//     }

//     return total;
//   };

//   return (
//     <section className="bg-[#f5f6f8] py-20 px-6">
//       <div className="max-w-7xl mx-auto">

//         <h2 className="px-6 text-[#4A4A59] font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] leading-[130%]">
//           See what our customers are saying <br className='lg:block hidden' />
//           <span className="text-[#9898A7]">about Custom GPTs</span>
//         </h2>

//         {/* Slider */}
//         <div className="px-6 mt-12 overflow-hidden">
//           <div
//             className="flex gap-6 transition-transform duration-500"
//             style={{
//               transform: `translateX(-${getTranslateX()}px)`,
//             }}
//           >
//             {data.map((item, i) => {
//               const isActive = i === index;

//               return (
//                 <div
//                   key={i}
//                   className={`rounded-2xl overflow-hidden relative shrink-0`}
//                   // style={{
//                   //   width: isActive ? 470 : 230,
//                   //   height: 435,
//                   // }}
//                 >

//                   {isActive ? (
//                     <div className="w-75 h-75 md:w-80 md:h-80 lg:w-86 lg:h-86 xl:w-92 xl:h-92 2xl:w-117.5 2xl:h-108.75 transition-all duration-500 bg-[radial-gradient(120.74%_124.92%_at_7.26%_100%,#326DE4_0%,#628FFD_100%)] text-white p-5 sm:p-6  md:p-7  lg:p-8 flex flex-col">
//                       <TvIcon />
//                       <p className="font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-[160%] tracking-[0em] align-middle mt-5 sm:mt-6 md:mt-7 lg:mt-8">{item.text}</p>
//                       <div className="flex items-center gap-4 mt-10 lg:mt-14 xl:mt-18 2xl:mt-30">
//                         <Image
//                           src={item.img}
//                           alt={item.name}
//                           width={40}
//                           height={40}
//                           className=" w-12.5 h-13.25 rounded-xl object-cover "
//                         />

//                         <div className="">
//                           <h4 className="font-semibold text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[160%] tracking-[0em] align-middle text-[#FFFFFF]">{item.name}</h4>
//                           <p className="font-normal text-[12px] md:text-[13px] lg:text-[14px] leading-[160%] tracking-[0em] align-middle">{item.role}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <>
//                       <div className="relative w-40 h-75 md:w-44 md:h-80 lg:w-48 lg:h-86 xl:w-52 xl:h-92 2xl:w-57.5 2xl:h-108.75 rounded-2xl overflow-hidden transition-all duration-500">
//                         <Image
//                           src={item.img}
//                           alt={item.name}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_40.32%,#4A4A59_100%)]"/>
//                       <div className="absolute bottom-6 left-6 flex flex-col gap-0 md:gap-0.5">
//                         <h4 className="text-[#FFFFFF] font-semibold text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[160%] tracking-[0em] align-middle">{item.name}</h4>
//                         <p className="text-[#FFFFFF] font-normal text-[12px] md:text-[13px] lg:text-[14px] leading-[160%] tracking-[0em] align-middle">{item.role}</p>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="flex justify-end gap-4 mt-10">
//           <button onClick={prevSlide} className="px-4 py-2 bg-gray-200 rounded">
//             ←
//           </button>
//           <span>{index + 1} / {data.length}</span>
//           <button onClick={nextSlide} className="px-4 py-2 bg-gray-200 rounded">
//             →
//           </button>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Testimonial;



"use client";
import { useState } from "react";
import { testimonialData } from "../data/testimonialData";
import Image from "next/image";
import TvIcon from "./svg/TvIcon";

const Testimonial = () => {

  const [index, setIndex] = useState(0);
  const data = testimonialData;

  // ✅ Infinite Next
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  // ✅ Infinite Prev
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const visibleCards = [
    data[index],
    data[(index + 1) % data.length],
    data[(index + 2) % data.length],
    data[(index + 3) % data.length],
  ];

  return (
    <section className="bg-[#f5f6f8] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="px-6 text-[#4A4A59] font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] leading-[130%]">
          See what our customers are saying <br className='lg:block hidden' />
          <span className="text-[#9898A7]">about Custom GPTs</span>
        </h2>

        {/* Slider */}
        <div className="px-6 mt-12 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"

          >
            {visibleCards.map((item, i) => {
              const isActive = i === 0;

              return (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden relative shrink-0`}
                >

                  {isActive ? (
                    <div className="w-75 h-75 md:w-80 md:h-80 lg:w-86 lg:h-86 xl:w-92 xl:h-92 2xl:w-117.5 2xl:h-108.75 transition-all duration-500 bg-[radial-gradient(120.74%_124.92%_at_7.26%_100%,#326DE4_0%,#628FFD_100%)] text-white p-5 sm:p-6  md:p-7  lg:p-8 flex flex-col">
                      <TvIcon />
                      <p className="font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-[160%] tracking-[0em] align-middle mt-5 sm:mt-6 md:mt-7 lg:mt-8">{item.text}</p>
                      <div className="flex items-center gap-4 mt-10 lg:mt-14 xl:mt-18 2xl:mt-30">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={40}
                          height={40}
                          className=" w-12.5 h-13.25 rounded-xl object-cover "
                        />

                        <div className="">
                          <h4 className="font-semibold text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[160%] tracking-[0em] align-middle text-[#FFFFFF]">{item.name}</h4>
                          <p className="font-normal text-[12px] md:text-[13px] lg:text-[14px] leading-[160%] tracking-[0em] align-middle">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="relative w-40 h-75 md:w-44 md:h-80 lg:w-48 lg:h-86 xl:w-52 xl:h-92 2xl:w-57.5 2xl:h-108.75 rounded-2xl overflow-hidden transition-all duration-500">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_40.32%,#4A4A59_100%)]" />
                      <div className="absolute bottom-6 left-6 flex flex-col gap-0 md:gap-0.5">
                        <h4 className="text-[#FFFFFF] font-semibold text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[160%] tracking-[0em] align-middle">{item.name}</h4>
                        <p className="text-[#FFFFFF] font-normal text-[12px] md:text-[13px] lg:text-[14px] leading-[160%] tracking-[0em] align-middle">{item.role}</p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-end gap-4 mt-10">
          <button onClick={prevSlide} className="px-4 py-2 bg-gray-200 rounded">
            ←
          </button>
          <span>{index + 1} / {data.length}</span>
          <button onClick={nextSlide} className="px-4 py-2 bg-gray-200 rounded">
            →
          </button>
        </div>

      </div>
    </section>
  )
}

export default Testimonial;


