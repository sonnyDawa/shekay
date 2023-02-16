import React from 'react';
import {info} from "../HomePage/file"
import { Link } from 'react-router-dom';

const Items = () => {
    return (
        <div className='steps'>
           <h1 className='step__header'>Three steps  you need to follow to get a job</h1>
           <div class="py-16 " >  
    <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">Sign up</h3>
                    <p class="mb-6 capitalize">fill in your name as it appears on your passport or identification card(id). make sure the email address you insert is formal. we discourage the usage of words other than your full name.</p>
                    
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/shekay-a0ef0.appspot.com/o/undraw_welcome_cats_thqn.svg?alt=media&token=95041a11-2ec9-4c04-a442-e218ea783abd" class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">Create a profile</h3>
                    <p class="mb-6">Complete all the required questions. Make sure you represent yourself well for this is viewed by potential employers</p>
                    
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/shekay-a0ef0.appspot.com/o/undraw_personal_information_re_vw8a.svg?alt=media&token=32d3e041-9c94-44e1-832d-e11670567701" class="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">Apply</h3>
                    <p class="mb-6">Whenever there is a job vacancy that fits your skills and expertise, we will notify you. All you have to do is submit all the required documents (CV, application letter, reference letters).</p>
                    
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/shekay-a0ef0.appspot.com/o/undraw_updated_resume_re_7r9j.svg?alt=media&token=d03438e1-406b-43e7-acd8-46599b355695" class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
        </div>
    </div>
</div>
           
           
<div>
        <Link to="/price">
        <button
        class="hirebtn py-2 px-4 bg-transparent text-white font-semibold border border-black-600 rounded hover:bg-black hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Apply for a job</button></Link>
</div>
           
        </div>
    );
}

export default Items;