import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faqs from './components/Faqs'
import ContactUs from './components/ContactUs'
import Products from './components/Products'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app absolute inset-0  -z-10 min-h-screen h-screen w-full bg-blue-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />
      <Hero />
      <Products />
      <Faqs />
      <ContactUs />

    
      
 </div>
  )
// return (
//   <Layout>
//     <Navbar />
//     <Hero />
//     <Products />
//     <Faqs />
//     <ContactUs />
//   </Layout>
// );
}

export default App
