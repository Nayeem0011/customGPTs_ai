import React from 'react'

import Lunch from './Lunch'
import SocialProof from "./SocialProof"
import ConectAi from "./ConectAi"
import Driver from './Driver'
import Footer from './Footer'
import Trusted from './Trusted'
import Testimonial from './Testimonial'

const Body = () => {
  return (
    <div>
      <SocialProof />
      <Trusted />
      <Lunch />
      <Testimonial />
      <Driver />
      <ConectAi />
      <Footer/>
    </div>
  )
}

export default Body

