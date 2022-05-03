import { Icon } from '@iconify/react';
import { CtxTypes } from '../Types';
import { useCtx } from '../Context';

const ImgDetail: React.FC = () => {
  const { imgDetail, dispatchImgDetail, addToLocalStorage } = useCtx() as CtxTypes;

  const handleClick = () => {
    dispatchImgDetail({
      type: 'TOGGLE',
      value: {},
    });
  };

  return (
    <main className='overflow-auto pb-16 bg-white fixed top-0 right-0 w-full h-full z-10'>
      <section className='w-11/12 mx-auto'>
        <header className='flex justify-end py-7'>
          <button onClick={handleClick}>
            <Icon className='w-7 h-7' icon='akar-icons:cross' />
          </button>
        </header>
        <div className='text-right'>
          <img
            className='w-full h-auto rounded-sm'
            src={imgDetail.url}
            alt={imgDetail.descr ?? imgDetail.alt_descr}
          />
          <p className='text-sm mt-1 text-black'>
            <span className='text-gray-500'>{imgDetail.alt_descr}</span> by{' '}
            <a
              className='text-blue-400 underline'
              target='_blank'
              rel='noreferrer'
              href={`https://unsplash.com/@${imgDetail.username}?utm_source=browse%photos&utm_medium=referral`}
            >
              {imgDetail.name}
            </a>{' '}
            on{' '}
            <a
              className='text-blue-400 underline'
              target='_blank'
              rel='noreferrer'
              href={`https://unsplash.com/?utm_source=browse%photos&utm_medium=referral`}
            >
              Unsplash
            </a>{' '}
          </p>
        </div>
        <div className='mt-6'>
          <h1>{imgDetail.descr}</h1>
        </div>
        <div className='flex gap-3 mt-3'>
          <a
            className='bg-blue-400 text-white px-3 py-1 rounded-md'
            aria-disabled='false'
            href={imgDetail.unsplash_link}
            rel='noreferrer'
            download='torii.jpg'
            target='_blank'
          >
            See Original
          </a>
          <a
            className='bg-green-400 text-white px-3 py-1 rounded-md'
            aria-disabled='false'
            href={`${imgDetail.download_link}&amp;force=true`}
            rel='noreferrer'
            download='torii.jpg' // not working :(
          >
            Download
          </a>
          <button
            onClick={() => addToLocalStorage(imgDetail.id ?? '', imgDetail.photo_link ?? '')}
            className='bg-orange-400 text-white px-3 py-1 rounded-md'
          >
            Add to Favorite
          </button>
        </div>
      </section>
    </main>
  );
};

export default ImgDetail;
