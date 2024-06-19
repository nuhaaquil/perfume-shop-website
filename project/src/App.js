import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
 
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Collections from './components/Collections';
import FAQ from './components/FAQ';
import Men from './components/Men';
import Women from './components/Women';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/AboutUs' element={<AboutUs></AboutUs>}/>
        <Route path='/Collections' element={<Collections></Collections>}/>
        <Route path='/FAQ' element={<FAQ></FAQ>}/>
        <Route path='/Men' element={<Men></Men>}/>
        <Route path='/Women' element={<Women></Women>}/>
        <Route path='/Contact' element={<Contact></Contact>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

