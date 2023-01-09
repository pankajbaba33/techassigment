
import './App.css';
import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Header from './Header';
import Navbar from './Navbar';
import Photo from './component/Photos';
import Candle from './component/Candle';
import Check from './component/Check';
import Reveal from './component/Reveal';
import Soap from './component/Soap';
import Special from './component/Special';
import Tart from './component/Tart';
import Rep from './component/Rep';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Header/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Photo/>}/>
      <Route path='candle' element={<Candle/>}/>
      <Route path='check' element={<Check/>}/>
      <Route path='rep' element={<Rep/>}/>
      <Route path='reveal' element={<Reveal/>}/>
      <Route path='soap' element={<Soap/>}/>
      <Route path='special' element={<Special/>}/>
      <Route path='Tart' element={<Tart/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
