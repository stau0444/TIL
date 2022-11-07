import axios from 'axios';
import { useEffect } from 'react';
import './App.scss';
import Home from './page/Home';

// axios.defaults.baseURL = 'http://localhost:8081';
// axios.defaults.baseURL = 'http://3.37.32.130:8081';  
axios.defaults.baseURL = 'http://15.165.130.26:8081';  
axios.defaults.withCredentials=true;



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
