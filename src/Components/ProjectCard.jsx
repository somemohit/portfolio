import React, {useRef} from 'react';
import {useScroll, useTransform, motion} from 'framer-motion';
import {FiExternalLink} from 'react-icons/fi';
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({item, i, progress, range, targetScale}) => {
  const imgContainer = useRef(null);

  const {scrollYProgress} = useScroll({
    target: imgContainer,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={imgContainer}
      className="h-screen md:max-w-[1080px] sticky top-0 flex flex-col items-center justify-center mx-auto"
    >
      <motion.div
        style={{scale, top: `calc(2vh + ${i * 25}px)`}}
        className="min-h-[530px] sm:min-h-[380px] mt-0 sm:-mt-10 relative flex items-center p-2 sm:p-2 rounded-lg shadow-lg bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 border border-slate-600"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-1 sm:p-4">
          <div className="md:w-1/2 flex flex-col items-start gap-2 sm:gap-4">
            <p className="text-xl sm:text-2xl text-[#4af041] font-semibold">
              {item?.appName}
            </p>
            <p className="text-sm md:text-base text-white text-left">
              {item?.appDesc}
            </p>
            <div className="flex gap-2 mt-2">
              {item?.techStack?.map((stack) => {
                return (
                  <>
                    <p className="px-4 py-1.5 text-xs md:text-sm bg-slate-900 text-white rounded-full uppercase">
                      {stack}
                    </p>
                  </>
                );
              })}
            </div>
            <div className="space-x-4 mt-1 sm:mt-1 flex gap-4 items-center justify-start">
              <a
                href={item?.demoLink}
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg flex gap-2 items-center justify-center text-white hover:text-blue-500 font-bold"
              >
                <FiExternalLink />
                Live Preview
              </a>
              <a
                href={item?.codeLink}
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg flex gap-2 items-center justify-center text-white hover:text-blue-500 font-bold"
              >
                <FaGithub />
                Repo
              </a>
            </div>
          </div>
          <div className="md:w-1/2 overflow-hidden relative rounded-lg shadow-lg h-44 sm:h-64">
            <motion.div
              style={{scale: imageScale}}
              className="w-full h-full rounded-lg"
            >
              <img
                src={item?.imgsrc}
                alt={item?.imgAlt}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
