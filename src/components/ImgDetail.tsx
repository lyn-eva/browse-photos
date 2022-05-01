import React from 'react';
import { Icon } from '@iconify/react';
import { CtxTypes } from '../Types';
import { useCtx } from '../Context';

const ImgDetail: React.FC = () => {
  const { imgDetail, dispatchImgDetail } = useCtx() as CtxTypes;

  console.log(imgDetail);

  return (
    <div className='overflow-auto pb-16 bg-white fixed top-0 right-0 w-full h-full z-10'>
      <section className='w-11/12 mx-auto'>
        <header className='flex justify-end py-7'>
          <button
            onClick={() =>
              dispatchImgDetail({
                type: 'TOGGLE',
                value: { isActive: false, url: '', descr: '', alt_descr: '', likes: null },
              })
            }
          >
            <Icon className='w-7 h-7' icon='akar-icons:cross' />
          </button>
        </header>
        <div className='text-right'>
          <img
            className='w-full h-auto rounded-sm'
            src={imgDetail.url}
            alt={imgDetail.descr ?? imgDetail.alt_descr}
          />
          <p className='text-sm mt-1 text-gray-500'>{imgDetail.alt_descr}</p>
        </div>
        <div className='mt-6'>
          <h1>{imgDetail.descr}</h1>
        </div>
        <div className='flex gap-3 mt-3'>
          <button className='bg-blue-400 text-white px-3 py-1 rounded-md'>See Original</button>
          <button className='bg-green-400 text-white px-3 py-1 rounded-md'>Download</button>
          <button className='bg-orange-400 text-white px-3 py-1 rounded-md'>Add to Favorite</button>
        </div>
      </section>
    </div>
  );
};

export default ImgDetail;
