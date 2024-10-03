import React, { useState } from 'react';
// import bgImg from '../assets/fb2.gif';
// import bgImg2 from '../assets/ph1.gif';
// import bgImg1 from '../assets/i1.gif';
import './Hero.css'; 
import loaderGif from '../assets/cyber-security.gif'; // Import the loader GIF

const Hero = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [isPhishing, setIsPhishing] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start the loader

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      });
      const data = await response.json();
      
      setResult(data.phishing == 1 ? 'Warning: This URL is likely a phishing attempt.' : 'This URL appears to be safe.');
      setIsPhishing(data.phishing === 1);
      setTimeout(() => {
        setUrl('');
        setResult(null);
      }, 10000);

      

    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while checking the URL.');
      setIsPhishing(false);
    } finally {
      setLoading(false); // Stop the loader
    }
  };

  return (
    <>
      <div className=' Home mb-32 flex m-4 mt-32 justify-center ml-20 min-h-[450px]   '>
        {/* <img  className='bg-no-repeat h-full ' src="src\assets\fish5.gif" alt="fish" /> */}
        {/* or */}
        {/* <img style={{ backgroundImage: `url(${bgImg})` }} className='bg-no-repeat h-full border-2' src="src\assets\fish3.gif" alt="fish" /> */}
        <div className='bg-no-repeat bg-right-bottom relative container  w-1/2 mx-auto flex flex-col items-center gap-16 p-5 pl-44  pt-24  '>
          <h1 className='text-center font-bold text-3xl underline-offset-8 underline text-yellow-500'>Phishing Detection</h1>
          <div className="logo flex text-blue-500 font-bold text-3xl">SmartGuard
            <span><img className='w-10' src="src\assets\lock2.gif" alt="lock" /></span>
          </div>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto w-full absolute top-80">
            <div className="mb-5 mt-10 flex gap-5 w-full">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                id="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter URL:"
                required
              />
              <button
                type="submit"
                className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Analyze
              </button>
            </div>
          </form>

          {/* {loading && (
            <div className="loader-circle absolute top-80"></div>
          )} */}
          {loading && (
            <div className="absolute top-[450px]">
              <img src={loaderGif} alt="Loading..." className="w-24 h-24" />
            </div>
          )}

          {result && (
            <div className={`result absolute top-[450px] pl-5 text-2xl font-bold ${isPhishing ? 'text-red-500' : 'text-green-500'}`}>
              {result}
            </div>
          )}
        </div>
        <img  className='bg-no-repeat w-[1000px] h-full ' src="src\assets\bag1.png" alt="fish" />

      </div>
      <hr className='h-3  w-full bg-red-600' />
    </>
  );
};

export default Hero;
