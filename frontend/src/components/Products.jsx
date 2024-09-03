import React from 'react';
import bgImg from '../assets/bg9.jpeg'
import bgImg1 from '../assets/pa.png'
import bgImg2 from '../assets/workprog.gif'


function Products() {
  return (
    
    <div  style={{backgroundImage:`url(${bgImg})`}} className="border-2 relative h-screen Products py-12 bg-gray-100">
      <div className="max-w-7xl mb-36 flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
        

        <h2 className="text-5xl text-red-600 bg-green-500 p-2 mx-auto border-2 w-96  text-center font-bold  mb-8">Our Products</h2>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="product-card bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">Phishing Awareness Website</h3>
            <p className="text-gray-700 mb-4">
              Our comprehensive website provides detailed information and resources to help users identify and avoid phishing scams.
            </p>
            <img 
              className="w-full mb-4 rounded-lg" 
              src={bgImg1} 
              alt="Phishing Awareness Website" 
            />
            <a 
              href="./LearnPage/learn-page.html" 
              target='_blank'
              className="text-indigo-600 hover:underline"
            >
              Learn More
            </a>
          </div>

          <div className="product-card bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-green-600">Phishing Protection Browser Extension</h3>
            <p className="text-gray-700 mb-4">
              Our browser extension helps protect users from phishing attempts by alerting them to suspicious websites and emails.
            </p>
            <img 
              className="w-80 mb-4 rounded-lg mx-auto border-2 " 
              src={bgImg2} 
              alt="Phishing Protection Browser Extension" 
            />
            <a 
              href="https://example.com/browser-extension" 
              className="text-green-600 hover:underline"
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
      <hr  className='h-2  w-full bg-yellow-500'/>
    </div>
    
  );
}

export default Products;
