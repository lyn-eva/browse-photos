import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useCtx } from './Context';
import { CtxTypes } from './Types';
import Gallery from './components/Gallery';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImgDetail from './components/ImgDetail';

function App() {
  const { imgDetail } = useCtx() as CtxTypes;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <SearchBar />
              <Gallery />
            </>
          }
        />
        <Route path=':id' element={<ImgDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
