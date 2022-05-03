import { useState } from 'react';
import Gallery from '../components/Gallery';
import SearchBar from '../components/SearchBar';
import { images } from '../images';
import { CtxTypes, DetailState } from '../Types';
import { useCtx } from '../Context';
import ImgDetail from '../components/ImgDetail';

const Home: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  const { imgDetail } = useCtx() as CtxTypes;

  return (
    <>
      <SearchBar setPhotos={setPhotos} />
      <Gallery photos={photos} />
      {imgDetail.isActive && <ImgDetail />}
    </>
  );
};

export default Home;
