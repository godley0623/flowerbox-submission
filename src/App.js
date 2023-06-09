import React from 'react';
import NavBar from './component/NavBar';
import BigImage from './component/BigImage';
import FlowerProducts from './component/FlowerProducts';
import Footer from './component/Footer';
import './App.css';

export default function App() {
  return (
    <div className="grid-container">
        <NavBar/>
        <BigImage/>
        <FlowerProducts/>
        <Footer/>
    </div>
  )
}
