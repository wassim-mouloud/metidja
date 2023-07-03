import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Prometteuses from './sections/Prometteuses';

function App() {
  const [openNav, setOpenNav]= useState(false)
  return (
    <div className="relative overflow-x-hidden">
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <Hero/>
        <Prometteuses/>
    </div>
  );
}

export default App;
