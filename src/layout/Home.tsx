import { useState } from 'react';
import Gallery from '../components/Gallery';
import SearchBar from '../components/SearchBar';
import { CtxTypes } from '../Types';
import { useCtx } from '../Context';
import ImgDetail from '../components/ImgDetail';

const Home: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  const { imgDetail } = useCtx() as CtxTypes;

  return (
    <>
      <SearchBar setPhotos={setPhotos} />
      {!photos.length && <p className='absolute left-0 top-[30vh] w-full text-center mt-8'>Aren't you browsing? :)</p>}
      <Gallery photos={photos} />
      {imgDetail.isActive && <ImgDetail />}
    </>
  );
};

export default Home;
