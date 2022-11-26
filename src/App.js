import React, {useState} from 'react';
import './App.css';
import NavbarComponent from './Component/NavbarComponent/NavbarComponent';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Photos from './Component/Photos/Photos';


function App() {
  const[page,setPage] = useState('Home')
  return (
    <div className="App">
      <NavbarComponent setPage={setPage} />
      {page==='Home' && <Photos/>}
      {page==='About' && <About/>}
      {page==='Contact' && <Contact/>}
    </div>
  );
}

export default App;
