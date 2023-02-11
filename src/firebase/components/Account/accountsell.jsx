import React from 'react';
import { Link } from 'react-router-dom';

const AccountSell = () => {
    return (
        <div className=''>
                 <header class="min-h-screen getstarted--main ">
        {/* <!-- Navigaiton Bar --> */}
        <nav class="flex items-center py-8 px-14 justify-between">
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-gray-700 ">LandingKit</h1>
          <div class="ml-10">
            <ul class="md:flex space-x-8 hidden ">
              <li><a href="#" class="text-white font-semibold text-white">Magazine</a></li>
              <li><a href="#" class="text-white font-semibold">World</a></li> 
              <li><a href="#" class="text-white font-semibold">Tech</a></li>
              <li><a href="#" class="text-white font-semibold">Health</a></li>
              <li><a href="#" class="text-white font-semibold">Sport</a></li>
            </ul>
          </div>
        </div>
        <div class=" bg-white text-gray-800 lg:flex hidden items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
       <button className='bg-white'>Sign Up </button>
   
        </div>
        </nav>
        {/* <!-- End Navigation Bar --> */}
      
        {/* <!-- Section Hero --> */}
        {/* <!-- Box left --> */}
        <div class="md:flex space-x-16 mt-20 md:mr-0 mr-10">
        <div class="md:flex items-center pl-16 ">
          <div class="">
          <h1 class="lg:text-5xl  font-bold leading-tight text-3xl text-white">Elegant Landing Pages  for your next project</h1>
          <p class="mt-4 text-lg font-normal ">Build your site in a few second based ready-to-use block and section, <br/> it's a lot of fund.</p>
          <div class="py-2 px-4 bg-transparent text-white font-semibold border border-black-600 rounded   hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 bg-white text-gray-800 flex mt-10 w-40 items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
          <button class="text-lg text-md  ">sign up</button>
          <span>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
      </svg>
       </span>
          </div>
         </div>
        </div>
        {/* <!-- Box right --> */}
        <div class="max-w-lg pr-24 md:flex justify-center items-center  hidden">
          <img class="rounded-lg" src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" alt=""/>
        </div>
        </div>
      
        {/* <!--Show Brand --> */}
        {/* <div class="hidden lg:block">
            <ul class="flex mt-32 space-x-36 justify-center">
              <li><a href="#" class="text-2xl font-semibold text-gray-600">Google</a></li>
              <li><a href="#" class="text-2xl font-semibold text-gray-600">UBER</a></li>
              <li><a href="#" class="text-2xl font-semibold text-gray-600">Stripe</a></li>
              <li><a href="#" class="text-2xl font-semibold text-gray-600">Nike</a></li>
              <li><a href="#" class="text-2xl font-semibold text-gray-600">Mashable</a></li>
              <li><a href="#" class="text-2xl font-semibold text-gray-600">Airbnb</a></li>
            </ul>
        </div> */}
      </header>
            
        </div>
    );
}

export default AccountSell;