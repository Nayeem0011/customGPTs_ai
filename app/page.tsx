"use client";
import Header from "./component/Header";
import Body from "./component/Body";
import { ReactLenis } from "lenis/react";

const page = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 2,
        smoothWheel: true,
      }}
    >
      <Header />
      <Body />
    </ReactLenis>
  )
}

export default page;
