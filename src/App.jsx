/** @format */

import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Postdetailed from "./components/Postdetailed";
import Profile from "./components/Profile";

function App() {
  return (
    <div className='container w-full dark:bg-slate-700 pt-20 relative'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/detailedpost' element={<Postdetailed></Postdetailed>}></Route>
          <Route path='/user' element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
