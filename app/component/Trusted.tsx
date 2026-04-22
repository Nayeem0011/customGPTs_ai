import React from 'react'
import SparkIcon from './svg/SparkIcon'
import SparkIcon2 from './svg/SparkIcon2';

import Image from "next/image";
import card_image from "../../public/d42e9a.png";
import card_image2 from "../../public/595fb.png";

const Trusted = () => {
    return (
        // Main container (centered, max width, spacing)
        <div className='flex flex-col gap-14 max-w-7xl mx-auto w-full px-6 pt-20 mb-20'>

            {/* Top heading + description */}
            <div className='flex items-center justify-between'>

                {/* Left heading */}
                <h1 className='text-[#9898A7] font-medium text-[48px] leading-[130%] tracking-[0px] align-middle'>
                    Why startup choose <br /> <span className='text-[#4A4A59]'>CustomGPT.ai</span>
                </h1>
                {/* Right description */}
                <p className='text-[#8B929E] font-normal text-[16px] leading-[160%] tracking-[0px] align-middle'>
                    Built for organizations. AI that’s easy, secure, <br /> and represents us like a star team member.
                </p>
            </div>

            {/* Cards container */}
            <div className='flex items-center justify-center gap-6'>

                {/* Card 1 (Blue gradient) */}
                <div className='relative w-149.5 h-115.5 rounded-4xl overflow-hidden bg-[radial-gradient(120.74%_124.92%_at_7.26%_100%,#326DE4_0%,#628FFD_100%),radial-gradient(167.08%_140.48%_at_79.5%_0%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_100%)] shadow-[inset_1.01px_0.94px_4.09px_0px_#FFFFFF21,inset_1.9px_1.77px_8.17px_0px_#FFFFFF21]'>

                    {/* Content (text area) */}
                    <div className='flex items-start justify-start flex-col gap-6 pl-8 pt-8 z-10 relative'>

                        {/* Card title */}
                        <h3 className='text-[#FFFFFF] font-semibold text-[32px] leading-[130%] tracking-[0px] align-middle'>
                            Enterprise-grade data security
                        </h3>

                        {/* Feature 1 */}
                        <div className='text-[#FFFFFF] flex gap-1.5'>
                            <SparkIcon />
                            <span className='font-semibold text-[16px] leading-[130%] tracking-[0em] align-middle'>Full data protection:</span>
                            <span className='font-normal text-[18px] leading-[130%] tracking-[0em] align-middle'>No training or sharing your data</span>
                        </div>

                        {/* Feature 2 */}
                        <div className='text-[#FFFFFF] flex gap-1.5'>
                            <SparkIcon />
                            <span className='font-semibold text-[16px] leading-[130%] tracking-[0em] align-middle'>Enterprise security:</span>
                            <span className='font-normal text-[18px] leading-[130%] tracking-[0em] align-middle'>SOC-2 type II, GDPR, full encryption</span>
                        </div>

                        {/* Button */}
                        <button className='rounded-xl border border-[#CBCBCB80] bg-[#FFFFFF] py-3.5 px-9 font-medium text-[#4A4A59] text-[16px] leading-[120%] tracking-[-0.13px] align-middle'>
                            Explore trust center
                        </button>
                    </div>

                    {/* Background image (bottom right positioned) */}
                    <div className='absolute w-[85%] h-[85%] -right-30 -bottom-35'>
                        <Image src={card_image} alt="Company logo" className="object-contain object-bottom-right" />
                    </div>
                </div>

                {/* Card 2 (Light gray) */}
                <div className='relative w-149.5 h-115.5 rounded-4xl overflow-hidden bg-[#F2F3FA] shadow-[inset_1.01px_0.94px_4.09px_0px_#FFFFFF21,inset_1.9px_1.77px_8.17px_0px_#FFFFFF21]'>

                    {/* Content (text area) */}
                    <div className='flex items-start justify-start flex-col gap-6 pl-8 pt-8 z-10 relative'>
                        {/* Card title */}
                        <h3 className='text-[#4A4A59] font-semibold text-[32px] leading-[130%] tracking-[0px] align-middle'>
                            Answers you trust
                        </h3>

                        {/* Feature 1 */}
                        <div className='text-[#4A4A59] flex items-start gap-1.5'>
                            <SparkIcon2 />
                            <div className='block'>
                                <span className='font-semibold text-[16px] leading-[130%]'>
                                    Full data protection:
                                </span>
                                <span className='font-normal text-[18px] leading-[130%]'>
                                    Third-party verified #1 for anti-hallucination <br />
                                    technology, beating out major players like OpenAI and Google
                                </span>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className='text-[#4A4A59] flex gap-1.5'>
                            <SparkIcon2 />
                            <span className='font-semibold text-[16px] leading-[130%] tracking-[0em] align-middle'>Enterprise security:</span>
                            <span className='font-normal text-[18px] leading-[130%] tracking-[0em] align-middle'>Every response has a link directly to its source</span>
                        </div>

                        {/* Button */}
                        <button className='rounded-xl border border-[#CBCBCB80] bg-[#FFFFFF] py-3.5 px-9 font-medium text-[#4A4A59] text-[16px] leading-[120%] tracking-[-0.13px] align-middle'>
                            Benchmark Announcement
                        </button>
                    </div>

                    {/* Background image (bottom right positioned) */}
                    <div className='absolute w-123 h-123 -right-28 -bottom-43'>
                        <Image src={card_image2} alt="Company logo" className="object-contain object-bottom-right" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trusted

