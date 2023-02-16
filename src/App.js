import logo from './logo.svg';
import './App.css';
import UploadForm from './firebase/components/uploadForm';
import Progress from './firebase/components/progress';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './firebase/components/Authentication/SignIn';
import SignUp from './firebase/components/Authentication/signUp';
import Home from './firebase/components/HomePage/home';
// import Chat from "./firebase/components/Message/chat"
import Account from './firebase/components/Account/account';

import Hire from './firebase/components/Account/hire';
import  Context  from './context/context';
import AccountDetail from './firebase/components/Account/accountDetail';
import ProtectedRoutes from './context/protectedRoutes';
import SignUpEmployer from './firebase/components/Authentication/signUpEmployer';
import Employee from './firebase/components/Authentication/Employee';
import Company from './firebase/components/Authentication/company';
import Jobs from './firebase/components/Jobs/jobs';
import Accountemployer from './firebase/components/AccountEmployer/accountemployer';
import Signupprice from './firebase/components/PriceTable.jsx/signupprice';
import AccountMain from './firebase/components/Account/accountMain';
import Support from './firebase/components/support/support';
import ActiveUser from './firebase/components/Account/activeUser';
import AboutUs from './firebase/components/HomePage/aboutUs';
import Proffesional from './firebase/components/PriceTable.jsx/professional/proffesional';
import Freeplan from './firebase/components/PriceTable.jsx/free/freeplan';
// import PremiumSignUp from './firebase/components/PriceTable.jsx/premium/premiumSignUp';
import PremiumChoice from './firebase/components/PriceTable.jsx/premium/premiumchoice';
import PremiumSignUp from './firebase/components/PriceTable.jsx/premium/premiumSignUp';
import EmployeePremium from './firebase/components/Authentication/signuppremium';
import EmployeeProfessional from './firebase/components/Authentication/signupPROFESSIONAL.JSX';
import PremiumWorker from './firebase/components/PriceTable.jsx/premium/premiumWorker';
import ProfessionalWorker from './firebase/components/PriceTable.jsx/professional/professionalworker';
import FreePlanWorker from './firebase/components/PriceTable.jsx/free/freeworker';
import ProfessionalChoice from './firebase/components/PriceTable.jsx/professional/professionalchoice';
import FreePlanChoice from './firebase/components/PriceTable.jsx/free/freeplanchoice';
import ProfessionalEmployerCompany from './firebase/components/PriceTable.jsx/professional/professionalEmloyerCompany';
import ProfessionalEmployerMyself from './firebase/components/PriceTable.jsx/professional/ProfessionalEmployerMyself';
import PremiumEmployerMyself from './firebase/components/PriceTable.jsx/premium/PremiumEmployerMyself';
import PremiumEmployerCompany from './firebase/components/PriceTable.jsx/premium/premiumEmployerCompany';
import FreeEmployerCompany from './firebase/components/PriceTable.jsx/free/freeplanEmployerCompany';
import FreeEmployerMyself from './firebase/components/PriceTable.jsx/free/FreeEmployerMyself';
import Checkoutpage from './firebase/components/PriceTable.jsx/checkoutpage';
import Protected from './context/payProtect';
import PaymentCheck from './firebase/components/PriceTable.jsx/paymentCheck';
import PaymentProtect from './context/paymentProtected';
import ProfessiionalCheckout from './firebase/components/PriceTable.jsx/professionalcheckout';
import CheckoutProfessional from './firebase/components/PriceTable.jsx/checkoutProfessional';
import SignuppriceEmployer from './firebase/components/PriceTable.jsx/signuppriceEmployer';
import CheckoutpageCompany from './firebase/components/PriceTable.jsx/premium/premiumCheckoutEmployer';
import CheckoutpageEmployer from './firebase/components/PriceTable.jsx/premium/premiumCheckoutEmployer';
import EmailVervied from './context/emailverfied';

function App() {
  return (

     <>
  
     <BrowserRouter>
      <Routes>
        <Route element={<SignIn /> } path="/signin"/>
        {/* <Route  element={<SignUp/> } path="/signup"/>  */}
        {/* <Route  element={<Chat/> } path="/message"/>  */}
        <Route  element={<AboutUs/> } path="/aboutus"/> 
        <Route  element={
           <Protected>
           <PaymentCheck/>
          </Protected>
      } path="/check"/> 

        <Route  element={<SignuppriceEmployer/> } path="/employer"/> 
        <Route  element={
          <PaymentProtect>         <ProtectedRoutes>
           <Accountemployer/>
          </ProtectedRoutes>
          </PaymentProtect>
  
      } path="/dashbord"/> 
        <Route  element={<Employee/> } path="/individual"/> 
        <Route  element={<Company/> } path="/company"/> 
        <Route  element={<Home/>} path="/shekay"/>
        <Route  element={<Hire/>} path="/hire"/>
        <Route  element={<Jobs/>} path="/jobs"/>
        <Route  element={<Signupprice/>} path="/price"/>
        <Route  element={      <Protected>
               {/* <Account/> */}
              <Checkoutpage/>
              </Protected>} path="/premium/checkout"/>
        {/* <Route  element={<ProfessionalChoice/>} path="/professional/checkout"/> */}
        <Route  element={<Protected><CheckoutProfessional/></Protected>} path="/professional/checkout"/>

        
        <Route  element={<PaymentCheck/>} path="/check"/>


        <Route  element={<Support/>} path="/support"/>
        <Route  element={<ActiveUser/>} path="/users"/>
        <Route  element={<Proffesional/>} path="/professional"/>
        <Route  element={<Freeplan/>} path="/freeplan"/>
        <Route  element={<PremiumSignUp/>} path="/premium"/>
        <Route  element={<EmployeePremium/>} path="/premium/worker"/>
        <Route  element={<EmployeeProfessional/>} path="/professional/worker"/>
        <Route  element={<EmployeeProfessional/>} path="/free/worker"/>
        <Route  element={<PremiumChoice/>} path="/premium/employer"/>
        <Route  element={<CheckoutpageCompany/>} path="/premium/company/checkout"/>
        <Route  element={<CheckoutpageEmployer/>} path="/premium/employer/checkout"/>


        <Route  element={<ProfessionalChoice/>} path="/professional/employer"/>
        <Route  element={<ProfessionalEmployerCompany/>} path="/professional/employer/company"/>
        <Route  element={<ProfessionalEmployerMyself/>} path="/professional/employer/individual"/>
        <Route  element={<PremiumEmployerCompany/>} path="/premium/employer/company"/>
        <Route  element={<PremiumEmployerMyself/>} path="/premium/employer/individual"/>
        <Route  element={<FreeEmployerCompany/>} path="/free/employer/company"/>
        <Route  element={<FreeEmployerMyself/>} path="/free/employer/individual"/>
        

        <Route  element={<FreePlanChoice/>} path="/free/employer"/>

        <Route  element={<PremiumWorker/>} path="/premium/register"/>
        <Route  element={<ProfessionalWorker/>} path="/professional/register"/>
        <Route  element={<FreePlanWorker/>} path="/signup"/>











        <Route
            path='/profile'
            element={
              <ProtectedRoutes>
               {/* <Account/> */}
               <AccountDetail/>
              </ProtectedRoutes>
            }
          />
       
        <Route
            path='/account'
            element={
              <ProtectedRoutes>
<EmailVervied>
              <PaymentProtect>
               {/* <Account/> */}
               <AccountMain/>
               
              </PaymentProtect>
              </EmailVervied>
              </ProtectedRoutes>

            }
          />
        
     
      </Routes>
      </BrowserRouter>
      </>
 
      
    
  
  );
}

export default App;
