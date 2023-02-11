import { async } from '@firebase/util';
import React, { useState ,useEffect} from 'react';
import { UseAuth } from '../../../context/context';
import { db } from '../../firebase';
import { setDoc,doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';

const CheckoutProfessional = () => {
    const telebirr = "0923580987"
    const ComercialBank = "100089839393"
    const Abyssinia = "7383883"
    const cbebirr = "0923580987"

    const [firstname,setfirstname] = useState("")
    const [lastname,setlastname] = useState("")
    const [notes,setnotes] = useState("")
    const [premium,setpremium] = useState(false)

    const [data,setdata] = useState([])
   
    const [paymentProcessor,setpaymentProcessor] = useState("")
    const [ screenshot,setscreenshot] = useState([])

    const {users,paymentMethod,paymentInfo} = UseAuth()



    const [email,setemail] = useState("")
    const [phoneNumber,setphoneNumber] = useState("")


    const submit = document.getElementById("submitCheckout")
    const loading = document.getElementById("loadingCheckout")
    const paymentCheck = document.getElementById("paymentcheck")
    const     waitingpage = document.getElementById("waitingpage")
    const main = document.getElementById("cancel")
    const navigate = useNavigate()


    useEffect(() => {
        
      (async()=>{
     
      })
     ()
    }, []);

    const handleProcess = (e) => {
        e.preventDefault();
        if (paymentProcessor == "commercial bank of ethiopia"){
            updateDoc(doc(db, "ProfessionalWorker", users.uid), {
                PaymentMethod:paymentProcessor,
                paymentName:firstname + " " + lastname,
                paymentPhone:phoneNumber,
                paymentEmail:email,
                processorInfo:ComercialBank
                }).then(
                    updateDoc(doc(db, "TotalUsers", users.uid), {
                        PaymentMethod:paymentProcessor,
                        paymentName:firstname + " " + lastname,
                        paymentPhone:phoneNumber,
                        paymentEmail:email,
                        processorInfo:ComercialBank})
                ).then(
    
            setTimeout(() => {
            
            
         
                submit.style.width=(0)
                loading.style.zIndex=(100)
                loading.style.width=("100%")
      
                setTimeout(() => {
                     
      
                     setTimeout(() => {
                          loading.style.zIndex=(-100)
                          loading.style.width=(0)
                          paymentCheck.style.width=("100%")
                          paymentCheck.style.zIndex=(100)
                     }, 3000);
                }, 3000);
      
               
            
                
           }, 1000))
        }
        else if (paymentProcessor == "Abyssinia Bank"){
            updateDoc(doc(db, "ProfessionalWorker", users.uid), {
                PaymentMethod:paymentProcessor,
                paymentName:firstname + " " + lastname,
                paymentPhone:phoneNumber,
                paymentEmail:email,
                processorInfo:Abyssinia
                }).then(
                    updateDoc(doc(db, "TotalUsers", users.uid), {
                        PaymentMethod:paymentProcessor,
                        paymentName:firstname + " " + lastname,
                        paymentPhone:phoneNumber,
                        paymentEmail:email,
                processorInfo:Abyssinia
            })
                ).then(
    
            setTimeout(() => {
            
            
         
                submit.style.width=(0)
                loading.style.zIndex=(100)
                loading.style.width=("100%")
      
                setTimeout(() => {
                     
      
                     setTimeout(() => {
                          loading.style.zIndex=(-100)
                          loading.style.width=(0)
                          paymentCheck.style.width=("100%")
                          paymentCheck.style.zIndex=(100)
                     }, 3000);
                }, 3000);
      
               
            
                
           }, 1000))
        }
        else if (paymentProcessor == "Telebirr"){
            updateDoc(doc(db, "ProfessionalWorker", users.uid), {
                PaymentMethod:paymentProcessor,
                paymentName:firstname + " " + lastname,
                paymentPhone:phoneNumber,
                paymentEmail:email,
                processorInfo:telebirr
                }).then(
                    updateDoc(doc(db, "TotalUsers", users.uid), {
                        PaymentMethod:paymentProcessor,
                        paymentName:firstname + " " + lastname,
                        paymentPhone:phoneNumber,
                        paymentEmail:email,
                        processorInfo:telebirr})
                ).then(
    
            setTimeout(() => {
            
            
         
                submit.style.width=(0)
                loading.style.zIndex=(100)
                loading.style.width=("100%")
      
                setTimeout(() => {
                     
      
                     setTimeout(() => {
                          loading.style.zIndex=(-100)
                          loading.style.width=(0)
                          paymentCheck.style.width=("100%")
                          paymentCheck.style.zIndex=(100)
                     }, 3000);
                }, 3000);
      
               
            
                
           }, 1000))

        }

        else if (paymentProcessor == "CBE BIRR"){
            updateDoc(doc(db, "ProfessionalWorker", users.uid), {
                PaymentMethod:paymentProcessor,
                paymentName:firstname + " " + lastname,
                paymentPhone:phoneNumber,
                paymentEmail:email,
                processorInfo:cbebirr
                }).then(
                    updateDoc(doc(db, "TotalUsers", users.uid), {
                        PaymentMethod:paymentProcessor,
                        paymentName:firstname + " " + lastname,
                        paymentPhone:phoneNumber,
                        paymentEmail:email,
                        processorInfo:cbebirr})
                ).then(
    
            setTimeout(() => {
            
            
         
                submit.style.width=(0)
                loading.style.zIndex=(100)
                loading.style.width=("100%")
      
                setTimeout(() => {
                     
      
                     setTimeout(() => {
                          loading.style.zIndex=(-100)
                          loading.style.width=(0)
                          paymentCheck.style.width=("100%")
                          paymentCheck.style.zIndex=(100)
                     }, 3000);
                }, 3000);
      
               
            
                
           }, 1000))

        }



    }

    



    function popout(e){
    e.preventDefault();
    // setselectedRecent(id)
        main.style.width=("100%")
        main.style.zIndex=(9100)
    
       
    
    
        }

  function  submitMain (e){
    e.preventDefault();

    setTimeout(() => {
            
            
        main.style.width=(0)
         
        paymentCheck.style.width=(0)
        loading.style.zIndex=(100)
        loading.style.width=("100%")

        setTimeout(() => {
             

             setTimeout(() => {
                  loading.style.zIndex=(-100)
                  loading.style.width=(0)
                navigate("/check")
             }, 3000);
        }, 3000);

       
    
        
   }, 1000)
    }

    function handlecross(){
        main.style.width=(0)
        main.style.zIndex=(-100)
    }



    return (

        <div className='relative' >

<div class="autoo py-10 min-h-screen w-screen antialiased font-medium text-gray-800 bg-slate-100 bg-white" id="cancel">
    <div class="max-w-sm p-2 mx-auto bg-white border-[1px] border-gray-200 cancel" 
   
    >
            <div class="relative p-6">
                <a href="#" onClick={handlecross}  class="absolute top-1.5 right-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer fill-current text-slate-500 hover:text-slate-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                        
                </a>
                <h1 class="text-3xl font-bold">Are you sure you sent the money to the proper account?</h1>
                <p class="text-sm text-gray-500">If you haven't, you could loose your money!!</p>
                
                <div class="flex flex-row mt-6 space-x-2 justify-evenly">
                <a href="#"  onClick={handlecross}class="w-full py-3 text-sm text-center text-white transition duration-150 ease-linear bg-red-600 border border-red-600 rounded-lg hover:bg-red-700">Cancel</a>
                    
                    <a href="#" onClick={submitMain} class="w-full py-3 text-sm font-medium text-center text-white bg-blue-600 border-blue-600 transition duration-150 ease-linear hover:bg-blue-700  border  rounded-lg ">I am Sure</a>
                </div>
            </div>
    </div>
</div>

<div className='flex flex-col items-center justify-center min-h-screen' id='waitingpage'>
<div class="font-semibold text-3xl">
            <p className='mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl'>YOU ARE ALL SET! </p>
            <p className='flex flex-row text-sm font-medium text-gray-400'>Our specialists will now confirm the transaction in less than 24 hours. </p>

          </div>
<img className='videoCheckout' src="https://firebasestorage.googleapis.com/v0/b/logo-2-c33ae.appspot.com/o/Webinar.gif?alt=media&token=b28d5a25-df14-4f28-a987-314ee79d1476" alt="" />

   {/* <p className="ml-3" style={{fontSize:"30px"}}>Proccessing...</p> */}
</div>
    <div id='paymentcheck' class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">


    <div class="relative bg-white px-7 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
      <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
        <div class="flex flex-col items-center justify-center text-center space-y-2">
          <div class="font-semibold text-3xl">
            <p>Send Your Funds to this <span className='lowercase'>{paymentMethod}</span> account </p>
          </div>
          <div class="flex flex-row text-sm font-medium text-gray-400">
            <p>Our specialists will process the transaction in less than 24 hours. </p>
          </div>
        </div>
  
  <h1 className='flex  items-center justify-center mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white'>
  {paymentMethod} - {paymentInfo}


  </h1>
   
  
        <div>
          <form  method="post">
            <div class="flex flex-col space-y-16">
              
            <div class=" mx-auto">
  
  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload the screenshot of the transaction.</label>
  <input onChange={e=>setscreenshot(e.target.files[0])} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
  
  
  </div>
              <div class="flex flex-col">
                <div>
                  <button onClick={popout} class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                  I successfully sent the money.
                  </button>
                </div>
  
          
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    Order Summary




</div>














            <div className='flex items-center justify-center min-h-screen' id='loadingCheckout'>
   
   <div style={{borderTopColor:"transparent",width:"70px",height:70}} className="w-8  border-4 border-blue-500 rounded-full animate-spin"></div>
   {/* <p className="ml-3" style={{fontSize:"30px"}}>Proccessing...</p> */}
</div>
<div id='submitCheckout'>
             <div class="mt-20">
            <h1 class="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">Shekay
                Professional
                Checkout
            </h1>
            </div>
        <div class="container p-12 mx-auto">
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div class="flex flex-col md:w-full">
                 
                    <form class="justify-center w-full mx-auto" method="post" action>
                        <div class="">
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input onChange={(e)=>{setfirstname(e.target.value)}} name="firstName" type="text" placeholder="First Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input onChange={(e)=>{setlastname(e.target.value)}} name="Last Name" type="text" placeholder="Last Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Email"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input onChange={(e)=>{setemail(e.target.value)}}name="Last Name" type="text" placeholder="Email"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div class=" mt-4">


                            <div class="w-full">
	<label for="countries"  class="block mb-3 text-sm font-semibold text-gray-500">Choose the payment provider that suits you</label>
        <select id="countries" onChange={(e)=>{setpaymentProcessor(e.target.value)}} class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
        <option selected>Choose a processor</option>
        <option value="commercial bank of ethiopia">Commercial bank of Ethiopia</option>
        <option value="Abyssinia Bank">Abyssinia Bank</option>
        <option value="Telebirr">Telebirr</option>
        <option value="CBE BIRR">CBE Birr</option>
    </select>

	{/* <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script> */}
    </div>

                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Email"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Phone Number</label>
                                    <input name="Last Name"onChange={(e)=>{setphoneNumber(e.target.value)}} type="tel" placeholder="Phone Number"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                    
                            <div class="relative pt-3 xl:pt-6"><label for="note"
                                    class="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note" onChange={(e)=>{setnotes(e.target.value)}}
                                    class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                            <div class="mt-4">
                                <button
                                     onClick={handleProcess}   class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Process transaction</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                    <div class="pt-12 md:pt-0 2xl:ps-4">
                        <h2 class="text-xl font-bold font-bold text-blue-600 text-md lg:text-3xl purple-text">Order Summary
                        </h2>
                        <div class="mt-8">
                            <div class="flex flex-col space-y-4">
                                <div class="flex space-x-4">
                                    {/* <div>
                                        <img src="https://source.unsplash.com/user/erondu/1600x900" alt="image"
                                            class="w-60"/>
                                    </div> */}
                                    <div>
                                        <h2 class="text-xl font-bold">Shekay Professional</h2>
                                        <span class="text-red-600">Price</span> 99.99 Birr
                                    </div>
                                    <div>
                                  
                                    </div>
                                </div>
                         
                            </div>
                        </div>
                        <div class="flex p-4 mt-4">
                            <h2 class="text-xl font-bold font-bold text-blue-600 text-md lg:text-3xl">Total Amount</h2>
                        </div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Subtotal<span class="ml-2">99.99 Birr</span></div>
                     
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span class="ml-2">99.99 Birr</span></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default CheckoutProfessional;
