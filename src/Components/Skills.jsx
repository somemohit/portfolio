import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import htmllogo from '../assets/images/html.png';
import csslogo from '../assets/images/css.png';
import jslogo from '../assets/images/javascript.png';
import reactlogo from '../assets/images/react.png';
import tailwindlogo from '../assets/images/tailwind.png';
import nextjslogo from '../assets/images/nextjs.png';
import muilogo from '../assets/images/mui.png';
import bootstraplogo from '../assets/images/bootstrap.png';
import gitlogo from '../assets/images/git.svg';
import githublogo from '../assets/images/github.png';
import vscodelogo from '../assets/images/vs.svg';
import npmlogo from '../assets/images/npm.png';
import tslogo from '../assets/images/tslogo.png';
import reduxlogo from '../assets/images/redux.png';
import teamslogo from '../assets/images/teams.png';
import swaggerlogo from '../assets/images/swagger.png';
import postmanlogo from '../assets/images/postman.webp';
import jiralogo from '../assets/images/jira.png';
import {motion} from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * index,
    },
  }),
};

export default function Skills() {
  const languageAndFrameworkData = [
    {
      img: htmllogo,
      name: 'HTML',
    },
    {
      img: csslogo,
      name: 'CSS',
    },
    {
      img: jslogo,
      name: 'JAVASCRIPT',
    },
    {
      img: reactlogo,
      name: 'REACT',
    },
    {
      img: tailwindlogo,
      name: 'TAILWIND',
    },
    {
      img: nextjslogo,
      name: 'NEXT JS',
    },
    {
      img: tslogo,
      name: 'TYPESCRIPT',
    },
    {
      img: reduxlogo,
      name: 'REDUX',
    },
    {
      img: muilogo,
      name: 'MATERIAL UI',
    },
    {
      img: bootstraplogo,
      name: 'BOOTSTRAP',
    },
  ];

  const toolsAndTechnologiesData = [
    {
      img: gitlogo,
      name: 'GIT',
    },
    {
      img: githublogo,
      name: 'GITHUB',
    },
    {
      img: vscodelogo,
      name: 'VS CODE',
    },
    {
      img: npmlogo,
      name: 'NPM',
    },
    {
      img: teamslogo,
      name: 'MS TEAMS',
    },
    {
      img: swaggerlogo,
      name: 'SWAGGER',
    },
    {
      img: postmanlogo,
      name: 'POSTMAN',
    },
    {
      img: jiralogo,
      name: 'JIRA',
    },
  ];

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div
      //   data-aos="fade-up"
      name="skills"
      className="min-h-screen h-fit flex justify-center items-center px-5"
    >
      <div className="w-full">
        <div className="text-white py-6 max-w-[1080px] mx-auto">
          <p className="text-4xl font-semibold text-white inline">My Skills</p>
          <p className="text-lg md:text-2xl my-6">
            These are the technologies i've worked with.
          </p>
        </div>

        <div
          //   data-aos="zoom-in-up"
          className="flex flex-col gap-12 py-6 max-w-[1080px] mx-auto"
        >
          <div>
            <h1 className="text-[#4af041] text-lg">Languages & Frameworks</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {languageAndFrameworkData?.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    className="flex justify-center items-center gap-2 border border-white shadow-md rounded-full px-4 py-2"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={index}
                    viewport={{
                      once: true,
                    }}
                  >
                    <img src={item?.img} alt="html" className="h-4 w-4" />
                    <p className="text-white text-sm sm:text-base">{item?.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <h1 className="text-[#4af041] text-lg">Tools & Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {toolsAndTechnologiesData?.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    className="flex justify-center items-center gap-2 border border-white shadow-md rounded-full px-4 py-2"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={index}
                    viewport={{
                      once: true,
                    }}
                  >
                    <img src={item?.img} alt="html" className="h-4 w-4" />
                    <p className="text-white text-sm sm:text-base">{item?.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
