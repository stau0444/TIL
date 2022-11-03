import axios from 'axios';
import { useEffect } from 'react';
import './App.scss';
import Home from './page/Home';

axios.defaults.baseURL = 'http://localhost:8080'; 
axios.defaults.headers ={"Content-Type":"application/json"}
axios.defaults.withCredentials=true;

export const  getCookie=(name)=>{
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  console.log(ca ,nameEQ)
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)===' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}  
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
