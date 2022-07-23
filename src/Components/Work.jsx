import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Work() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }
        , []);

    return (
        <div data-aos="fade-up" name="work" className='min-h-screen h-fit px-5'>
            <div className='text-4xl text-white font-semibold space-y-4'>
                <p className='text-4xl font-semibold text-white inline border-b-4 border-[#75454c]'>Work</p>
                <p className='text-lg md:text-2xl'>Check out some of my recent works !</p>
            </div>

            <div className='grid md:grid-cols-2 space-y-8 md:space-y-0 max-w-[1080px] mx-auto my-24 justify-items-center'>

                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className='group'>
                    <div className='md:group-hover:scale-105 duration-500 transition-all shadow-xl'>
                        <div style={{ backgroundImage: "url(./portfolio/todo.JPEG)" }} className='relative bg-center overflow-hidden bg-cover 
                        bg-no-repeat w-80 md:w-96 h-64 rounded-tl-lg rounded-tr-lg'>
                            <div className='hidden md:block absolute -translate-y-96 group-hover:translate-y-0 duration-500 opacity-0 
                    group-hover:opacity-80 w-80 md:w-96 h-64 bg-gray-300'>
                            </div>
                            <div className='hidden w-full h-full md:flex justify-center items-center'>

                                <a href='https://somemohit.github.io/todo/' target="_blank" rel="noreferrer"
                                    className='absolute bg-[#75454c] text-white h-10 w-20 
                                -translate-x-12 -translate-y-96 duration-500 opacity-0 rounded-lg
                             group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center'>Demo</a>

                                <a href='https://github.com/somemohit/todo' target="_blank" rel="noreferrer"
                                    className='absolute bg-[#75454c] text-white h-10 w-20 
                                translate-x-12 -translate-y-96 duration-500 opacity-0 rounded-lg
                             group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center'>Code</a>

                            </div>
                        </div>
                        <div className='relative h-64 w-80 md:w-96 flex flex-col items-center text-white p-5 bg-[#43587d] rounded-bl-lg rounded-br-lg'>
                            <h1 className='text-xl text-white font-semibold'>To-do List App</h1>
                            <p className='text-sm md:text-base'>
                                This is a to-do list app to manage your daily tasks and activities that you want to do.
                                I have made this using React js. This app follows the CRUD operation.
                                You can add, delete, mark your to-do items.
                            </p>
                            <div className='flex gap-2 mt-2'>
                                <p className='px-3 py-1 text-xs md:text-base bg-gray-500 rounded-full'>React JS</p>
                                <p className='px-4 py-1 text-xs md:text-base bg-gray-500 rounded-full'>Css</p>
                            </div>
                            <div className='absolute bottom-4 space-x-4 mt-4 block md:hidden'>
                                <a href='https://somemohit.github.io/todo/' target="_blank" rel="noreferrer"
                                    className='bg-[#75454c] text-xs px-4 py-2 h-8 w-16 rounded-lg'>Demo</a>
                                <a href='https://github.com/somemohit/todo' target="_blank" rel="noreferrer"
                                    className='bg-[#75454c] text-xs px-4 py-2 h-8 w-16 rounded-lg'>Code</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className='group'>
                    <div className='md:group-hover:scale-105 duration-500 transition-all shadow-xl'>
                        <div style={{ backgroundImage: "url(./portfolio/minishop.JPEG)" }} className='relative overflow-hidden bg-center bg-cover 
                        bg-no-repeat w-80 md:w-96 h-64 rounded-tl-lg rounded-tr-lg'>
                            <div className='hidden md:block absolute -translate-y-96 group-hover:translate-y-0 duration-500 opacity-0 
                    group-hover:opacity-80 w-80 md:w-96 h-64 bg-gray-300'>
                            </div>
                            <div className='hidden w-full h-full md:flex justify-center items-center'>
                                <a href='https://somemohit.github.io/router_project/' target="_blank" rel="noreferrer"
                                    className='absolute bg-[#75454c] text-white h-10 w-20 
                                -translate-x-12 -translate-y-96 duration-500 opacity-0 rounded-lg
                             group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center'>Demo</a>

                                <a href='https://github.com/somemohit/router_project' target="_blank" rel="noreferrer"
                                    className='absolute bg-[#75454c] text-white h-10 w-20 
                                translate-x-12 -translate-y-96 duration-500 opacity-0 rounded-lg
                             group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center'>Code</a>
                            </div>
                        </div>
                        <div className='relative h-64 w-80 md:w-96 flex flex-col items-center text-white p-5 bg-[#43587d] rounded-bl-lg rounded-br-lg'>
                            <h1 className='text-xl text-white font-semibold'>Minishop</h1>
                            <p className='text-sm md:text-base'>
                                This is a simple demo website having some dummy products.
                                You can see the product information by clicking on the product.
                                I have made this in React JS and Bootstrap. I have used React Router v6 to navigate through
                                different pages without reloading.
                            </p>
                            <div className='flex gap-2 mt-2'>
                                <p className='px-3 py-1 text-xs md:text-base bg-gray-500 rounded-full'>React JS</p>
                                <p className='px-4 py-1 text-xs md:text-base bg-gray-500 rounded-full'>Bootstrap</p>
                            </div>
                            <div className='absolute bottom-4 space-x-4 mt-4 block md:hidden'>
                                <a href='https://somemohit.github.io/router_project/' target="_blank" rel="noreferrer"
                                    className='bg-[#75454c] text-xs px-4 py-2 h-8 w-16 rounded-lg'>Demo</a>
                                <a href='https://github.com/somemohit/router_project' target="_blank" rel="noreferrer"
                                    className='bg-[#75454c] text-xs px-4 py-2 h-8 w-16 rounded-lg'>Code</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
