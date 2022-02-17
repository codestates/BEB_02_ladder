import './App.css';
import React from 'react'
// import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Team from './components/Team';
import MyCollection from './components/MyCollection';
import OpenSeaFunction from './components/OpenSeaFunction';



function App() {
  return(
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Team></Team>
      <MyCollection></MyCollection>
      <OpenSeaFunction></OpenSeaFunction>
    </div>  
  );
}

export default App;

