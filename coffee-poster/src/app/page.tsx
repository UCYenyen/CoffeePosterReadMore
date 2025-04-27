import { Metadata } from 'next';
import Image from "next/image";

import NavbarUI from "./../Components/navbar";
import Waves from "./../Images/Waves.svg"
import dotbg from "./../Images/dottedbackground.svg"
import poster from "./../Images/Competition/poster.svg"

import DisableZoom from "./../DisableZoom";
export const metadata: Metadata = {
  title: 'CoFFEE 2025',
  description:
    'FTP X UCIC',
};
export default function Home() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-[#132D31] to-[#2B4237]">
      <DisableZoom />
      <NavbarUI />
      <div
        className="relative flex justify-center items-center w-[100vw] h-[100vh] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh] overflow-hidden"
        style={{
          backgroundImage: `url('${dotbg.src}')`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      >
        <Image
          className="absolute z-[-10] w-[50vw] h-[50vh] top-[-20vh] right-[-15vw]"
          src={Waves}
          alt="Waves"
        />

        <Image
          className="absolute rotate-180 z-[-10] w-[50vw] h-[50vh] bottom-[-20vh] left-[-15vw]"
          src={Waves}
          alt="Waves"
        />

        <div className="flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[80%] gap-10">
          {/* {TOP} */}
          <div className="flex justify-center items-center w-full sm:hidden">
            <Image
              className="w-[50]"
              src={poster}
              alt="Poster Logo"
            />
          </div>
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start w-full md:w-[50%] bg-gradient-to-b from-[#93e2af00] to-[#008761] rounded-2xl p-5">
            <div className="relative w-full flex justify-center">
              <div className="bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                <h1 className="text-[24px] text-black font-semibold p-2 text-center">
                  Poster Competition
                </h1>
              </div>
            </div>
            <div className="bg-[#93E2AE] rounded-2xl mt-10 p-5">
              <p className="text-center md:text-left text-black sm:text-[20px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                This competition invites high school and undergraduate students
                to showcase their scientific research through poster
                presentations. Participants will present their work to the
                judges, who will evaluate each submission based on scientific
                content, visual design, and presentation skills.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden sm:flex justify-center items-center w-full md:w-[50%]">
            <Image
              className="flex w-[70%] md:w-[90%] lg:w-[70%] xl:w-[70%]"
              src={poster}
              alt="Poster Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
