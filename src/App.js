import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ParallaxBlur from './Componets/Parallax/ParallaxBlur';
import Provide from './Componets/ParallaxScroll/Provide.jsx';
import Scroll from './Componets/ScrollEffects/Scroll';
// import Provider from './Componets/Parallax1/Provider';
// import Home from './Pages/Home';

function App() {
  return (
    <>
      {/* <Provide/> */}
      {/* <ParallaxBlur/> */}
      {/* <Scroll/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/1' element={<Provide/>}/>
          <Route path='/2' element={<ParallaxBlur/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
