import GitHub from '@/public/assets/icons/GitHub';
import Gmail from '@/public/assets/icons/Gmail';
import Linkedin_Logo from '@/public/assets/icons/';
import Instagram from '@/public/assets/icons/Instagram';
import Whatsapp from '@/public/assets/icons/Whatsapp';
import React from 'react';

const Footer = () => {
    return (
        //#1d794e  #228b5a  #24c57a  #27d483
        <footer
            id='Footer'
            className='static bottom-0 bg-gray-700 box-border w-full py-[35px] scroll-smooth'
        >
            <div className='flex gap-3 justify-center items-center px-[15px]'>
                <div className='content-[" "] w-full h-1 bg-[#27d483]'></div>
                <a
                    href='https://www.linkedin.com/in/catalina-forero-suarez-83a0b61b5'
                    className='flex items-center justify-center'
                >
                    <Linkedin_Logo className='hover:fill-[#1d794e] fill-[#27d483]' width={25} height={25} />
                </a>
                <a href='#instagram' className='flex items-center justify-center' >
                    <Instagram className='hover:fill-[#1d794e] fill-[#27d483]' width={26} height={26} />
                </a>
                <a
                    href='#gmail'
                    className='flex items-center justify-center md:hidden lg:hidden xl:hidden 2xl:hidden'
                >
                    <Gmail className='hover:fill-[#1d794e] fill-[#27d483]' width={28} height={28} />
                </a>
                <a
                    href='#gmail'
                    className='flex items-center justify-center'
                >
                    <Whatsapp className='hover:fill-[#1d794e] fill-[#27d483]' width={28} height={28} />
                </a>
                <a
                    href='https://github.com/catalinafs'
                    className='flex items-center justify-center rounded-RadiusRounded'
                >
                    <GitHub
                        className='hover:fill-[#1d794e] fill-[#24c57a] rounded-RadiusRounded'
                        width={28}
                        height={28}
                    />
                </a>
                <div className='content-[" "] w-full h-1 bg-[#27d483]'></div>
            </div>

            <div className='flex justify-center items-center font-bold text-2xl my-6'>
                <h3 className='text-whiteText m-0'>Catalina<span className='text-[#17f18c]'>Developer</span></h3>
            </div>

            <div className=''></div>

            <div className='flex justify-center items-center'>
                <p className='text-[#8f9296] text-sm'>
                    All rights reserved @ 2023 <strong>
                        Catalina<span className='text-[#24c57a]'>Developer</span>
                    </strong>
                </p>
            </div>
        </footer>
    );
}

export default Footer;