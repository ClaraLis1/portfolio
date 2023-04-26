import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import  './imageSlider.modules.css'

const ImageSliderMobile = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)
    const[mobile, setMobile] = useState(true);

    let pictures = images
    
  
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
  };

    useEffect(() => {
      window.addEventListener('onclick', updateWindowDimensions);
      width>821? setMobile(false): setMobile(true)
     
  }, [width]);

  window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width:821px)").matches) {
        setMobile(false)
    } else {
        setMobile(true)
    }
})
    
    useEffect(() => {
      while(mobile){
      const interval = setInterval(() => {
        let newIndex = currentIndex + 1;
        if(newIndex < pictures.length){
          setCurrentIndex(newIndex)
        }else{
          setCurrentIndex(0)
        }
      }, 3000);
      return () => clearInterval(interval);
      }
    }, [currentIndex]);

    const handleClickNext = ()=>{
      let newIndex = currentIndex + 1;     
      if(newIndex < pictures.length){
        setCurrentIndex(newIndex)
       
      }
    }

    const handleClickPrev = ()=>{
      let newIndex = currentIndex-1;
      if(newIndex >= 0){
        setCurrentIndex(newIndex)
     
      }
    }

    const goToSlide = (slideIndex) =>{
      setCurrentIndex(slideIndex)
    }

  return (
   
        <div className='containerPictures'>
            {currentIndex >0 && <div className="leftArrow" onClick={handleClickPrev}> ❰ </div>}
            {currentIndex <(pictures.length -1) &&<div className="rightArrow" onClick={handleClickNext}> ❱ </div>}
             <img src={pictures[currentIndex]} alt="imagenesPortfolio" className='imagenes' />  
            <span className="pages">{`${currentIndex+1}/${pictures.length}`}</span>
          <div className="imagesContainer"> 
            <div className="imagesStyle">
               {/* style={{ backgroundImage: `url(${pictures[currentIndex].url})`}}> */}
               {/* style={{ backgroundImage:`url(${pictures[currentIndex]})`}}> */}
            </div>
             <div className="bottomImages">
                  {pictures.map((item, i) =>(                
                    <div className="bottomImage" key={i}  onClick={()=>goToSlide(i)} style={{ backgroundImage: `url(${item.url})` }}></div>
                    ))}
             </div>  
         </div>
        
      </div>    
  )
}

export default ImageSliderMobile