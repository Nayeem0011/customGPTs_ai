import React from 'react'
import Lunch from './Lunch'
import SocialProof from "./SocialProof"
import ConectAi from "./ConectAi"
import Driver from './Driver'
import Footer from './Footer'
import Trusted from './Trusted'

const Body = () => {
  return (
    <div>
      <SocialProof />
      <Trusted />
      <Lunch />
      <Driver />
        <ConectAi />
        <Footer />
      
    </div>
  )
}

export default Body