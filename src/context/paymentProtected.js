import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from './context';
import { Navigate } from 'react-router-dom';
import Nav from '../firebase/components/support/nav';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';

    const PaymentProtect = ({ children }) => {
        const { users,verfied,paid,firstName,lastname,photo, } = UseAuth();
    const navigate = useNavigate("")
    //  let active = false

    function handleLogOut(){

      signOut(auth).then(
          
          navigate("/")
      ).catch(e=>{
          console.log(e.message)
      })
  }
     


        if (!paid) {
          return (
            <main  id='bg'>
              
            <section class="bg-white dark:bg-gray-900">
                    
            <aside className="nav__width ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
<div>
    <div className="-mx-6 px-6 py-4">
        <a href="#" title="home">
        <h1 className='logo w-32'>Logo</h1>
        </a>
    </div>

 <Link to="/dashbord
 ">
 <div className=" text-center">
        <img src={photo} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{firstName} {lastname}</h5>
        <span className="hidden text-gray-400 lg:block">Profile</span>
    </div></Link>

    <ul className="space-y-2 tracking-wide mt-8">
        <li>
            <a href="#" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                    <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                    <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                </svg>
                <span className="-mr-1 font-medium">Dashboard</span>
            </a>
        </li>
        <li>
      <Link to="/hire">
      <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
      <i class="fa-brands fa-hire-a-helper group-hover:text-cyan-600"></i>
                <span className="group-hover:text-gray-700">Hire Professionals</span>
            </a></Link>
        </li>
     <Link to="/message">
     <li>
            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path className="fill-current text-gray-600 group-hover:text-cyan-600" fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                    <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
               
                <span className="group-hover:text-gray-700">Message</span>
            </a>
        </li>
     </Link>

        <Link to="/profile">
        <li>
            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <i class="fa-solid fa-user group-hover:text-cyan-600"></i>
                <span className="group-hover:text-gray-700">Profile</span>
            </a>
        </li>
        </Link>
        <li>
            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path className="fill-current text-gray-600 group-hover:text-cyan-600" fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                <span className="group-hover:text-gray-700">Finance</span>
            </a>
        </li>

   

    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
    <button className="px-4  flex items-center space-x-4 rounded-md text-gray-600 group" onClick={handleLogOut}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span className="group-hover:text-gray-700" >Logout</span>
    </button>
</div>
</ul>
</div>


</aside>

<div className="flex flex-col justify-center center ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        
            <div class="container mx-auto px-6 py-16 text-center">
                <div class="mx-auto max-w-lg">
                <h1 class="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">Our Peers are reviewing the transaction. The transaction will be confirmed soon.</h1>
                <p class="mt-6 text-gray-500 dark:text-gray-300">IN CASE OF DELAY, GET IN TOUCH WITH US HERE.</p>
                <button class="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">Contact Us</button>
                <p class="mt-3 text-sm text-gray-400">No credit card required</p>
                </div>
        
            </div>
             
            </div>
            </section>
        
         
        
       
        
        </main>
          );
        }
    
        return children
      };

export default PaymentProtect;
