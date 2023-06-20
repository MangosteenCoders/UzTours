import './App.scss';
import './Responsive.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Tours from './Pages/Tours';
import Transport from './Pages/Transport';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/transport' element={<Transport/>}/>
      </Routes>
    </div>
  );
}

export default App;
