import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './layout/Home';
import Favorites from './layout/Favorites';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
