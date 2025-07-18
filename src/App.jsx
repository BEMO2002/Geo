import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import WhoPage from './WhoPage/MainWho';
import MainServices from './ServicesPage/MainServices';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index  element={<HomePage/>} />
      </Route>
      <Route path='/who' element={<Layout/>}>
        <Route index  element={<WhoPage/>} />
      </Route>
      <Route path='/services' element={<Layout/>}>
        <Route index  element={<MainServices/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App
