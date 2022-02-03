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
              <Route path="/practice2sell/" exact element={<Content />} ></Route>
              <Route path="/practice2sell/Donhang" element={<Donhang />} ></Route>
              <Route path="/practice2sell/Giohang" element={<Giohang />} ></Route>
              <Route path="/practice2sell/Profile" element={<Profile />} ></Route> 
              <Route path="/practice2sell/Product/:id" exact element={<Details />} ></Route>                  
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
