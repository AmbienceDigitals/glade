import React from 'react';

const Testimonials = () => {
return (
    <div className="m-10">
        <h1 className="text-center text-2xl py-3 md:text-3xl lg:text-3xl text-gray-500 font-medium">Testimonials </h1>
            <div className="flex flex-wrap justify-around">
                <div className="w-full my-3 md:w-2/5 lg:w-1/3 text-gray-500 px-16 py-5 rounded-lg">
                    <p className="text-primary text-md md:text-lg lg:text-xl rounded-xl">
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.
                    </p>
                        <div className="my-3 flex items-center">
                            <img src="./man.png" alt="avatar" className="h-10 mr-3" />
                            <p className="font-bold">Daniel Edwards</p>
                        </div>
                </div>
                <div className="w-full my-3 md:w-2/5 lg:w-1/3 text-gray-500 px-16 py-5 rounded-lg">
                    <p className="text-primary text-md md:text-lg lg:text-xl rounded-xl">
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.
                    </p>
                        <div className="my-3 flex items-center">
                            <img src="./avatar.png" alt="avatar" className="h-10 mr-3" />
                            <p className="font-bold">Naomi Natasha</p>
                        </div>
                </div>

                <div className="w-full my-3 md:w-2/5 lg:w-1/3 text-gray-500 px-16 py-5 rounded-lg">
                    <p className="text-primary text-md md:text-lg lg:text-xl rounded-xl">
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.
                    </p>
                        <div className="my-3 flex items-center">
                            <img src="./man.png" alt="avatar" className="h-10 mr-3" />
                            <p className="font-bold">Daniel Edwards</p>
                        </div>
                </div>
                <div className="w-full my-3 md:w-2/5 lg:w-1/3 text-gray-500 px-16 py-5 rounded-lg">
                    <p className="text-primary text-md md:text-lg lg:text-xl rounded-xl">
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.
                    </p>
                        <div className="my-3 flex items-center">
                            <img src="./avatar.png" alt="avatar" className="h-10 mr-3" />
                            <p className="font-bold">Naomi Natasha</p>
                        </div>
                </div>


            </div>
    </div>
  )
}

export default Testimonials