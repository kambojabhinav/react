import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setMode]= useState('light');
  

 
 

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      
      document.body.style.backgroundColor='grey';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      
    }
  }

  return (
    <div className="App">
<Navbar title="Abhinav" mode={mode} toggleMode={toggleMode}/>

<TextForm title="Type here to analyze" mode={mode}/>

     
    </div>
  );
}

export default App;
