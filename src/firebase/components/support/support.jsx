import { setDoc,doc, addDoc, collection } from 'firebase/firestore';
import React, { useState,useEffect } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { UseAuth } from '../../../context/context';
import Nav from './nav';
import { db } from '../../firebase';
import { Navigate, useNavigate } from 'react-router-dom';

const Support = () => {
  const [name,setname] = useState(null)
  const [email,setemail] = useState(null)
  const [uid,setuid] = useState(null)
  const navigate = useNavigate()

const {users} = UseAuth()
  const [message,setmessage] = useState(null)
  const loading = document.getElementById("loadingCheckout")
  const submit = document.getElementById("submit")
  const     waitingpage = document.getElementById("waitingpage")

  useEffect(() => {
        
    (async()=>{
      onAuthStateChanged(auth,user=>{
          if(user){
              setuid(user.uid)
          }
      })
   
    })
   ()
  }, []);

  const send = (e) =>{
    e.preventDefault()
    addDoc(collection(db, 'complaintSubmited'),{
      name:name,
      email:email,
      message:message
    }

    
    ).then(
      loading.style.width=("100%"),
      loading.style.zIndex=(200),
      setTimeout(() => {
      

        submit.style.width=("100%")

      }, 5000)
    ).catch(e=>console.log(e.message))
  }

  function minimize(){
window.location.reload()
      }

    return (
        <div>
            {/* <!-- Tailwind Play: https://play.tailwindcss.com/qIqvl7e7Ww  --> */}
            <Nav/>

            <div className='flex items-center justify-center min-h-screen' id='loadingCheckout'>
   
   <div style={{borderTopColor:"transparent",width:"70px",height:70}} className="w-8  border-4 border-blue-500 rounded-full animate-spin"></div>
   {/* <p className="ml-3" style={{fontSize:"30px"}}>Proccessing...</p> */}
</div>

<div id='submit'>
<div className='align'>
   <i className=" fa-sharp fa-solid fa-xmark text-gray-900" id='cancel' onClick={minimize}></i>
   
   <i class="fa-solid fa-circle-check"></i>
   <h1 className='color-black capitalize'style={{color:"black"}}>Complaint submited successfully</h1>
   </div>
        </div>

               <div className='flex_'>
               
<div className='leftside__img-signup ' >
<img className='bg-white h-full' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2F5124556%5B1%5D.jpg?alt=media&token=648a51b2-651c-420e-85e3-9f9930ca6862" alt="" />
</div>
<div className="rightside__img-signup   bg-black p-16">
<div class="flex min-h-screen marginn justify-start bg-white">

  <div class="mx-auto w-full max-w-lg">
    <h1 class="text-4xl text-blue-700  font-medium">Contact us</h1>
    <p class="mt-3  ">Email us at help@domain.com or message us here:</p>

    <form action="https://api.web3forms.com/submit" class="mt-10">
    
    {/* <!-- This is a working contact form. 
         Get your free access key from: https://web3forms.com/  --> */}

      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="relative z-0">
          <input onChange={e=>setname(e.target.value)} type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div class="relative z-0">
          <input onChange={e=>setemail(e.target.value)} type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div class="relative z-0 col-span-2">
          <textarea onChange={e=>setmessage(e.target.value)}  name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
        </div>
      </div>
      <button onClick={send} type="submit" class="mt-5 rounded-md  bg-blue-700 hover:bg-blue-800 px-10 py-2 text-white focus:ring-4 focus:outline-none focus:ring-blue-300">Send Message</button>

    </form>
  </div>
</div>
</div>
</div>
        </div>
    );
}

export default Support;
