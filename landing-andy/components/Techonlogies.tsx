import CPlus from '@/public/assets/icons/CPlus';
import Css from '@/public/assets/icons/Css';
import Git from '@/public/assets/icons/Git';
import GitHub from '@/public/assets/icons/GitHub';
import Html from '@/public/assets/icons/Html';
import Java from '@/public/assets/icons/Java';
import JavaScript from '@/public/assets/icons/JavaScript';
import Jira from '@/public/assets/icons/Jira';
import NextJS from '@/public/assets/icons/NextJS';
import Python from '@/public/assets/icons/Python';
import React from 'react';
import ReactJS from '@/public/assets/icons/ReactJS';
import TailWindCSS from '@/public/assets/icons/TailWindCSS';
import TypeScript from '@/public/assets/icons/TypeScript';

//#1d794e  #228b5a  #24c57a  #27d483
const Technologies = () => {
    return (
        <div className='text-whiteText flex flex-col items-center mb-16 mx-4'>
            <h2 className='text-3xl font-medium mb-12'>
                My Skills <span className='text-[#27d483]'>&</span> Tools
            </h2>
            <div className='flex justify-center items-center flex-wrap max-w-[850px] gap-5'>
                {/* <div className='hover:bg-gray-450 bg-gray-600'> */}
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12 
                    flex flex-col justify-between items-center pb-[10px] pt-[15px]'
                >
                    <Html width={65} height={65} />
                    <h3>HTML</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12 
                    flex flex-col justify-between items-center pb-[10px] pt-[15px]'
                >
                    <Css width={65} height={65} />
                    <h3>CSS</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-450 rounded-R12 
                    flex flex-col justify-between items-center py-[15px]'
                >
                    <JavaScript width={55} height={55} />
                    <h3>JavaScript</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12 
                    flex flex-col justify-between items-center py-[15px]'
                >
                    <TypeScript width={55} height={55} className='rounded-[8px]' />
                    <h3>TypeScript</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12 
                    flex flex-col justify-between items-center py-[15px]'
                >
                    <Java width={65} height={65} />
                    <h3>Java</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12 
                    flex flex-col justify-between items-center py-[15px]'
                >
                    <Python width={60} height={60} />
                    <h3>Python</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12 
                    flex flex-col justify-between items-center py-[15px]'
                >
                    <CPlus width={60} height={60} />
                    <h3>C++</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12 
                    flex flex-col justify-between items-center py-[15px]'
                >
                    <ReactJS width={60} height={60} />
                    <h3>React JS</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12
                    flex flex-col justify-between items-center py-[15px]'
                >
                    <NextJS width={70} height={25} />
                    <h3>Next JS</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12 
                    flex flex-col justify-between items-center py-[15px]'
                >
                    <GitHub width={55} height={55} fill='#EFEFEF' />
                    <h3>GitHub</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12 
                    flex flex-col justify-between items-center py-[15px]'
                >
                    <Git width={60} height={60} />
                    <h3>Git</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12 
                    flex flex-col justify-between items-center py-[15px]'
                >
                    <Jira width={60} height={60} />
                    <h3>Jira</h3>
                </a>
                <a
                    href='#'
                    className='box-border w-[100px] h-[120px] hover:bg-gray-600 bg-gray-500 rounded-R12 
                    flex flex-col justify-between items-center py-[15px]'
                >
                    <TailWindCSS />
                    <h3>TailWind CSS</h3>
                </a>
            </div>
        </div>
    );
}

export default Technologies;