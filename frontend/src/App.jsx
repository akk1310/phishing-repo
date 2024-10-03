import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Faqs from './components/Faqs';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import bgImg from './assets/bgg5.jpg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='py-2 bg-slate-50 ' 
    // style={{ backgroundImage: `url(${bgImg})`,
    // // style={{ backgroundImage: `url(${bgImg})
    // // backgroundSize: 'cover',      // Makes the image cover the div
    // // backgroundPosition: 'center', // Centers the image
    // backgroundRepeat: 'no-repeat'  }}
     >
      <Navbar />
      <Hero />
      <Products />
      <Faqs />
      <ContactUs />
    </div>
  );
}

export default App;
