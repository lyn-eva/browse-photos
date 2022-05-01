import {useCtx} from './Context'
import {CtxTypes} from './Types';
import Gallery from './components/Gallery';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImgDetail from './components/ImgDetail';


function App() {
  const {imgDetail} = useCtx() as CtxTypes;

  console.log(imgDetail);

  return (
    <>
      <Header />
      <SearchBar />
      <Gallery />
      {imgDetail.isActive && <ImgDetail />}
    </>
  );
}

export default App;
