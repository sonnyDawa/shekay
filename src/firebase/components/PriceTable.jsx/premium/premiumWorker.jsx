import React,{useState} from 'react';
import { app } from '../../../firebase';
import { getFirestore,doc,collection ,setDoc, addDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { getStorage } from 'firebase/storage';
import { UseAuth } from '../../../../context/context';
import GoogleButton from 'react-google-button';
import { MultiSelect } from 'react-multi-select-component';
import { CountryDropdown,RegionDropdown  } from 'react-country-region-selector';
import { ref,uploadBytesResumable ,getDownloadURL} from 'firebase/storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../../firebase';
import { auth } from '../../../firebase';

const PremiumWorker = () => {
    const [lastname,setLastName] = useState(null)
    const [country,setCountry] = useState(null)
    const [jobTitle,setjobTitle] = useState(null)
    const [jobStudy,setjobStudy] = useState(null)
    const [EmploymentField,setEmploymentField] = useState(null)
    
    const [recentcompany,setRecentCompany] = useState(null)
    const [region,setRegion] = useState(null)
    const [password,setPassword] = useState(null)
    const [confirmPassword,setConfirmPassword] = useState(null)
    const [gender,setGender] = useState(null)
    const [email,setEmail] = useState(null)
    const [phoneNumber,setPhoneNumber] = useState(null)
    const [governmentId,setGovernmentId] = useState([])
    const [profilePhoto,setProfilePhoto] = useState(null)
    const [firstName,setFirstName] = useState(null)
    const [birthDate,setBirthDate] = useState(null)
    const [storagetext,setStorageText] = useState(null)
    const [storageError,setStorageError] = useState(null)
    const [passLength,setPassLength] = useState(null)
    const [passMatch,setPassMatch] = useState(null)
    const [uid,setUid] = useState("")
    const [progress,setprogress] = useState("")
    const storage = getStorage(app)
   const firestore = getFirestore(app)
   const navigate = useNavigate()
   const {createUser,users} = UseAuth();
   const [selected, setSelected] = useState([]);
   const plan = "Premium"


         
   const options = [
    { label: "Amharic ", value: "Amharic" },
    { label: " Oromo  ", value: " Oromo " },
    { label: "Tigrigna ", value: "Tigrigna"},
  ];

   function passwordFunction(e){
     
    setConfirmPassword(e.target.value)
    if (password == confirmPassword){
         setPassMatch("")
    }

}

function passwordLength(e){
    const signup = document.getElementById("signUpContainerpage")
    setPassword(e.target.value)
    console.log(password)
    
   
   
}

const handleSubmit = (e) =>{
    e.preventDefault()
    const spinner = document.getElementById("spinner")
    const signup2ndpage = document.getElementById("signup2nd")
    const signup = document.getElementById("signUpContainerpage")
    const loading = document.getElementById("loading")
    const signUpContainerlast = document.getElementById("signUpContainerlast")

    // if (password === confirmPassword){
            
    setTimeout(() => {
       
       
    
         signup.style.width=(0)
         loading.style.zIndex=(100)
         loading.style.width=("50%")

         setTimeout(() => {
              

              setTimeout(() => {
                   loading.style.zIndex=(-100)
                   loading.style.width=(0)
                   signup2ndpage.style.width=("50%")
                   signup2ndpage.style.zIndex=(100)
              }, 3000);
         }, 3000);

        
     
         
    }, 1000);
  

    // }


// // 
//      else{
//           setPassMatch("password does not match")
        
//      }
   



   

}



const submit = (e)=>{
    const reff = ref(storage, `governmentsonny/${profilePhoto.name}`)
     // const uploadImage= uploadBytesResumable(reff,profilePhoto)
   
     const uploadImage= uploadBytesResumable(reff,profilePhoto)
     e.preventDefault();
     createUserWithEmailAndPassword(auth, email, password)
     .then((credentials=>{
 
       uploadImage.on('state_changed', 
       (snapshot) => {
         // Observe state change events such as progress, pause, and resume
         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         setprogress(progress)
 
       }, 
       (error) => {
         console.log(error)
       }, 
       () => {
         // Handle successful uploads on complete
         // For instance, get the download URL: https://firebasestorage.googleapis.com/..
         
       //   let authKey = "AUTH_KEY";
 
                  getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
 
       
           setDoc(doc(firestore, "PremiumWorkers",credentials.user.uid), {
             
        paid:false,                
        active:false,
             plan:plan,
             firstName:firstName,
             lastname:lastname,
             email:email,
             birthDate:birthDate,
             phoneNumber:phoneNumber,
           governmentId:downloadURL,
            gender:gender,
            // FieldOfStudy:jobStudy,
            // jobTitle:jobTitle,
            // EmploymentField:EmploymentField,
            // recentcompany:recentcompany,
            region:region,
            birthDate:birthDate,
            uid:credentials.user.uid
            
             
      }).then(setDoc(doc(firestore, "TotalUsers",credentials.user.uid),{
        paid:false, 
        active:false,

        plan:plan,
        firstName:firstName,
        lastname:lastname,
        email:email,
        birthDate:birthDate,
        phoneNumber:phoneNumber,
      governmentId:downloadURL,
       gender:gender,
       // FieldOfStudy:jobStudy,
       // jobTitle:jobTitle,
       // EmploymentField:EmploymentField,
       // recentcompany:recentcompany,
       region:region,
       birthDate:birthDate,
       uid:credentials.user.uid
       

      })
               ).then(navigate("/premium/checkout")).catch(e=>(console.log(e.message))) 
 
 
 
      })
           
       }
 
       
      
  )})
 
 
           
    
         
        
       
    
   )
   
     

    
   };

   function handleBackLast(e){
    e.preventDefault()
    const spinner = document.getElementById("spinner")
    const signup2ndpage = document.getElementById("signup2nd")
    const signup = document.getElementById("signUpContainerpage")
    const loadingg = document.getElementById("loading")
    const signUpContainerlastt = document.getElementById("signUpContainerlast")

    setTimeout(() => {
       
       
    
         signUpContainerlastt.style.width=(0)
         signUpContainerlastt.style.zIndex=(-200)
         loadingg.style.zIndex=(100)
         loadingg.style.width=("50%")

         setTimeout(() => {
              

              setTimeout(() => {
                   loadingg.style.width=(0)
                   loadingg.style.zIndex=(0)
                   signup2ndpage.style.zIndex=(100)
                   signup2ndpage.style.width=("50%")
              }, 1000);
         }, 1000);

        
     
         
    }, 1000);

}


function handleBackSecond(e){
    e.preventDefault()
    const spinner = document.getElementById("spinner")
    const signup2ndpage = document.getElementById("signup2nd")
    const signup = document.getElementById("signUpContainerpage")
    const loadingg = document.getElementById("loading")
    const signUpContainerlastt = document.getElementById("signUpContainerlast")

    setTimeout(() => {

         signup2ndpage.style.width=(0)
         signup2ndpage.style.zIndex=(-200)
         loadingg.style.zIndex=(100)
         loadingg.style.width=("50%")

         setTimeout(() => {
              

              setTimeout(() => {
                   loadingg.style.width=(0)
                   loadingg.style.zIndex=(0)
                   signup2ndpage.style.width=(0)
                   signup2ndpage.style.zIndex=(-10)
                   signup.style.zIndex=(100)
                   signup.style.width=("100%")
                   
              }, 1000);
         }, 1000);

        
     
         
    }, 1000);

}
   
const handleSubmitLast = (e) =>{
    e.preventDefault()
    const spinner = document.getElementById("loading")
    const signupSecondPage = document.getElementById("signup2nd")
    const signup = document.getElementById("signUpContainerpage")
    const loadingg = document.getElementById("loading")
    const lastpage = document.getElementById("signUpContainerlast")

//      // if (password === confirmPassword && password > 8){
            
    setTimeout(() => {
       
       
    
         signupSecondPage.style.width=(0)
         signupSecondPage.style.zIndex=(-200)
         spinner.style.zIndex=(100)
         spinner.style.width=("50%")

         setTimeout(() => {
              

              setTimeout(() => {
                   spinner.style.width=(0)
                   spinner.style.zIndex=(0)
                   lastpage.style.zIndex=(100)
                   lastpage.style.width=("50%")
              }, 3000);
         }, 3000);

        
     
         
    }, 1000);
}

    return (
        



<div className='signup-page'>
               
               <div className='flex_ flexsignup'>
           
               <div className='leftside__img-signup flexsignup-img' >
<img className='leftside__imgsignup' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2FSign%20up-cuate.svg?alt=media&token=ec81cc05-0629-49f8-a769-659ab18cdc5c" alt="" />
</div>
<div className="rightside__img-signup signUpContainerpage   bg-black p-16">
<div className='flex items-center justify-center min-h-screen' id='loading'>
   
    <div style={{borderTopColor:"transparent",width:"70px",height:70}} className="w-8  border-4 border-blue-500 rounded-full animate-spin"></div>
    {/* <p className="ml-3" style={{fontSize:"30px"}}>Proccessing...</p> */}
</div>



<form onSubmit={handleSubmit} id="signUpContainerpage" >
<span class="text-primary font-semibold text-lg block mb-4 plancolor paddingtopbot">
               Premium Worker
               </span>
    <div className='flex flexname'>
        <div className="mb-6 flexhalf">
            <label htmlFor="first_name" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abebe"onChange={e=>setFirstName(e.target.value)} />
        </div>

        <div className="mb-6 flexhalf">
            <label htmlFor="last_name" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Solomon" onChange={e=>setLastName(e.target.value)} />
        </div>
        </div>
        <div className="mb-6">
            
            <label htmlFor="company" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Birth Date</label>
           
      <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={e=>setBirthDate(e.target.value)}/>
                        
                      </div>   
        <div className="mb-6"> 
            <label htmlFor="phone" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"onChange={e=>setPhoneNumber(e.target.value)} />
        </div>
        
        {/* <div>
            <label htmlFor="website" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website URL</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" />
        </div>
        <div>
            <label htmlFor="visitors" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unique visitors (per month)</label>
            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
        </div> */}
    <div className="mb-6">
        <label htmlFor="email" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input onChange={e=>setEmail(e.target.value)}type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />

    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
       
        <input onChange={e=>setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
        {passLength &&  <p className='error capitalize block mb-2 text-sm  capitalize'><i className="fa-solid fa-triangle-exclamation "></i> Password Must be equal to 8.</p>}
    </div> 
    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
        <input onChange={e=>passwordFunction(e)}type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
   {passMatch &&      <p className='error capitalize block mb-2 text-sm  capitalize'><i className="fa-solid fa-triangle-exclamation "></i> Please enter the same password.</p>
   }
    </div> 
    {/* <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div> */}
    <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
</form>


{/* <!-- This is an example component --> */}
<form id="signup2nd" className='p-16'>

    <div className="mb-6">
        <label  className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Photo</label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setProfilePhoto(e.target.files[0])}className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>


    
</div>
    
    
    </div> 

    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Government Id </label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setGovernmentId(e.target.files[0])} className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>


    
</div>
    
    
    </div> 

    <div className='mb-6'>
            <label htmlFor="last_name" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Region</label>
            <RegionDropdown
                         classes="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        country="Ethiopia"
                        value={""}
                        onChange={value=>{setRegion(value)}}
                        /></div>
    <div className="mb-6">
    <label  htmlFor="password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Language</label>
   

      <MultiSelect
      
      className='bg-gray-50  text-gray-900'
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select your language"
        
      />
       
   
   
   
    </div> 


    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400 capitalize">I filled out the fields above according to my government ID.</label>
    
    </div>
    <div className="flexsignup">
    <button  onClick={handleBackSecond} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize margin">Back</button>
    
    <button  onClick={handleSubmitLast} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>

    </div>
   </form>




<form  id="signUpContainerlast"  className='p-16 bg-black'>
    <div className="grid gap-6 mb-6 lg:grid-cols-2">
   


       
   
   
   
    </div> 
    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Field of study</label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setjobStudy(e.target.value)} className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"  type="text"/>


    
</div>
    
    
    </div> 

    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Field of study</label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setjobStudy(e.target.value)} className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"  type="text"/>


    
</div>
    
    
    </div> 


    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recent company that you worked for</label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setRecentCompany(e.target.value)} className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"  type="text"/>


    
</div>
    
    
    </div> 


 


    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400 capitalize">I filled out the fields above according to my government ID.</label>
    </div>
    <div className="flexsignup">
    <button  onClick={handleBackLast} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize margin">Back</button>

<button  onClick={submit}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize">Sign up</button>
{progress &&    <div class="w-full bg-gray-200 rounded-full padding-progress">
  <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width:progress + "%"}}> {progress}</div>
</div>}
    </div>
    </form>
</div>


</div>     
</div>
       
    );
}

export default PremiumWorker;
