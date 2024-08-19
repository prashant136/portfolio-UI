import React from "react";
import { PROJECT_SECTION_CARDS } from "../constants";

export default function Project() {
    return (
        <section className='lg:hidden dark:bg-purple-mid w-full py-8'>
            <div className='relative max-w-[1920px] mx-auto flex flex-col text-white w-full lg:flex-row lg:space-x-4 lg:my-16'>
                <h2 className='text-2xl font-semibold mb-4 text-center dark:text-purple-light'>
                    Featured projects:
                </h2>
                <div className='flex flex-col gap-y-4 lg:w-4/12 px-10'>
                    <span className='text-center font-normal px-10 text-[13px]'>
                        I have worked on many projects over the course of being
                        a Web Developer, here are a few of my live, real-world
                        projects
                    </span>
                </div>
                <div className='flex flex-col items-center gap-y-8 p-6'>
                    {PROJECT_SECTION_CARDS.map((card, index) => {
                        return (
                            <div
                                key={index}
                                className='h-64 w-64 rounded-xl flex flex-col justify-evenly items-center bg-gray-dark'
                            >
                                <img
                                    src={card.icon}
                                    alt={"icon-alt"}
                                    width={50}
                                    height={50}
                                />
                                <div className='flex flex-col items-center gap-y-2'>
                                    <span className='font-semibold'>
                                        {card.text}
                                    </span>
                                    <span className='text-xs font-semibold px-6'>
                                        {card.description}
                                    </span>
                                </div>
                                <div className='flex space-x-4'>
                                    <button
                                        className='flex justify-center items-center gap-x-2 w-[100px] h-[32px] text-[12px] font-normal text-black rounded-lg border-2 dark:border-purple-light dark:bg-purple-light dark:text-white
                                          xl:w-[254px] xl:h-[56px] xl:text-[20px]
                                          xl:mt-10
                                          2xl:text-[24px]'
                                    >
                                        View Live
                                    </button>
                                    <button
                                        className='flex justify-center items-center gap-x-2 w-[100px] h-[32px] text-[12px] font-normal text-black rounded-lg border-2 dark:border-purple-light dark:text-white
                                        xl:w-[254px] xl:h-[56px] xl:text-[20px]
                                        xl:mt-10
                                        2xl:text-[24px]'
                                    >
                                        Github Repo
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
