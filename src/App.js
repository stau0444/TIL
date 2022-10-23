import axios from 'axios';
import './App.scss';
import Home from './page/Home';


axios.defaults.baseURL = 'http://localhost:8080'; 
axios.defaults.headers ={"Content-Type":"application/json"}
function App() {
  return (
      <div className="App">
        <Home/>
      </div>
  );
}

export default App;
