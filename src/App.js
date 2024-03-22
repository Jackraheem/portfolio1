import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Qualifi from './components/Qualifi';
// import Work from './components/work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scrollup from './components/Scrollup';

function App() {
  return (
   <>
   <Header/>

   
   <main className='main'>
    <Home />
   <About />
   <Skills />
   <Qualifi />
   <Testimonials/>
   <Services />
   {/* <Work/> */}
   
   <Contact/>
  
  
   </main>
   <Footer />
   <Scrollup/>
  
  
   </>
      
  );
}

export default App;
