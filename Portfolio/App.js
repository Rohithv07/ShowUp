import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    
    <main className='bg-styling'>
      
      <Navbar />
      <About />
      <Experience/>
      <Skills />
      <Project />
      <Contact/>
    </main>
    );
}

export default App;
