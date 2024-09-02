import React,{useState} from 'react'

const Hero = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        const data = await response.json();

        setResult(data.phishing ? 'Warning: This URL is likely a phishing attempt.' : 'This URL appears to be safe.');
    } catch (error) {
        console.error('Error:', error);
        setResult('An error occurred while checking the URL.');
    }
};

  return (
    <>

      <div className='flex m-4'>
        <img className='border-2' src="src\assets\fish3.gif" alt="fish" />
        <div className=' relative container border-2 w-1/2 mx-auto flex flex-col items-center gap-16 p-5'>

          <h1 className='text-center font-bold text-3xl underline-offset-8 underline text-red-500 font-amatic'>Phishing Detection</h1>
          <div className="logo flex  text-green-500 font-bold text-3xl">SafeGuard
            <span><img className='w-10' src="src\assets\lock2.gif" alt="lock" /></span>
          </div>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto  w-full  absolute top-48">
            <div className="mb-5 mt-10 flex gap-5 w-full">

              <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter URL:" required />


              <button type="submit"  className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Submit</button>
            </div>
          </form>

        </div>



      </div>
    </>
  )
}

export default Hero
