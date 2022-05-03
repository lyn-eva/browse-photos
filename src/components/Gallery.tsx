import React from 'react';
import ImgPreview from './ImgPreview';
import { DetailState } from '../Types';

interface Props {
  photos: DetailState[]
}

const Gallery: React.FC<Props> = ({ photos }) => {
  return (
    <main className='mt-[min(5vw,3rem)] pb-8 grow overflow-auto'>
      <section className='grid grid-cols-3 gap-4 relative'>
        {photos.map((img, i) => {
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
