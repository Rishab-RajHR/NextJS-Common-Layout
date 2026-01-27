import React from 'react';
import Image from 'next/image';

const ImageOptimization = () => {
  return (
    <>
      <h2>Image Optimization in Next JS</h2>
      {/* <Image
        src='/next.svg'
        alt="Next JS Image"
        width={200}
        height={200}
      /> */}
      {/* <img src={src.img} alt='Img' /> */} 
      <Image 
        src='https://pixabay.com/images/download/fields-2178329_1920.jpg'
        alt='Pexel Image'
        height={400}
        width={400}
      />
    </>
  );
};

export default ImageOptimization;
