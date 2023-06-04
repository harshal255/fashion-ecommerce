import React from 'react';
import Heading from './Heading';
import ImageGallarySlider from './ImageGallarySlider';


const ImageGallary = () => {
  return (
    <div>
     <Heading mainTitle={"@ FOLLOW US ON INSTAGRAM"} smallTitle={" "} className="text-[14px]"></Heading>
     <ImageGallarySlider></ImageGallarySlider>
      
    </div>
  )
}

export default ImageGallary
