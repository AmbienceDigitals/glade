import React, {useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {bank} from '../script/Script'

const Donate = () => {
    const [values, setValues] = useState({
        phoneNumber: 0,
        firstName: '',
        lastName: '',
        email: '',
        method: '',
        accountNumber: 0,
        bank: '',
        bankCode: 0,
        cardNumber: 0,
        cardCvc: 0,
        expiryMonth: '',
        expiryYear: '',
        pin: 0,
        amount: 0
    });

    const changeHandler = e => {
        setValues({...values, [e.target.name]: e.target.value})
     }

     const donate = (e) => {
        e.preventDefault();
        bank(values.firstName, 
            values.lastName,
            values.email, 
            values.cardNumber, 
            values.expiryMonth, 
            values.expiryYear, 
            values.cardCvc, values.pin, values.amount )
     }

return (
    <div className="flex flex-col justify-between">
        <Header/>
        <form className="m-5 py-8 w-4/5 mx-auto h-full">
        <div className="flex flex-wrap -mx-3 mb-3 items-center justify-center">
            <div className="w-full px-3 mb-6 md:mb-0">
                <h1 className=" text-lg text-center my-3 md:text-xl lg:text-2xl">Your donations will go a long way to provide assistance to others  </h1>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="firstName" onChange={changeHandler}/>
            </div>
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" name="lastName" onChange={changeHandler}/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
               Phone Number
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="number" placeholder="0708675590" name="phoneNumber" onChange={changeHandler}/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="example@gmail.com" name="email" onChange={changeHandler}/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Amount
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="12345" name="amount" onChange={changeHandler}/>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Choose Payment Method
            </label>
            <div className="relative">
                <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-purpose" name="method" onChange={changeHandler}>
                <option></option>
                <option>Card Transfer</option>
                <option>Bank Transfer</option>
                <option>USSD</option>
                <option>Phone Number</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            </div>
        </div>

        {/* form display if payment method is card  */}

        {values.method === 'Card Transfer' && (
            <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Card Number
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="12345" name="cardNumber" onChange={changeHandler}/>
            </div>
            
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Card CVC
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="12345" name="cardCvc" onChange={changeHandler}/>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-row">
            <div className="my-3 w-full">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Card Expiry Month
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="12345" name="expiryMonth" onChange={changeHandler}/>
            </div>
            
            <div className="ml-5 my-3 w-full">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Card Expiry Year
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="12345" name="expiryYear" onChange={changeHandler}/>
            </div>
            
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Card Pin
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="12345" name="pin" onChange={changeHandler}/>
            </div>
        </div>
        )}

        {/* form display if payment method is Bank Transfer */}

        {values.method === 'Bank Transfer' && (
            <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Account Number
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="0130056672" name="accountNumber" onChange={changeHandler}/>
            </div>
            
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Bank Code
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="12345" name="bankCode" onChange={changeHandler}/>
            </div>

        </div>
        )}

        {/* form display if payment method is USSD Transfer */}

        {values.method === 'USSD' && (
            <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Bank
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Zenith" name="bank" onChange={changeHandler}/>
            </div>
            
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Account Number
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="0130056672" name="accountNumber" onChange={changeHandler}/>
            </div>

        </div>
        )}

        <div className="flex item-center justify-center">
            <button
            onClick={(e) => donate(e)} 
            className=" border border-transparent  font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 py-2 px-4 text-xl">
                Donate
            </button>
        </div>
        
        </form>

        <Footer className="mt-10"/>
    </div>
)
}

export default Donate