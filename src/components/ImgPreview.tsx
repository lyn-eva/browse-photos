
import { Icon } from '@iconify/react';
import { useCtx } from '../Context';
import { CtxTypes } from '../Types';
interface Props {
  img: any;
  shouldSpan: boolean;
}

const ImgPreview: React.FC<Props> = ({ img, shouldSpan }) => {
  const { dispatchImgDetail } = useCtx() as CtxTypes;

  const handleClick = () => {
    dispatchImgDetail({
      type: 'TOGGLE',
      value: {
        isActive: true,
        url: img.url,
        descr: img.descr,
        alt_descr: img.alt_descr,
        likes: img.likes,
        name: img.name,
        username: img.username,
        download_link: img.download_link,
        unsplash_link: img.unsplash_link,
        id: img.id,
      },
    });
  };

  return (
    <>
      <div
        className={`${shouldSpan ? 'row-span-2' : ''}
       bg-gray-400 overflow-hidden relative group`}
      >
        <img
          onClick={handleClick}
          className={`${shouldSpan ? 'row-span-2 w-full' : 'w-full'} cursor-pointer outline object-cover`}
          src={img.url}
          alt={img.descr ?? img.alt_descr}
        />
        <div className='opacity-0 group-hover:opacity-100 absolute text-gray-200 md:py-3 bottom-0 right-0 bg-[#66666685] h-auto w-full px-3'>
          <p>{img.alt_descr}</p>
          <div className='flex items-center justify-end gap-4 mt-1 py-1 text-sm'>
            <p className='flex items-center gap-1'>
              <Icon className='text-red-500 w-6 h-6' icon='ant-design:heart-filled' />
              <span className='text-white mt-[1px]'>{img.likes}</span>
            </p>
            <a
              className='text-right leading-4 underline hover:text-blue-300'
              href={img.profile_link}
              rel='noreferrer'
              target='_blank'
            >
              {img.name}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgPreview;
