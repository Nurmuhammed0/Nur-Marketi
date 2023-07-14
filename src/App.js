// import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ShopAll from './Market-Nur/Menu/ShopAll';
import Comp from './Market-Nur/Menu/Comp';
import Tablets from './Market-Nur/Menu/Tablets';
import Drones from './Market-Nur/Menu/Drones';
import Tv from './Market-Nur/Menu/Tv';
import Audio from './Market-Nur/Menu/Audio';
import Mobile from './Market-Nur/Menu/Mobile';
// import Books from './Market-Nur/Menu/Books'
import Futters from './Market-Nur/Futters';
import Home from './Market-Nur/Home';
import Nawbars from './Market-Nur/Nawbars';
import LargeCards from './Market-Nur/Menu/LargeCards';
import All from './Market-Nur/Menu/All'
function App() {
  return (
    <div>
     <Router>
     <Nawbars />
         <Routes>
          <Route path='/shopall' element={<ShopAll />}/>
          <Route path='/comp' element={<Comp />}/>
          <Route path='/tablets' element={<Tablets />}/>
          <Route path='/dron' element={<Drones />}/>
          <Route path='/tv' element={<Tv />}/>
          <Route path='audio' element={<Audio />}/>
          <Route path='/mobile' element={<Mobile />}/>
          {/* <Route path='/books' element={<Books />}/> */}
          <Route path='/large/:id' element={<LargeCards />}/>
          <Route path='/all/:id' element={<All />}/>
          <Route path ='/' element={<Home />}/>
         </Routes>
       <Futters />
     </Router>
    </div>
  );
}

export default App;
