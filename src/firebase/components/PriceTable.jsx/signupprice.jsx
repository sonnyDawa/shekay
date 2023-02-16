import React,{useState} from 'react';
import Price from './price';
import { UseAuth } from '../../../context/context';
import { Link } from 'react-router-dom';
const Signupprice = () => {
    const {firstName} = UseAuth()
	const [yearPriceFreeState, setyearPriceFreeState] = useState(0);
	const [monthPriceFreeState, setmonthPriceFreeState] = useState(0);
	const [freePlanState, setfreePlanState] = useState(0);
	const [professionalPlanState, setprofessionalPlanState] = useState(100);
	const [premiumPlanState, setpremiumPlanState] = useState(200);
	const [backgroundColor, setbackgroundColor] = useState("");

	// bg-blue-300



	const [yearPriceProfessionalState, setyearPriceProfessionalState] = useState(200);
	// const [monthPriceProfessionalState, setmonthPriceProfessionalState] = useState(100);
	// const [yearPricePremiumState, setyearpricePremiumstate] = useState(400);
	// const [monthPricePremiumState, setmonthPricePremiumState] = useState(200);

	
	const yearmain = document.getElementById("year")
		const monthmain = document.getElementById("month")
	
	
	const handleAnnual = () =>{
		monthmain.style.backgroundColor="white"
	
		yearmain.style.backgroundColor="blue"
		if(professionalPlanState == 100){
			setfreePlanState(0)
			setpremiumPlanState(400)
			setprofessionalPlanState(200)
			
		}

		
	}

	const handleMonth = () =>{
		yearmain.style.backgroundColor="white"
		monthmain.style.backgroundColor="blue"


		if(professionalPlanState == 200){
			setfreePlanState(0)
			setpremiumPlanState(200)
			setprofessionalPlanState(100)
		}
	}
	
    return (
		<div x-data="{ 
			billingType: 'month', 
			basicPrice: '19',
			premiumPrice: '29',
			proPrice: '39'
		}" class="min-h-full bg-gray-200 pb-12">
		<div class="w-full bg-blue-900 pt-16 pb-24 text-center">
			<h4 class="text-2xl text-gray-100">Choose the right plan for you</h4>
			<p class="text-sm text-gray-100 mt-2">Pricing built for businesses of all sizes. Choose package that suits your needs.</p>
			{/* <div class="flex items-center justify-center mt-8">
				<button 
					 class="text-gray-800 px-4 py-2 rounded-tl-lg rounded-bl-lg bg-gray-200" id='month' onClick={handleMonth} >
					Monthly billing
				</button>
				<button 
					class="text-gray-800 px-4 py-2 rounded-tr-lg rounded-br-lg bg-gray-200" id='year' onClick={handleAnnual}>
					Annual billing
				</button>
			</div> */}
		</div>
		<div class="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
			<div class="w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
				<div class="bg-white shadow-2xl rounded-lg py-4">
					<p class="text-xl text-center font-bold text-blue-600">Free Plan</p>
					<p class="text-center py-8">
						<span class="text-4xl font-bold text-gray-700">
							Birr <span x-text="basicPrice">{freePlanState}</span>    
						</span>
						<span class="text-xs uppercase text-gray-500">
							/ <span x-text="billingType">month</span>
						</span>
					</p>
					<ul class="border-t border-gray-300 py-8 space-y-6">
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Free Setup Guidance</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Email Support</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">User Management</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Reports</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-gray-300 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-400 capitalize">Unlimited Users</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-gray-300 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-400 capitalize">Data Export</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-gray-300 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-400 capitalize">Automated Workflows</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-gray-300 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-400 capitalize">API Access</span>
						</li>
					</ul>
					<div class="flex items-center justify-center mt-6">
						<Link to="/signup">
						<a href="#" class="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150" title="Purchase">Choose Free</a>

						</Link>
					</div>
				</div>
				<div class="bg-white shadow-2xl rounded-lg py-4">
					<p class="text-xl text-center font-bold text-blue-600">Premium</p>
					<p class="text-center py-8">
						<span class="text-4xl font-bold text-gray-700">
							Birr <span x-text="premiumPrice">{premiumPlanState}</span>
						</span>
						<span class="text-xs uppercase text-gray-500">
							/ <span x-text="billingType">month</span>
						</span>
					</p>
					<ul class="border-t border-gray-300 py-8 space-y-6">
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Free Setup Guidance</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Email Support</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">User Management</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Reports</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Unlimited Users</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Data Export</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-gray-300 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-400 capitalize">Automated Workflows</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-gray-300 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-400 capitalize">API Access</span>
						</li>
					</ul>
					<div class="flex items-center justify-center mt-6">
						<Link to="/premium/register">
						<a href="#" class="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150" title="Purchase">Choose Premium</a>
						</Link>
					</div>
				</div>
				<div class="bg-white shadow-2xl rounded-lg py-4">
					<p class="text-xl text-center font-bold text-blue-600">Professioal plan</p>
					<p class="text-center py-8">
						<span class="text-4xl font-bold text-gray-700">
							Birr <span x-text="proPrice">{professionalPlanState}</span>
						</span>
						<span class="text-xs uppercase text-gray-500">
							/ <span x-text="billingType">month</span>
						</span>
					</p>
					<ul class="border-t border-gray-300 py-8 space-y-6">
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Free Setup Guidance</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Email Support</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">User Management</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Reports</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Unlimited Job Posting</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Unlimited Job Apply</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">Chat system</span>
						</li>
						<li class="flex items-center space-x-2 px-8">
							<span class="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
							</span>
							<span class="text-gray-600 capitalize">API Access</span>
						</li>
					</ul>
					<div class="flex items-center justify-center mt-6">

							<Link to="/professional/register">
						<a href="#" class="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150" title="Purchase">Choose Professional</a>

							</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}

export default Signupprice;
