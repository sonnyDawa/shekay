import React from 'react';
import { Link } from 'react-router-dom';

const SetUp = () => {
    return (
        <div style={{backgroundColor:"white"}}>
           <h1 className='step__header' style={{color:"black"}}>How do you post a job vacancy on shekay?</h1>
           <div class="py-16 " >  
    <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900 capitalize">Sign up as an employer</h3>
                    <p class="mb-6 capitalize">The recruiting team of a company creates an account by filling in all the necessary information about the company they are representing.</p>
                    
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/shekay-a0ef0.appspot.com/o/undraw_welcome_cats_thqn.svg?alt=media&token=95041a11-2ec9-4c04-a442-e218ea783abd" class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900 capitalize">Submit a job vacancy</h3>
                    <p class="mb-6">The recruiting team fills in details about the job position and it's requirements, then submits it.</p>
                    
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/shekay-a0ef0.appspot.com/o/undraw_personal_information_re_vw8a.svg?alt=media&token=32d3e041-9c94-44e1-832d-e11670567701" class="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">Posting</h3>
                    <p class="mb-6">After a job vacancy is submitted, it passes through a review process by our experts. We will post it if it passes all requirements.</p>
                    
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/shekay-a0ef0.appspot.com/o/undraw_updated_resume_re_7r9j.svg?alt=media&token=d03438e1-406b-43e7-acd8-46599b355695" class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
        </div>
    </div>
</div>
           
           
<div className='auto'>  <Link  to="/employer" ><button   className="text-white auto  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Hire a professional</button>
                </Link>
</div>
           
        </div>
    
    );
}

export default SetUp;
