import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

const Banner = (props) => {
  return (
    <ParallaxBanner
      layers={[{
        image: props.imgSrc, amount: 0.6 ,speed:50
      }]}
      style={{ height: props.height }}>
      <div>
        {props.children}
      </div>

    </ParallaxBanner>
  )
}

export default Banner