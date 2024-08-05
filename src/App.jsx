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
    <div className='container w-full dark:bg-slate-700 pt-20 relative min-h-dvh'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route
            path='/detailedpost'
            element={<Postdetailed></Postdetailed>}
          ></Route>
          <Route path='/user' element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
      <footer className='w-full text-center dark:text-white font-medium text-2xl text-lime-600'>
        {" "}
        <hr />
        <h1 className='py-4'>
          Created By - <a href=''>Anurag</a>
        </h1>{" "}
        <hr />
      </footer>
    </div>
  );
}

export default App;
