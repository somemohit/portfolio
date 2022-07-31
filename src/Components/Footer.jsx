import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='h-48 bg-[#43587d] flex flex-col justify-center items-center'>
            <div className='text-gray-300 text-xs flex flex-col items-center gap-2'>
                <h1 className='flex items-center gap-2'><FaPaperPlane />mohitkumardash4@gmail.com</h1>
                <h1 className='flex items-center gap-2'><FaPhone /> +91-8457800765</h1>
            </div>

            <div className='text-gray-300 flex justify-center items-center gap-8 mt-8'>
                <a href='https://www.linkedin.com/in/mohit-kumar-dash' target="_blank" rel="noreferrer">
                    <FaLinkedin className='text-2xl hover:text-[#546f9c] duration-300 transition-all cursor-pointer' />
                </a>
                <a href='https://github.com/somemohit' target="_blank" rel="noreferrer">
                    <FaGithub className='text-2xl hover:text-[#546f9c] duration-300 transition-all cursor-pointer' />
                </a>
                <a href='https://twitter.com/mohitkumardash1' target="_blank" rel="noreferrer">
                    <FaTwitter className='text-2xl hover:text-[#546f9c] duration-300 transition-all cursor-pointer' />
                </a>
                <a href='https://www.facebook.com/mohitkumar.dash/' target="_blank" rel="noreferrer">
                    <FaFacebook className='text-2xl hover:text-[#546f9c] duration-300 transition-all cursor-pointer' />
                </a>
            </div>
            <h1 className='text-xs text-gray-300 mt-4'>© 2022 Portfolio | Mohit Kumar Dash</h1>
        </div>
    )
}
