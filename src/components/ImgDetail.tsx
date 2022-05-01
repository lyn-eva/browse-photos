import React from 'react';
import { Icon } from '@iconify/react';
import { CtxTypes } from '../Types';
import { useCtx } from '../Context';

interface Props {
  // setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImgDetail: React.FC<Props> = () => {
  const { dispatchImgDetail } = useCtx() as CtxTypes;

  return (
    <div className='bg-white fixed top-0 right-0 w-full h-full z-10'>
      <header className='flex justify-end py-7 px-5'>
        <button onClick={() => dispatchImgDetail({type: 'OFF', value: {url: ''}})}>
          <Icon className='w-7 h-7' icon='akar-icons:cross' />
        </button>
      </header>
    </div>
  );
};

export default ImgDetail;
