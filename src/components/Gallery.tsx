import React from 'react';
import ImgPreview from './ImgPreview';
import { DetailState } from '../Types';
import useDevice from '../custom-hook/useDevice';

interface Props {
  photos: DetailState[];
}

const gridSize: { [key: string]: number } = {
  desktop: 4,
  laptop: 3,
  tablet: 2,
  mobile: 1,
};

const Gallery: React.FC<Props> = ({ photos }) => {
  const size = gridSize[useDevice()];

  return (
    <main className='mt-[min(5vw,3rem)] pb-8 grow overflow-auto grid-flow-row-dense'>
      <section className='relative flex flex-col gap-2'>
        {Array(Math.round(photos.length / size) || photos.length % size)
          .fill(4)
          .map((nun, i) => {
            const rand = Math.random();
            return (
              <section key={photos[i].id} className='flex h-60 gap-2'>
                {photos.slice(i * 4, i * 4 + size).map((img, i) => (
                  <ImgPreview key={img.id} img={img} shouldSpan={i === Math.floor(rand * size)} />
                ))}
              </section>
            );
          })}
      </section>
    </main>
  );
};

export default Gallery;
