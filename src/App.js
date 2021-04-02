import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import AppBody from './components/AppBody'
import AddPersonForm from './components/AddPersonForm'
import Newcontact from './components/Newcontact'

function App() {
  
  const [messagestate, changemessage] = useState({
    message: null,
    contacts: 23
  });  
  
  var handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    changemessage({ input: event.target.value })
  }
  var handleClick = () => {
    console.log('handleClick()')       
    changemessage({
      message: <Newcontact value={messagestate.input} count={messagestate.contacts}/>
    })
}
  return (
    <div className="App">
      
      <Header />

      <AddPersonForm handleChange={handleChange} handleClick={handleClick}/>
      
      <AppBody message={messagestate.message} text={messagestate.input}/>

      
    </div>
  );
}

export default App;
