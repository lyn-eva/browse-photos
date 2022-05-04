import { useReducer, useState } from 'react';
import Gallery from '../components/Gallery';
import SearchBar from '../components/SearchBar';
import { CtxTypes, Param } from '../Types';
import { useCtx } from '../Context';
import ImgDetail from '../components/ImgDetail';
import useUnsplash from '../custom-hook/useUnsplash';


const Home: React.FC = () => {
  const [param, setParam] = useState({} as Param)
  const { imgDetail } = useCtx() as CtxTypes;

  const photos = useUnsplash(param);

  return (
    <>
      <SearchBar setParam={setParam} />
      {!photos.length && <p className='absolute left-0 top-[30vh] w-full text-center mt-8'>Aren't you browsing? :)</p>}
      <Gallery photos={photos} />
      {imgDetail.isActive && <ImgDetail />}
    </>
  );
};

export default Home;
