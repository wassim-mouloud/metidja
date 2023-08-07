import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Enseignants from './components/Enseignants';
import Galerie from './components/Galerie';
import Programme from './components/Programme';

function App() {
  const [openNav, setOpenNav]= useState(false)
  return (
    <div className="relative overflow-x-hidden">
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <Hero/>
        <Programme/>
        <Enseignants/>
        <Galerie/>
    </div>
  );
}

export default App;
