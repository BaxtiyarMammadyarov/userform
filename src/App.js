import {useState} from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/form/Form';
import Users from './components/users/Users';
import React from 'react';

function App() {
  
  const [list, setList] = useState([{id : "1",fullname : "test",email : "test",password : "test",}]);


  return (
    
      <div className="App">
    
       <div><Form  list = {list}  setList = {setList}/></div> 
       <div><Users list = {list}/></div> 


      </div>
 
   

  );
}

export default App;
