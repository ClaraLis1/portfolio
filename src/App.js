import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutMe from './components/aboutMe/AboutMe';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <div>
        <Header/>
      </div>
          
     <Routes>
          <Route path='/'element ={<Home/>}></Route>
          <Route path='/about' element={<AboutMe/>}></Route> 
          <Route path='/resume' element={<Resume/>}></Route>  
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/user/:userid'element ={<Home/>}></Route>
          <Route path="*" element="Error 404" />
        </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
