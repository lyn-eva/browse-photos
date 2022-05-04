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

// const renderGrid = (ary: DetailState[], size: number) => {
//   const tmp = [];
//   for (let i = 0; i < ary.length; i += size) {
//     const idx = Math.floor(Math.random() * size);
//     const node = (
//       <section key={photos[i].id} className='flex h-60 gap-2'>
//         {photos.slice(i, i + size).map((img, i) => (
//           <ImgPreview key={img.id} img={img} shouldSpan={i === idx} />
//         ))}
//       </section>
//     );
//     tmp.push(node);
//   }
//   return tmp;
// };

const Gallery: React.FC<Props> = ({ photos }) => {
  const size = gridSize[useDevice()];

  console.log(Array(Math.round(photos.length /size)));
  return (
    <main className='mt-[min(5vw,3rem)] pb-8 grow overflow-auto grid-flow-row-dense'>
      <section className='relative flex flex-col gap-2'>
        {Array(Math.round(photos.length / size)).fill(4).map((nun, i) => {
          const start = i * (size - 1);
          console.log('start', start);
          console.log('size', i ,Math.floor(Math.random() * size));
          return (
            <section key={photos[i].id} className='flex h-60 gap-2'>
              {photos.slice(start, start + size).map((img, i) => (
                <ImgPreview key={img.id} img={img} shouldSpan={i === Math.floor(Math.random() * size)} />
              ))}
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default Gallery;
