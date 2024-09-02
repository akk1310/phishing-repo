import React from 'react'
// import { Link } from "react-scroll";
import { Link } from "react-scroll";

function Navbar() {
    const navItems = [
        {
          id: 1,
          text: "Home",
        },
        {
          id: 2,
          text: "Products",
        },
        {
          id: 3,
          text: "Phishing Guide",
        },
        {
          id: 4,
          text: "ContactUs",
        },
       
      ];
    return (
        <>
        
            <div className='navbar fixed max-w-screen  left-0 right-0 top-0 z-10 flex items-center h-20 justify-around bg-white border-b-2'>

                <div className='logo text-3xl flex items-center text-green-500 font-bold mr-96 cursor-pointer'>
                    SmartGuard
                    <span><img className='w-10' src="src\assets\lock2.gif" alt="lock" /></span>
                </div>
                <div className='nav ml-48'>
                    <ul className='flex gap-10 text-lg font-bold items-center justify-center' >
                    {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer hover:border-b-2 border-red-500"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
                    </ul>
                </div>
            </div>
        
        </>
    )
}

export default Navbar
