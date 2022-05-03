import { useCtx } from '../Context';
import { CtxTypes } from '../Types';
import Gallery from '../components/Gallery';
import ImgDetail from '../components/ImgDetail';

const Favorites: React.FC = () => {
  const { imgDetail } = useCtx() as CtxTypes;
  const photos = JSON.parse(localStorage.getItem('favorites') ?? '[]');  

  return (
    <>
      <h1 className='text-2xl mt-8'>Your Favorites</h1>
      {!photos.length && <p className='absolute w-full text-center mt-8'>'There is no items'</p>}
      <Gallery photos={photos} />
      {imgDetail.isActive && <ImgDetail isFavorite={true}/>}
    </>
  );
};

export default Favorites;
