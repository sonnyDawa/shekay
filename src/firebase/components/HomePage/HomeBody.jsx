import React from 'react';
import { Link } from 'react-router-dom';

const HomeBody = () => {
    return (
        <div className='homebody'>
       
         <div className="homebody__leftside">

      
         <h1 className='homebody__search--title text-3xl font-semibold text-gray-800 md:text-4xl' style={{color:"black"}}> Hire Expert Professionals for Your business  </h1>
         
    
         <p className=' mt-2 text-sm text-gray-500 md:text-base'>A place where individuals, whether they are experts or marginalised, connect with companies, from start-ups to long-established companies.</p>
        
          {/* <Link to="/signup"> <button className='homebody-getstarted-btn'>Find a job</button></Link>  */}
   <div className="flex">

   <Link  to="/price" ><button   className="homebody-getstarted-btn text-white pad-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply for a job</button>
                </Link>
  
        <Link  to="/employer" ><button   className="homebody-getstarted-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Hire a professional</button>
                </Link>
          
   </div>
         </div>
            
          <div className="homebody__rightside">  <img className='homebody__rightside-img' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2FTeam-pana.svg?alt=media&token=43b2f213-3bd3-4f75-9124-ff4d01043644" alt="" /></div>
         
        </div>
    );
}

export default HomeBody;
