import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import AppBody from './components/AppBody'
import AddPersonForm from './components/AddPersonForm'


function App() {
  
  const [testfacestate, changefacestate] = useState({
    message: null
  });  // State Variable --> testfacestate.{variable}
  
  var testface = () => {
    console.log('testface')
  }

  var handleClick = () => {
    changefacestate({
      message: 'testface'
    })
}
  return (
    <div className="App">
      
      <Header />

      <AddPersonForm handleClick={handleClick} testfacestate={testfacestate}/>
      
      <AppBody testface={testface}/>

      
    </div>
  );
}

export default App;
