
import React from 'react'
import ReactDOM from 'react-dom'

import About from './Routes/About';
import Homme from './Routes/Homme';
import Services from './Routes/Services';
import {Route,Routes} from "react-router-dom"
import Contact from './Routes/Contact';

import "./style.css"
function App() {
  return (
         <div className='App'>
          
                  <Routes>
                    <Route path='/' element={<Homme/>}/>
                    <Route path='/Services' element={<Services/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                  </Routes>
                   
                   
                  
         </div>
    

    
  );
}

export default App;
