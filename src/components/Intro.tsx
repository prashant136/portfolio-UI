import React from "react";
import gaurav from "../assets/images/gaurav.png";
import mahal from "../assets/images/mahal.png";
import { IoMdCloudDownload } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

export default function Intro() {
    return (
        <main className='relative mx-auto w-full flex flex-col justify-between items-center dark:bg-purple-mid'>
            <section className='max-w-[1920px] mx-auto flex justify-between w-full mt-6'>
                <div className='flex flex-col gap-y-4 lg:p-4 lg:w-[600px] ml-[8%]'>
                    <div className='flex flex-col dark:text-white leading-tight'>
                        <div className='text-xl font-bold'>Hello, I'm</div>
                        <div className='text-3xl font-bold'>GAURAV SHARMA</div>
                        <div className='text-[12px]'>
                            Front End developer, & UX Designer. I create{" "}
                            <br></br>seamless web experiences for end-users.
                        </div>
                    </div>

                    <div className='flex space-x-4'>
                        <button
                            className='flex justify-center items-center gap-x-2 w-[100px] h-[32px] text-[12px] font-normal text-black rounded-lg border-2 dark:border-purple-light dark:bg-purple-light dark:text-white
                      xl:w-[254px] xl:h-[56px] xl:text-[20px]
                      xl:mt-10
                      2xl:text-[24px]'
                        >
                            Resume <IoMdCloudDownload className='h-4 w-4' />
                        </button>
                        <button
                            className='flex justify-center items-center gap-x-2 w-[100px] h-[32px] text-[12px] font-normal text-black rounded-lg border-2 dark:border-purple-light dark:text-white
                      xl:w-[254px] xl:h-[56px] xl:text-[20px]
                      xl:mt-10
                      2xl:text-[24px]'
                        >
                            Projects <IoEyeSharp className='h-4 w-4' />
                        </button>
                    </div>
                </div>
                <div className='relative'>
                    <div className='dark:bg-white w-48 h-48 rounded-full absolute z-10'></div>
                    <div className='relative z-20'>
                        <img
                            src={gaurav}
                            className='
                                h-[210px] w-[210px]
                                xs:h-[250px] xs:w-[250px]
                                sm:h-[320px] sm:w-[320px] 
                                md:h-[500px] md:w-[500px]
                                lg:h-[600px] lg:w-[600px]
                                xl:h-[700px] xl:w-[700px]
                                2xl:h-[800px] 2xl:w-[800px]
                            '
                            alt='pic'
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
