import './App.scss';
import './Responsive.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Tours from './Pages/Tours';
import Transport from './Pages/Transport';
import SetCodes from './Pages/SetCodes';
import SamarqandHome from './Components/Smarqand/SamarqandHome'
import BuxoroHome from './Components/Buxoro/Home'
import XorazmHome from './Components/Xiva/XivaHome'

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
        <Route path='/samarkand' element={<SamarqandHome />}/>
        <Route path='/bukhara' element={<BuxoroHome/>}/>
        <Route path='/khiva' element={<XorazmHome />}/>
      </Routes>
      <SetCodes />
    </div>
  );
}

export default App;
