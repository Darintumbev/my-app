import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom'

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Head } from './components/Head';
import { HeroBgBox } from './components/HeroBgBox';
import { SliderSection } from './components/SliderSection';
import { ServiceSection } from './components/ServiceSection';
import { AboutSection } from './components/AboutSection';
import { WhySection } from './components/WhySection';
import { TeamSection } from './components/TeamSection';
import { ClientSection } from './components/ClientSection';
import { Info_section } from './components/Info_section';
import { Mega } from './components/Mega';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Mega/>} />
      <Route path='/about' element={<Header/>} />
       
    </Routes>
    
  );
}

export default App;
