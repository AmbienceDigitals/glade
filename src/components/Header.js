
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Popover className="relative  w-screen bg-primary text-white">
        <div className="w-screen mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-between md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to = "/">
                    <h1 className="text-2xl text-indigo-500">Glade Foundation</h1>
            </Link>
            
            </div>
            <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-evenly text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Glade</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex  space-x-20">
            <Link to="/" className="text-base font-medium text-gray-700 hover:text-gray-900">
                Home
            </Link>

            <Link to="/donate" className="text-base font-medium text-gray-700 hover:text-gray-900">
                Donate
            </Link>
            <Link to="/support" className="text-base font-medium text-gray-700 hover:text-gray-900">
                Request Support
            </Link>

            </Popover.Group>
        </div>
        </div>

        <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                <div>
                    
                </div>
                <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring--500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                </div>
                <div className="mt-6">
                <nav className="grid gap-y-8">
                    <Link to="/"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                        <span className="ml-3 text-base font-medium text-gray-900">Home</span>
                    </Link>
                    <Link to="/donate"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                        <span className="ml-3 text-base font-medium text-gray-900">Donate</span>
                    </Link>
                    <Link to="/support"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                        <span className="ml-3 text-base font-medium text-gray-900">Request Support</span>
                    </Link>

                </nav>
                </div>
            </div>
            </div>
        </Popover.Panel>
        </Transition>
        </Popover>
    )
}

export default Header

