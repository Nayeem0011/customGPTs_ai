"use client";
import { useState } from "react";
import { testimonialData } from "../data/testimonialData";
import Image from "next/image";

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

  // ✅ Dynamic translate calculation
  const getTranslateX = () => {
    let total = 0;

    for (let i = 0; i < index; i++) {
      total += i === index ? 470 : 230;
      total += 24; // gap-6 = 24px
    }

    return total;
  };

  return (
    <section className="bg-[#f5f6f8] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-[#4A4A59] font-medium text-[48px] leading-[130%]">
          See what our customers are saying <br />
          <span className="text-[#9898A7]">about Custom GPTs</span>
        </h2>

        {/* Slider */}
        <div className="mt-12 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${getTranslateX()}px)`,
            }}
          >
            {data.map((item, i) => {
              const isActive = i === index;

              return (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden relative transition-all duration-500 shrink-0`}
                  style={{
                    width: isActive ? 470 : 230,
                    height: 435,
                  }}
                >

                  {isActive ? (
                    <div className="h-full bg-linear-to-br from-blue-500 to-indigo-500 text-white p-6 flex flex-col justify-between">
                      <p className="text-sm">{item.text}</p>

                      <div className="flex items-center gap-3 mt-6">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={40}
                          height={40}
                          className=" w-12.5 h-13.25 rounded-xl object-cover "
                        />

                        <div>
                          <h4>{item.name}</h4>
                          <p className="text-xs opacity-80">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="relative w-57.5 h-108.75 rounded-2xl overflow-hidden">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4>{item.name}</h4>
                        <p className="text-xs">{item.role}</p>
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