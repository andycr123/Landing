import Image from 'next/image';
import React from 'react';

//#1d794e  #228b5a  #24c57a  #27d483
const Hero = () => {
    return (
        <div
            className='flex flex-col justify-center items-center gap-8 mt-[100px] mb-[120px] lg:flex-row'
        >
            <div
                className='bg-whiteText w-[310px] h-[310px] flex justify-center items-center 
                rounded-RadiusRounded'
            >
                <Image
                    className='rounded-RadiusRounded'
                    src='/assets/images/catalina-image.jpg'
                    alt='image-portafolio'
                    width={300}
                    height={300}
                />
            </div>

            <div className='text-whiteText max-w-[700px]'>
                <div className='text-3xl font-bold'>
                    <h1>Hello, my name is Catalina Forero</h1>
                    {/* <h1> Hello! I am <span className='text-[#24c57a]'>Catalina Forero</span></h1> */}
                    <h2>I am Frontend Developer</h2>
                    {/* <h2 className='text-gray-200'>I am Frontend Developer</h2> */}
                </div>
                <div className='text-base break-words' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo expedita molestias autem beatae fuga distinctio ea quos itaque dolores explicabo quidem voluptatem assumenda vitae, perspiciatis doloremque adipisci similique mollitia?
                </div>
            </div>
        </div>
    );
}

export default Hero;