import React from 'react'
import NavBar from './NavBar'
import HeroPage from './HeroPage'
import Image from "next/image";
import background from "../../public/background_1.png";
import background2 from "../../public/background_2.png";

const Header = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-start text-center">
      {/* Main Background */}
      <Image src={background} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      {/* Left Blur */}
      <Image
        src={background2}
        alt="Background Blur"
        className=" absolute w-62.5 sm:w-87.5 md:w-112.5 lg:w-146 h-auto opacity-70 md:opacity-80 top-75 md:top-100 -left-30 md:-left-25 pointer-events-none select-none " />
      {/* Right Blur */}
      <Image
        src={background2}
        alt="Background Blur"
        className="absolute w-62.5 sm:w-87.5 md:w-112.5 lg:w-146 h-auto opacity-70 md:opacity-80 top-45 md:top-68.75 -right-30 md:-right-55 pointer-events-none select-none" />
      {/* Content */}
      <div className="relative z-10 w-full">
        <NavBar />
        <HeroPage />
      </div>
    </div>
  )
}

export default Header