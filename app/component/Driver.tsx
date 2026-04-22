



// import React from 'react'

// const cards = [
//   {
//     label: "Up to",
//     stat: "93%",
//     subtitle: "Of tickets resolved without a human",
//     title: "Engage",
//     titleMuted: "customers",
//     desc: "Scale and automate engagement with trustworthy, brand-aligned AI",
//   },
//   {
//     label: "Up to",
//     stat: "10hr",
//     subtitle: "Saved each week, per user",
//     title: "Work",
//     titleMuted: "faster",
//     desc: "Help your teams work faster and smarter with instant, accurate answers",
//   },
// ]

// const Driver = () => {
//   return (
//     <section className="flex flex-col justify-center items-center py-12 lg:py-16 px-4 gap-10">

//       {/* Heading */}
//       <div className="flex flex-col items-center gap-3">
//         <h1 className="w-full max-w-[736px] text-center text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-[130%] text-[#1a1a1a]">
//           Driver real-worlds{" "}
//           <span className="text-[#9ca3af]">results with AI</span>
//         </h1>
//         <p className="text-center text-[14px] sm:text-[16px] font-normal leading-[160%] text-[#666]">
//           Customers saved over <span className="font-semibold text-[#1a1a1a]">$100M</span> with{" "}
//           <span className="font-semibold text-[#1a1a1a]">AI automation</span> & efficiency this year
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
//         {cards.map((card, i) => (
//           <div key={i} className="relative w-full sm:w-auto">

//             <img
//               src="/bg23.png"
//               alt=""
//               className="absolute inset-0 w-full h-full rounded-[26px] pointer-events-none object-cover"
//               style={{ zIndex: 0 }}
//             />

//             <div className="relative z-10 p-[12px]">
//               <div
//                 className="w-full sm:w-[360px] md:w-[420px] lg:w-[468px] min-h-[360px] lg:min-h-[429px] rounded-[28px] p-5 lg:p-6 flex flex-col justify-between bg-white"
//                 style={{
//                   border: "1px solid transparent",
//                   background:
//                     "linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(140,130,240,0.5), rgba(200,160,255,0.25), rgba(160,200,255,0.4)) border-box",
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 rounded-[28px] pointer-events-none"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, rgba(120,130,255,0.07) 0%, rgba(180,120,255,0.05) 50%, transparent 100%)",
//                   }}
//                 />

//                 {/* top */}
//                 <div className="relative z-10 text-left">
//                   <p className="text-[12px] uppercase tracking-widest text-gray-400 mb-1">
//                     {card.label}
//                   </p>
//                   <p className="text-right text-[80px] sm:text-[100px] lg:text-[120px] font-extralight leading-none text-[#4A4A59] -mt-4">
//                     {card.stat}
//                   </p>
//                   <p className="text-[13px] text-right text-gray-400">{card.subtitle}</p>
//                 </div>

//                 {/* bottom */}
//                 <div className="relative z-10 mt-6 text-left">
//                   <h2 className="text-[18px] lg:text-[20px] font-semibold text-gray-900 mb-1">
//                     {card.title}{" "}
//                     <span className="font-normal text-gray-500">{card.titleMuted}</span>
//                   </h2>
//                   <p className="text-[13px] text-gray-500 leading-relaxed max-w-[240px]">
//                     {card.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>

//       <button className="mt-2 px-7 py-2.5 text-[14px] text-gray-800 border border-gray-300 rounded-full bg-transparent hover:bg-gray-50 transition-all">
//         Learn more about us
//       </button>

//     </section>
//   )
// }

// export default Driver




import React from 'react'

const cards = [
  {
    label: "Up to",
    stat: "93%",
    subtitle: "Of tickets resolved without a human",
    title: "Engage",
    titleMuted: "customers",
    desc: "Scale and automate engagement with trustworthy, brand-aligned AI",
    bgRotate: false,
  },
  {
    label: "Up to",
    stat: "10hr",
    subtitle: "Saved each week, per user",
    title: "Work",
    titleMuted: "faster",
    desc: "Help your teams work faster and smarter with instant, accurate answers",
    bgRotate: true,
  },
]

const Driver = () => {
  return (
    <section className="flex flex-col justify-center items-center py-12 lg:py-16 px-4 gap-10">

      {/* Heading */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="w-full max-w-[736px] text-center text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-[130%] text-[#1a1a1a]">
          Driver real-worlds{" "}
          <span className="text-[#9ca3af]">results with AI</span>
        </h1>
        <p className="text-center text-[14px] sm:text-[16px] font-normal leading-[160%] text-[#666]">
          Customers saved over <span className="font-semibold text-[#1a1a1a]">$100M</span> with{" "}
          <span className="font-semibold text-[#1a1a1a]">AI automation</span> & efficiency this year
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
        {cards.map((card, i) => (
          <div key={i} className="relative w-full sm:w-auto">

            <img
              src="/bg.png"
              alt=""
              className="absolute inset-0 w-full h-full rounded-[26px] pointer-events-none object-cover"
              style={{
                zIndex: 0,
                transform: card.bgRotate ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />

            <div className="relative z-10 p-[12px]">
              <div
                className="w-full sm:w-[360px] md:w-[420px] lg:w-[468px] min-h-[360px] lg:min-h-[429px] rounded-[28px] p-5 lg:p-6 flex flex-col justify-between bg-white"
                style={{
                  border: "1px solid transparent",
                  background:
                    "linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(140,130,240,0.5), rgba(200,160,255,0.25), rgba(160,200,255,0.4)) border-box",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[28px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(120,130,255,0.07) 0%, rgba(180,120,255,0.05) 50%, transparent 100%)",
                  }}
                />

                {/* top */}
                <div className="relative z-10 text-left">
                  <p className="text-[12px] uppercase tracking-widest text-gray-400 mb-1">
                    {card.label}
                  </p>
                  <p className="text-right text-[80px] sm:text-[100px] lg:text-[120px] font-extralight leading-none text-[#4A4A59] -mt-4">
                    {card.stat}
                  </p>
                  <p className="text-[13px] text-right text-gray-400">{card.subtitle}</p>
                </div>

                {/* bottom */}
                <div className="relative z-10 mt-6 text-left">
                  <h2 className="text-[18px] lg:text-[20px] font-semibold text-gray-900 mb-1">
                    {card.title}{" "}
                    <span className="font-normal text-gray-500">{card.titleMuted}</span>
                  </h2>
                  <p className="text-[13px] text-gray-500 leading-relaxed max-w-[240px]">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      <button className="mt-2 px-7 py-2.5 text-[14px] text-gray-800 border border-gray-300 rounded-full bg-transparent hover:bg-gray-50 transition-all">
        Learn more about us
      </button>

    </section>
  )
}

export default Driver