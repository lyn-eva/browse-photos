import React from 'react';
import ImgPreview from './ImgPreview';
import { images } from '../images';

// const images = Array(58).fill('0');

const Gallery: React.FC = () => {
  return (
    <main className='mt-[min(5vw,4rem)] pb-8 grow overflow-auto'>
      <section className='grid grid-cols-3 gap-4'>
        {images.results.map((img, i) => {  
        return (
            <ImgPreview
              key={img.id}
              img={img}
              shouldSpan={i % 5 === 0 || i % 7 === 0 || i % 11 === 0}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Gallery;