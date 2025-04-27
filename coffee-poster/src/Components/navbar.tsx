'use client'
import { useState } from "react";
import Image from "next/image";
import ArrowDown from "./../Images/arrowDown.svg"
import UClogo from "./../Images/uclogo.svg"
import FTPlogo from "./../Images/ftplogo.svg"
export default function navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
      <nav className="relative bg-[#082128] p-10 flex justify-between items-center">
        <div className="flex gap-5">
          <Image src={UClogo} width={50} height={50} alt="UC Logo" />
          <Image src={FTPlogo} width={50} height={50} alt="FTP Logo" />
        </div>
        
        <div className={`absolute left-0 bottom-[-7.5rem] w-full bg-[#082128] z-40 flex flex-col gap-5 p-5 ${
          isMenuOpen ? "flex" : "hidden"}`}>
            <ul className="text-md font-semibold flex flex-col gap-2">
              <li><a href="https://www.ciputra.ac.id/ftp/coffee/#about">About</a></li>
              <li><a href="https://www.ciputra.ac.id/ftp/coffee/#timeline">Timeline</a></li>
              <li><a href="https://www.ciputra.ac.id/ftp/coffee/#conference">Agenda</a></li>
              <li><a href="https://www.ciputra.ac.id/ftp/coffee/">Register</a></li>
            </ul>
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={toggleMenu}
          className="sm:hidden flex flex-col items-center justify-center cursor-pointer"
        >
          {isMenuOpen ? (
            <div className="relative w-10 h-10">
              <div className="absolute w-full h-2 bg-slate-50 rotate-45 top-[50%] left-0"></div>
              <div className="absolute w-full h-2 bg-slate-50 -rotate-45 top-[50%] left-0"></div>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              <div className="bg-slate-50 w-10 h-2"></div>
              <div className="bg-slate-50 w-10 h-2"></div>
              <div className="bg-slate-50 w-10 h-2"></div>
            </div>
          )}
        </div>
        <ul className="gap-5 hidden sm:flex md:flex lg:flex xl:flex">
            <li><a href="#About" className="font-semibold text-xl text-amber-50">ABOUT</a></li>
            <li><a href="#Timeline" className="font-semibold text-xl text-amber-50">TIMELINE</a></li>
            <li className="group cursor-pointer"><div className="relative font-semibold flex gap-2 text-xl text-amber-50">AGENDA 
                <div className="hidden pointer-none hoverlocation w-30 h-60 z-10 absolute group-hover:flex">
                  <div className="hidden mt-21 w-50 h-39"></div>
                  <div className="absolute hidden top-[35%] w-[12.5rem] bg-[#082128] border-solid border-t-8 border-t-[#FFCC00] h-[10rem] group-hover:flex">
                    <ul className="flex flex-col gap-5 ml-2 justify-center h-full text-amber-50 drop-shadow-xl">
                      <li><a href="#Conference">CONFERENCE</a></li>
                      <li><a href="#Competition">COMPETITION</a></li>
                      <li><a href="#FunActivities">FUN ACTIVITIES</a></li>
                    </ul>
                  </div>
                </div>
              <Image src={ArrowDown} width={10} height={10} alt="Coffee Logo"/> {} 
                </div>
              </li>
            <li><a href="" className="font-semibold text-xl">REGISTER</a></li>
        </ul>
      </nav>
  );
}
