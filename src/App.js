import './App.scss';
import './Responsive.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Tours from './Pages/Tours';
import Transport from './Pages/Transport';
import SetCodes from './Pages/SetCodes';
import BuxoroHome from './Components/Buxoro/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/transport' element={<Transport/>}/>
        <Route path='/aboutPage' element={<About/>}/>
        <Route path='/buxoroMore' element={<BuxoroHome/>}/>
        <Route path='/xorazmMore' element={<About/>}/>

        
      </Routes>
      <SetCodes />
    </div>
  );
}

export default App;
