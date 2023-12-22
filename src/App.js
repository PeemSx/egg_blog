import { useEffect, useState } from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';

function App() {

  const [backenData,setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/get").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
        
      }
    )
  },[])
  
  console.log(backenData.users);
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
