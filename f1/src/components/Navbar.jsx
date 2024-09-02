import React from 'react'


function Navbar() {
    return (
        <>
            <div className='navbar flex items-center h-20 justify-around bg-white border-b-2'>

                <div className='logo text-3xl flex items-center text-green-500 font-bold mr-96 cursor-pointer'>
                    SafeGuard
                    <span><img className='w-10' src="src\assets\lock2.gif" alt="lock" /></span>
                </div>
                <div className='nav ml-48'>
                    <ul className='flex gap-10 text-lg font-bold items-center justify-center' >
                        <li className='hover:scale-110'><a href="#">Home </a> </li>
                        <li className='hover:scale-110'><a href="#">Products</a></li>
                        <li className='hover:scale-110'><a href="#">Blog </a> </li>
                        <li className='hover:scale-110'><a href="#">Contact US</a> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
