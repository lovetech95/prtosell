import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Donhang from './Components/Donhang/Donhang';
import Giohang from './Components/Giohang/Giohang';
import Profile from './Components/Profile/Profile';
import Details from './Components/Product/Details';

function App() {
  return (
    <div className="App">
        <Navbar />
          <Routes>
              <Route path="./" exact element={<Content />} ></Route>
              <Route path="./Donhang" element={<Donhang />} ></Route>
              <Route path="./Giohang" element={<Giohang />} ></Route>
              <Route path="./Profile" element={<Profile />} ></Route> 
              <Route path="./Product/:id" exact element={<Details />} ></Route>                  
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
