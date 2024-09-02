import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bgImg from '../assets/form.jpg'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/awngmmrb", userInfo);
      toast('✅ Message has been sent', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // toastId: 'success1'
        
        
        
        });
    } catch (error) {
      console.log(error);
      toast('❌ Error sending the message', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // toastId: 'success1'
        
        
        
        });
    }
  };
  return (
    <>
    <hr  className='h-2 w-full bg-green-600'/>
    <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                containerId="containerA"
               
            />
            {/* Same as */}
            <ToastContainer />
      <div
        style={{backgroundImage:`url(${bgImg})`}}
        name="Contactus"
        className="  ContactUs pb-44 min-w-full  max-w-screen-3xl container mx-auto  "
      > 
        <p className="text-center text-gray-500 pt-28">Get in touch</p>
        <h1 className="text-3xl  mb-4 text-center">Contact Us</h1>
        <span className="flex justify-center">Please fill out the form below to contact me</span>
        <div className=" flex flex-col items-center justify-center mt-5 md:my-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/adryrlka"
            // method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Message"
              />
              {errors.message && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="flex justify-between">

            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-600 duration-300"
              >
              Send
            </button>
            <button target="_blank" className="bg-black text-sm text-white rounded-xl px-3 py-2 hover:bg-slate-600 duration-300">
            <a target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
            dev21comp@student.mes.ac.in
            </a>
               </button>
            
            </div>
          </form>

        </div>
          <div className='footer flex justify-center p-6'>
      <p>&copy; {new Date().getFullYear()} Smart Guard. All rights reserved.</p>
    </div>
      </div>
    </>
  );
}

export default Contact;
