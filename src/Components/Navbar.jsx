import React from 'react';
import {useState} from 'react';
import {Link} from 'react-scroll';
// import {FaBars} from 'react-icons/fa';
// import {MdClose} from 'react-icons/md';
import {useEffect} from 'react';
import Mohitlogo2 from '../assets/images/name.png';
import Mohitlogo1 from '../assets/images/fly-logo.gif';

export default function Navbar() {
  let [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? 'z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 duration-500 ease-in-out shadow-xl sticky top-0 h-20 px-5 md:px-12 w-full flex justify-between items-center'
          : 'z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 duration-500 ease-in-out sticky top-0 h-20 px-5 md:px-12 w-full flex justify-between items-center'
      }
    >
      <Link activeClass="active" to="home" smooth={true} duration={500}>
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={Mohitlogo1}
            alt="mylogo"
            className="h-full w-20 rounded-full"
          />
          <img
            src={Mohitlogo2}
            alt="mylogo"
            className="h-full w-20 animate-pulse"
          />
        </div>
      </Link>

      {/* <div className="absolute right-7 top-6 cursor-pointer md:hidden" >
        {open ? <MdClose className="h-8 text-white text-3xl" onClick={() => setOpen(false)} />
          : <FaBars className="h-8 text-white text-2xl" onClick={() => setOpen(true)} />}
      </div> */}

      {/* hamburger icon */}
      <div
        className="absolute right-7 top-6 cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`h-1 w-7 bg-white transition-all duration-300 ease-in-out ${
            open ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`h-1 w-7 bg-white my-1 transition-all duration-300 ease-in-out ${
            open ? 'opacity-0 translate-x-20' : ''
          }`}
        ></div>
        <div
          className={`h-1 w-7 bg-white transition-all duration-300 ease-in-out ${
            open ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </div>

      <div>
        <ul
          className={`md:flex font-semibold text-white h-fit md:h-full py-4 gap-8 space-y-6 md:space-y-0 items-center md:space-x-12 z-[-1] md:z-auto
        absolute md:static left-0 w-full md:w-auto border-t-2 md:border-t-0
        transition-all md:transition-none duration-500 ease-in-out shadow-xl md:shadow-none ${
          open
            ? 'top-20 bg-slate-800 md:bg-slate-800'
            : 'bg-transparent top-[-490px]'
        }`}
        >
          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              duration={500}
              className=" relative before:content-[''] before:absolute 
            before:opacity-0 before:-bottom-2 md:before:left-0 before:h-1 before:rounded-full before:duration-300 before:transition-all
            before:bg-white before:w-0 hover:before:h-1 hover:before:w-full hover:before:opacity-100"
            >
              Home
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="about"
              smooth={true}
              duration={500}
              className=" relative before:content-[''] before:absolute 
            before:opacity-0 before:-bottom-2 md:before:left-0 before:h-1 before:rounded-full before:duration-300 before:transition-all
            before:bg-white before:w-0 hover:before:h-1 hover:before:w-full hover:before:opacity-100"
            >
              About
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="skills"
              smooth={true}
              duration={500}
              className=" relative before:content-[''] before:absolute 
            before:opacity-0 before:-bottom-2 md:before:left-0 before:h-1 before:rounded-full before:duration-300 before:transition-all
            before:bg-white before:w-0 hover:before:h-1 hover:before:w-full hover:before:opacity-100"
            >
              Skill
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="work"
              smooth={true}
              duration={500}
              className=" relative before:content-[''] before:absolute 
            before:opacity-0 before:-bottom-2 md:before:left-0 before:h-1 before:rounded-full before:duration-300 before:transition-all
            before:bg-white before:w-0 hover:before:h-1 hover:before:w-full hover:before:opacity-100"
            >
              Work
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
              className=" relative before:content-[''] before:absolute 
            before:opacity-0 before:-bottom-2 md:before:left-0 before:h-1 before:rounded-full before:duration-300 before:transition-all
            before:bg-white before:w-0 hover:before:h-1 hover:before:w-full hover:before:opacity-100"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
