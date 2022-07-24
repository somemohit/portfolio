import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Contact() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }
        , []);

    return (
        <div data-aos="fade-up" name="contact" className='min-h-screen h-fit p-5 flex justify-center items-center'>
            <form data-aos="fade-up" action='https://getform.io/f/24fbd33a-6d3e-42ef-a8f9-ddde3adadc6f' method="POST" className='max-w-[800px] w-full'>
                <div className='space-y-4 py-6'>
                    <p className='text-4xl font-semibold text-white inline border-b-4 border-[#75454c]'>Contact</p>
                    <p className='text-white text-lg md:text-xl'>Do you want to collborate or want to hire or just wanna have a chat ?
                        Submit the form and let's break the ice !</p>
                </div>

                <input type='text' placeholder='Name' name='name' className='rounded-lg outline-none p-4 px-5 w-full my-2 bg-[#43587d] text-white' />
                <input type='email' placeholder='Email' name='email' className='rounded-lg outline-none p-4 px-5 w-full my-2 bg-[#43587d] text-white' />
                <textarea placeholder='Enter your message' name='message' rows='10' className='rounded-lg outline-none p-4 w-full my-2 bg-[#43587d] text-white' />
                <button className='m-auto border-2 px-4 md:px-6 py-2 md:py-4 my-4 rounded-lg flex items-center gap-2 text-white
                 hover:bg-[#75454c] hover:border-[#75454c]'>
                    Let's Collaborate</button>
            </form>
        </div>
    )
}
