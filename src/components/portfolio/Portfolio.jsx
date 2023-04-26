import React from 'react'
import './portfolio.modules.css'
import booking from '../../images/portfolio/portfolio.jpg'
import booking1 from '../../images/portfolio/portfolio1.jpg'
import booking3 from '../../images/portfolio/portfolio3.jpg'
import booking4 from '../../images/portfolio/portfolio4.jpg'
import booking5 from '../../images/portfolio/portfolio5.jpg'
import booking6 from '../../images/portfolio/portfolio6.jpg'
import booking7 from '../../images/portfolio/portfolio7.jpg'
import booking8 from '../../images/portfolio/portfolio8.jpg'

import ImageSliderMobile from './ImageSliderMobile'

const Portfolio = () => {
  let images = [booking, booking1, booking3, booking4, booking5, booking6, booking7, booking8]
 
  return (
    <div className='portfolioContainer'>
      <h2 className='portfolioTitle'>Portfolio  </h2>
      <ImageSliderMobile     
      images={images}
      />
     
    </div>
  )
}

export default Portfolio