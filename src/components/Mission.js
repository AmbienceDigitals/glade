import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/solid';

const Mission = () => {
  return (
    <div className="w-full mt-5 mb-5">
        <h1 className="p-5 text-center text-3xl uppercase font-medium text-gray-500">Mission Statement</h1>
        <p className="p-5 text-xl">At Glade Foundation, we are commited to providing quality support for people affectd by post COVID-19 economic incoveniences in all forms</p>
        <CheckCircleIcon className="h-6" aria-hidden="true" />Helping with Medical Bills
        <CheckCircleIcon className="h-6 w-6" aria-hidden="true" />Helping with Tuition Fee Payment
        <CheckCircleIcon className="h-6 w-6" aria-hidden="true" />
    </div>
  )
}

export default Mission