import axios from 'axios';
import { useEffect } from 'react';
import './App.scss';
import Home from './page/Home';

axios.defaults.baseURL = 'http://localhost:8080'; 
axios.defaults.headers ={"Content-Type":"application/json"}


function App() {
  
  const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
  }
  
  useEffect(()=>{
     window.addEventListener('resize', documentHeight)
     documentHeight() 
  },[])
  return (
      <div className="App">
        <Home/>
      </div>
  );
}

export default App;
