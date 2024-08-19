import React from "react";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import dribbble from "../assets/images/dribbble.svg";
import sms from "../assets/images/sms.svg";

export default function Contact() {
    return (
        <div className='flex flex-col md:flex-row items-start justify-between bg-gray-900 text-white p-10 space-y-10 md:space-y-0 md:space-x-10 dark:bg-purple-mid'>
            {/* Left Section - Connect with me */}
            <div className='w-full md:w-1/2'>
                <h2 className='text-2xl font-bold mb-4 dark:text-purple-light'>Connect with me:</h2>
                <p className='text-white mb-6'>
                    Satisfied with me? Please contact me
                </p>
                <div className='flex space-x-4'>
                    <img src={facebook} alt='fb' />
                    <img src={instagram} alt='insta' />
                    <img src={dribbble} alt='dribble' />
                    <img src={sms} alt='sms' />
                </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className='w-full md:w-1/2'>
                <h2 className='text-xl mb-4'>
                    Contact me, let's make magic together
                </h2>
                <form className='space-y-4'>
                    <input
                        autoComplete='off'
                        type='email'
                        id='email'
                        placeholder='Email:'
                        className='w-full h-12 dark:bg-gray-dark dark:text-white px-4 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500'
                    />

                    <input
                        autoComplete='off'
                        type='text'
                        id='name'
                        placeholder='Name:'
                        className='w-full h-12 dark:bg-gray-dark dark:text-white px-4 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500'
                    />
                    <textarea
                        autoComplete='off'
                        id='name'
                        placeholder='Message:'
                        className='w-full h-24 dark:bg-gray-dark dark:text-white px-4 pt-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500'
                    />
                    <button
                        type='submit'
                        className='w-40 bg-purple-light text-white p-3 rounded-md transition duration-300'
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
