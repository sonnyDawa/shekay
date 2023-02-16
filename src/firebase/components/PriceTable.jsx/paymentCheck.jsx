import React from 'react';

const PaymentCheck = () => {
    return (
        <div>
            
<div className='flex flex-col items-center justify-center min-h-screen'>
<div class="font-semibold text-3xl">
            <p className='mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl'>YOU ARE ALL SET! </p>
            <p className='flex flex-row text-sm font-medium text-gray-400'>Our specialists will now confirm the transaction in less than 24 hours. </p>

          </div>
<img className='videoCheckout' src="https://firebasestorage.googleapis.com/v0/b/logo-2-c33ae.appspot.com/o/Webinar.gif?alt=media&token=b28d5a25-df14-4f28-a987-314ee79d1476" alt="" />

   {/* <p className="ml-3" style={{fontSize:"30px"}}>Proccessing...</p> */}
</div>
        </div>
    );
}

export default PaymentCheck;
