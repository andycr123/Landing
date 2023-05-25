import React from 'react';

const Hero = () => {
    return (
        <div className='flex justify-center items-center flex-col'>

            <div className='flex justify-center items-center flex-col'>

                <div
                    className='grid justify-center items-centerx'
                >
                    <img
                        src='/assets/images/img-portfolio.jpg'
                        alt='portfolio-image'
                        className='w-[270px] h-[270px] my-[60px] rounded-[50%]'
                    />
                    <div
                        className='w-[150px] h-[57px] relative top-[-100px] left-[10px] flex justify-center items-center
                        rounded bg-[#484545]'
                    >
                        <h1
                            className='text-[43px] text-[#17f18c]'
                        >Hello!</h1>
                    </div>
                </div>

            </div>

            <div
                className='m-[4px] p-[20px] gap-[25px] flex justify-center items-center flex-col'
            >
                <h2
                    className='text-[33px] font-thin text-[#BFBFBF]'
                >My name is Catalina Forero</h2>

                <p
                    className='my-0 mx-auto w-[53%] text-[17px] inline-block text-[#989898]'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maiores odio neque, ducimus quia temporibus voluptate officia excepturi, quos repellat, praesentium iste totam itaque sint! Nesciunt aliquam distinctio delectus consequatur.
                </p>
            </div>
        </div>
    );
}

export default Hero;