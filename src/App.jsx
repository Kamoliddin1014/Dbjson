import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import MyOpen from './components/MyOpen';
import HistoryApp from './components/HistoryApp'; 
import MyCards from './components/MyCards';
import './App.css';

function App() {


  return (
    <>

      <BrowserRouter>
        <MyNavbar/>
      <Routes>
      
        <Route path='/' element={<MyOpen/>}></Route>
        <Route path='/app' element={<HistoryApp/>}></Route>
        <Route path='/mycards' element={<MyCards/>}></Route>

      </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
