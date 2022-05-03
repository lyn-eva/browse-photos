import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useCtx } from './Context';
import { CtxTypes } from './Types';
import Header from './components/Header';
import ImgDetail from './components/ImgDetail';
import Home from './layout/Home';

function App() {
  const { imgDetail } = useCtx() as CtxTypes;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path=':id' element={<ImgDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
