import GitHub from '@/public/assets/icons/GitHub';
import Phone from '@/public/assets/icons/Phone';
import Gmail from '@/public/assets/icons/Gmail';
import React from 'react';

const Footer = () => {
    return (
        //footer-distributer
        <footer
            className='static bottom-0 bg-[#2d2a30] box-border w-full font-sans pt-[35px] pb-[35px] 
            align-top'
        // className='static bottom-0 bg-[#2d2a30] box-border w-full font-sans px-[50px] pt-[50px] pb-[60px] 
        // align-top'
        >
            <div className='grid grid-cols-2 justify-center items-center font-bold text-[16px]'>

                {/* footer-left */}
                <div className='flex justify-center items-center flex-col'>

                    <h3 className='text-whiteText m-0'>Catalina<span className='text-redNormal'>Developer</span></h3>

                    {/* footer-links */}
                    <p className='text-whiteText mt-[20px] mx-0 mb-[12px]'>
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >Home</a>{' '}
                        |{' '}
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >About</a>{' '}
                        |{' '}
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >Contact</a>{' '}
                        |{' '}
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >Blog</a>{' '}
                        |
                    </p>
                </div>

                {/* footer-center */}
                <div className='flex flex-col my-[30px] gap-2 justify-center items-center'>
                    {/* <div>
                    </div> */}
                    <a href='https://github.com/catalinafs' className='flex items-center gap-1'>
                        <GitHub className='fill-[#ffffff]' width={30} height={30} />
                        <p className='inline-block text-whiteText hover:text-[#e9433e] align-middle'>
                        {/* <p className='inline-block text-gray-400 hover:text-whiteText align-middle'> */}
                            <span className='block font-normal text-[14px] leading-[2px]'>Github</span></p>
                    </a>
                    <a href='#phone' className='flex items-center gap-1' >
                        <Phone className='fill-[#ffffff]' width={27} height={27} />
                        <p className='inline-block text-whiteText hover:text-[#e9433e] align-middle'>+57 316 8603691</p>
                    </a>
                    <a href='#gmail' className='flex items-center gap-2' >
                        <Gmail className='fill-[#ffffff]' width={27} height={27} />
                        <p className='inline-block align-middle text-whiteText hover:text-[#e9433e]'>
                        {/* <p className='inline-block align-middle text-[#942d29] hover:text-[#e9433e]'> */}
                            {/* <a
                                href='#gmail'
                                className='text-[#b43430] hover:text-[#e9433e]'
                            >catalinaforerosuarez@gmail.com</a> */}
                            catalinaforerosuarez@gmail.com
                        </p>
                    </a>
                </div>
            </div>
            {/* footer-company-name */}
            <div className='flex justify-center items-center'>
                <p className='text-[#8f9296] text-[14px] font-normal'>All rights reserved @ 2023 <strong>Catalina<span className='text-[#b43430]'>Developer</span></strong> </p>
            </div>
        </footer>
    );
}

export default Footer;