import React from 'react'
import NavBar from './NavBar'
import HeroPage from './HeroPage'


const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start text-center"
      style={{
        backgroundImage: 'url("/background_1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '1324px',
      }}
    >
      <NavBar />
      <HeroPage />
    </div>
  )
}

export default Header

