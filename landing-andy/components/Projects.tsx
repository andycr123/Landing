import React from 'react';
import { projectsData } from '@/pages/api/projectsData';
import Image from 'next/image';

const Projects = () => {
    const data = projectsData.data

    return (
        <div
            className='text-whiteText w-full flex flex-col items-center mb-14 bg-[#2e2e2e] py-[30px] 
            box-content pb-[65px]'
        >
            <h2 className='text-3xl font-medium mb-12'>
                My <span className='text-[#27d483]'>Proyects</span>
            </h2>

            {data.map((item) => {

                const { id, title, image, description, link } = item;

                return (
                    <>
                        <h4>{id}</h4>
                        <h2>{title}</h2>
                        <Image src={image} alt='image' width={200} height={130} />
                        <p>{description}</p>
                        <a href={link} >github</a>
                    </>
                )
            })}
        </div>
    );
}

export default Projects;