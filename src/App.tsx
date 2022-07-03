import React from 'react';
import './App.css';

  import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";



import NavbarComp from './components/Navbar';
import Home from './Home';
import SheetData from './SheetData';

function App() {
  return (
    <div className="App">

<Router>
      <NavbarComp/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="sheetdata" element={<SheetData />}></Route>
    </Routes>
  </Router>         
      
    </div>
  );
}

export default App;
