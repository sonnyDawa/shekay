import React from 'react';
import { useNavigate } from 'react-router-dom';

const Freeplan = () => {
    const navigate = useNavigate()

    const company = (e) =>{
        e.preventDefault()
        const spinner = document.getElementById("loading")
        const signupSecondPage = document.getElementById("signup2nd")
        const signup = document.getElementById("signUpContainerpage")
        const loading = document.getElementById("loading")
        const lastpage = document.getElementById("signUpContainerlast")

       
    
    
      
        setTimeout(() => {
            
            
         
         signup.style.width=(0)
         loading.style.zIndex=(100)
         loading.style.width=("50%")
    
         setTimeout(() => {
              
    
              setTimeout(() => {
                 navigate("/signup")
              }, 3000);
         }, 3000);
    
        
     
         
    }, 1000);
       
    }
   
      const myself = (e) =>{
       e.preventDefault()
       const spinner = document.getElementById("loading")
       const signupSecondPage = document.getElementById("signup2nd")
       const signup = document.getElementById("signUpContainerpage")
       const loading = document.getElementById("loading")
       const lastpage = document.getElementById("signUpContainerlast")
   
      
   
   
     
       setTimeout(() => {
           
           
        
        signup.style.width=(0)
        loading.style.zIndex=(100)
        loading.style.width=("50%")
   
        setTimeout(() => {
             
   
             setTimeout(() => {
                navigate("/free/employer")
             }, 3000);
        }, 3000);
   
       
    
        
   }, 1000);
      
   }  
    return (
        <div>
              <div className='signup-page '>
    
                         
    <div className='flex_ '>
    <div className='leftside__img-signup' >
<img className='leftside__imgsignup' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2FSign%20up-cuate.svg?alt=media&token=ec81cc05-0629-49f8-a769-659ab18cdc5c" alt="" />
</div>
    
<div className="rightside__img-signup   bg-black p-16">     
<div className='flex items-center justify-center min-h-screen' id='loading'>

<div style={{borderTopColor:"transparent",width:"70px",height:70}} className="w-8  border-4 border-blue-500 rounded-full animate-spin"></div>
{/* <p className="ml-3" style={{fontSize:"30px"}}>Proccessing...</p> */}
</div>

    
    <form id="signUpContainerpage" className=''>
   
         <div className='signup__btns '>
         <span class="text-primary font-semibold text-lg block mb-4 plancolor ">
               Free Plan
               </span>
              <h1 className='mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl middle  planpadding'>Choose your Account type</h1>
         {/* <GoogleButton
         label="Sign Up with google"/> */}
         </div>
    
 
    
         <div className='signup__wrapper'>
                 <button  onClick={myself} className="hireme_btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize">Sign Up as an employer</button>
<br />
        

         </div>
         <div className='signup__wrapper'>
          <button  onClick={company} className="hireme_btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize">sign up as a job seeker</button>

              
            
         </div>
      

    </form>
    </div>
    </div>
    </div>
        </div>
    );
}

export default Freeplan;
