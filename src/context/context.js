import React,{createContext,useContext,useState,useEffect,useReducer} from 'react';
import { app } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { auth ,} from '../firebase/firebase';
import { createUserWithEmailAndPassword,onAuthStateChanged,getAuth,signOut, signInWithEmailAndPassword} from 'firebase/auth';
import { addDoc, doc,setDoc ,collection, getFirestore, getDoc,onSnapshot} from 'firebase/firestore';
import { getDownloadURL, getStorage, listAll, uploadBytesResumable, uploadString ,ref, uploadBytes} from 'firebase/storage';
import { async } from '@firebase/util';
import { Navigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { Firestore } from 'firebase/firestore';


 export const UserContext = createContext();
 const Context = ({children}) => {
    const [lastname,setLastName] = useState(null)
    const [progress,setprogress] = useState(null)
    const [paymentMethod,setpaymentProcessor] = useState(null)
    const [active,setactive] = useState(null)


    const [region,setregion] = useState(null)
    const [confirmPassword,setConfirmPassword] = useState(null)
    const [email,setEmail] = useState(null)
    const [phoneNumber,setPhoneNumber] = useState(null)
    const [governmentId,setGovernmentId] = useState(null)
    const [firstName,setFirstName] = useState(null)
    const [users,setuser] = useState(null)
    const [birthDate,setBirthDate] = useState(null)
    const [plan,setplan] = useState(null)
    const [storageError,setStorageError] = useState(null)
    const [paymentInfo,setpaymentInfo] = useState(null)
    const [authtext,setAuthText] = useState([])
    const [authError,setAuthError] = useState(null)
    const [paid,setpaid] = useState(null)
    const [companyname,setcompanyname] = useState(null)
    const [Companyemail,setCompanyemail] = useState(null)



    const [messageSent,setmessageSent] = useState([])
  const [chats, setChats] = useState([]);

    const [uid,setUid] = useState(null)
    const [photo, setPhoto] = useState(null)
    const db = getFirestore()

    const ref = collection(db, "activityRecent")
    const activityRef = collection(db, "Authentication")

  
   
   
   
   const firestore = getFirestore(app)
   const storage = getStorage();


   const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            users.uid > action.payload.uid
              ? users.uid + action.payload.uid
              : action.payload.uid + users.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);


  


  //  const createIndividualUser = (email, password,firstName,uploadImage,reff,downloadImg,plan ,lastname,birthDate,phoneNumber,governmentId,storageRef,gender,img,jobTitle,EmploymentField,recentcompany,region) => {




  
    
const auth = getAuth();


const user = auth.currentUser;

const createCompany = (Companyemail,  companyPassword,Companystatus,storageRef) => {

};










const createUser = (email, password,firstName,lastname,birthDate,profilePhoto, uploadImage,phoneNumber,governmentId,storageRef,gender,img,jobTitle,EmploymentField,recentcompany,region) => {
  // createUserWithEmailAndPassword(auth, email, password)
  
  // .then((credentials=>{
 
 
 
  //   // uploadImage.on('state_changed', 
  //   // (snapshot) => {
  //   //   // Observe state change events such as progress, pause, and resume
  //   //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //   //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //   //   console.log('Upload is ' + progress + '% done');
  //   // //   switch (snapshot.state) {
  //   // //     case 'paused':
  //   // //       console.log('Upload is paused');
  //   // //       break;
  //   // //     case 'running':
  //   // //       console.log('Upload is running');
  //   // //       break;
  //   // //   }
  //   // }, 
  //   // (error) => {
  //   //   console.log(error)
  //   // }, 
  //   // () => {
  //   //   // Handle successful uploads on complete
  //   //   // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  
  //   // }
  // })
    

  // )


};
// useEffect(() => {
//   const getChats = () => {
   

//     return () => {
//       unsub();
//     };
//   };

//   users.uid && getChats();
// }, [users.uid]);


 const signIn = (email, password) =>  {
  return signInWithEmailAndPassword(auth, email, password)
 }

const logout = () => {
    return signOut(auth)
}

useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
    //  setcred(uid)
    console.log(uid)
      setuser(user);
      onSnapshot(doc(db, "TotalUsers", uid),(snapshot)=>{
        let recent = []
        // snapshot.forEach(item=>{
            recent.push({...snapshot.data()})
       
            recent.map(details=>{
             const {firstName,lastname,phoneNumber,governmentId,CompanyName,Companyemail,email,paid,plan,region,birthDate,PaymentMethod,active,processorInfo} = details
             setFirstName(firstName)
             setLastName(lastname)
             setPhoneNumber(phoneNumber)
            setPhoto(governmentId)
             setEmail(email)
             setregion(region)
             setBirthDate(birthDate)
             setpaymentProcessor(PaymentMethod)
             setpaymentInfo(processorInfo)
             setpaid(paid)
             setactive(active)
             setplan(plan)
             setcompanyname(CompanyName)
             setCompanyemail(Companyemail)

             
            // })
      

        })
 

  });

      

     
      
      // ...
    } else {
      console.log("logged out")
      
    }
  });

  
    

  return () => {
    unsubscribe();
  };
}, [users]);

useEffect(() => {
  (async()=>{

  })
   ()
  }, [])





const logOut = ()=>{
  signOut(auth)
}



    
   
  
 return(
    <UserContext.Provider value={{createUser,users,paymentMethod,companyname,Companyemail,plan,active,paid,paymentInfo,chats,authtext,authtext, dispatch,region,birthDate,uid,photo,firstName,lastname,email,signIn,createCompany,logOut,phoneNumber,birthDate}}>
    {children}
  </UserContext.Provider>
 )
}



export const UseAuth = () => {
    return useContext(UserContext);
  };

  export default Context