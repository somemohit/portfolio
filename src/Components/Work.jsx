import React, {useRef} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import {workCardData} from '../modules/constants';
import {useScroll} from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function Work() {
  const container = useRef(null);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    Aos.init({duration: 1000});
    // scrollYProgress.on('change', (e) => console.log(scrollYProgress));
  }, []);

  return (
    <div data-aos="fade-up" name="work" className="min-h-screen h-fit px-5">
      <div className="text-4xl text-white font-semibold space-y-4">
        <p className="text-4xl font-semibold text-white inline">Work</p>
        <p className="text-lg md:text-2xl">
          Check out some of my recent works !
        </p>
      </div>

      {/* <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-[1080px] mx-auto my-24 justify-items-center">
        {workCardData?.map((item) => {
          return (
            <>
              <div
                data-aos={item?.aos}
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="group"
              >
                <div className="md:group-hover:scale-105 duration-500 transition-all shadow-xl">
                  <div
                    className="relative bg-center overflow-hidden bg-cover 
                        bg-no-repeat w-80 md:w-96 h-64 rounded-tl-lg rounded-tr-lg"
                  >
                    <img
                      src={item?.imgsrc}
                      alt={item?.imgAlt}
                      className="absolute w-80 md:w-96 h-64 object-cover"
                    />
                    <div
                      className="hidden md:block absolute -translate-y-96 group-hover:translate-y-0 duration-500 opacity-0 
                    group-hover:opacity-80 w-80 md:w-96 h-64 bg-gray-300"
                    ></div>
                    <div className="hidden w-full h-full md:flex justify-center items-center">
                      <a
                        href={item?.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute bg-[#75454c] text-white h-10 w-20 
                                -translate-x-12 -translate-y-96 duration-500 opacity-0 rounded-lg
                             group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center"
                      >
                        Demo
                      </a>

                      <a
                        href={item?.codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute bg-[#75454c] text-white h-10 w-20 
                                translate-x-12 -translate-y-96 duration-500 opacity-0 rounded-lg
                             group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                  <div className="relative h-64 w-80 md:w-96 flex flex-col items-center text-white p-5 bg-slate-700 rounded-bl-lg rounded-br-lg">
                    <h1 className="text-xl text-white font-semibold">
                      {item?.appName}
                    </h1>
                    <p className="text-sm md:text-base">{item?.appDesc}</p>
                    <div className="flex gap-2 mt-2">
                      {item?.techStack?.map((stack) => {
                        return (
                          <>
                            <p className="px-3 py-1 text-xs md:text-base bg-gray-500 rounded-full">
                              {stack}
                            </p>
                          </>
                        );
                      })}
                    </div>
                    <div className="absolute bottom-4 space-x-4 mt-4 block md:hidden">
                      <a
                        href={item?.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#75454c] text-xs px-4 py-2 h-8 w-16 rounded-lg"
                      >
                        Demo
                      </a>
                      <a
                        href={item?.codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#75454c] text-xs px-4 py-2 h-8 w-16 rounded-lg"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div> */}

      <div ref={container} className="my-20 sm:my-0">
        {workCardData?.map((item, i) => {
          const targetScale = 1 - ((workCardData.length -1) - i) * 0.05;
          return (
            <ProjectCard
              key={`p_${i}`}
              i={i}
              progress={scrollYProgress}
              range={[i * (1 / (workCardData.length - 1)), 1]}
              targetScale={targetScale}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}
