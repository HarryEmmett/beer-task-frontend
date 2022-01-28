import './css/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Home from './component/Home';
import Nav from './component/Nav';
import Footer from './component/footer';
import Bar from './component/Bar';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter> 
        <Nav/>
         <Routes>
           <Route path="/home" exact element={<Home/>}/>
           <Route path="/contactus" exact element={<ContactUs/>}/>
           <Route path="/about" exact element={<About/>}/>
           <Route path="/bar" exact element={<Bar/>}/>
          </Routes>
        <Footer/>
        <h2>harry</h2>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
