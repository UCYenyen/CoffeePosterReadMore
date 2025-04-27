import Image from "next/image";
import { useState } from "react";

interface Option {
  value: string;
  Image: string;
  description: string;
}

interface SelectedOptionsProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  options: Option[];
}

const SelectedOptions: React.FC<SelectedOptionsProps> = ({ selectedOption, setSelectedOption, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[60vw]">
      <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
        <div className="">
          <button
            className="text-center flex items-center justify-center text-[24px] pl-[2vw] pr-[1vw] sm:text-[24px] text-black font-semibold p-2 focus:outline-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption}
            {(!isOpen || isOpen) && (
              <svg className="h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] text-black font-semibold shadow-lg rounded-md border-solid border-t-4 py-2">
              {options.map((option) => (
                <button
                  key={option.value}
                  value={option.value}
                  className="text-center flex items-center justify-center w-full h-full py-2 hover:bg-[#46BF6F] font-semibold focus:outline-none"
                  onClick={() => {
                    setSelectedOption(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.value}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[95%]">
        <div className="flex justify-center w-full">
          <Image
            className="w-[100%] border-solid border-4 border-[#93E2AE]"
            src={options.find((opt) => opt.value === selectedOption)?.Image || "./../Images/FunActivities/Bali.svg"}
            alt="Options"
          />
        </div>
        <p className="mt-5 text-amber-50 text-center font-semibold max-w-[100%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
          {options.find((opt) => opt.value === selectedOption)?.description}
        </p>
        <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
          Read More
        </a>
      </div>
    </div>
  );
};

export default SelectedOptions;