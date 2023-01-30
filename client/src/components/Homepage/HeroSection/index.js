import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='h-[70vh] relative'>
      <div className='h-full w-full bg-hero_image bg-fixed bg-cover bg-no-repeat'>

      </div>

      <div className='z-10 relative'>
        {/* Your content here */}
      </div>
    </div>
  );
};

export default HeroSection;