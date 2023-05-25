import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
    //#1d794e  #228b5a  #24c57a  #27d483
    //#3d9ba5fa
    return (
        <div
            className='text-whiteText w-full flex flex-col items-center mb-14 bg-[#2e2e2e] py-[30px]
            box-content pb-[65px]'
        >
            <h2 className='text-3xl font-medium mb-8'>
                About <span className='text-[#27d483]'>Me</span>
            </h2>

            <div className='flex flex-wrap-reverse gap-14 items-center px-[30px] pb-[70px] justify-evenly' >
                <div className='w-3/5' >
                    <p>
                        As a kind and dedicated individual, I place a high value on developing positive and effective relationships with my clients and coworkers.
                        I'm always looking for new and creative solutions to any problems that I encounter. I'm passionate about sharing my expertise with others and assisting them in their success, and I strongly believe in the power of teamwork.
                    </p>
                </div>
                <div
                    className='flex items-center justify-center bg-gray-300 rounded-R12 box-border'
                ><Image src='/assets/images/hero.png' alt='aboutMe-image' width={550} height={150} /></div>
            </div>

            <div className='flex flex-wrap gap-14 items-center px-[30px] justify-evenly' >
                <div
                    className='flex items-center justify-center bg-gray-300 rounded-R12 box-border'
                ><Image src='/assets/images/hero.png' alt='aboutMe-image' width={550} height={150} /></div>
                <div className='w-3/5' >
                    <p>
                        I love to think outside the box and come up with new and innovative ideas that help my clients stand out from the competition. I'm committed to delivering excellent service and assistance, whether I'm working on a project or sharing my knowledge. Thank you for visiting my portfolio, I look forward to the opportunity of working with you.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;