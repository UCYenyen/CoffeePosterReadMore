'use client'

import Image from "next/image";
import Entertainment1 from "./../Images/LocationsAndAccommodation/entertainment1.svg";
import React, { useState } from "react";
import SelectedOptions from "./SelectedOptions";
import ArrowButton from "./../Images/buttonArrow.svg"

export default function LocationsAndAccommodation() {
    // Mobile dropdown options
    const [selectedOptionEntertainment, setSelectedOptionEntertainment] = useState('Entertainment 1');
    const [selectedOptionEntertainment2, setSelectedOptionEntertainment2] = useState('Entertainment 1');
    
    // Desktop carousel state
    const [currentEntertainment1Index, setCurrentEntertainment1Index] = useState(0);
    const [currentEntertainment2Index, setCurrentEntertainment2Index] = useState(0);
    const [currentFood1Index, setCurrentFood1Index] = useState(0);
    const [currentFood2Index, setCurrentFood2Index] = useState(0);
    const [currentHotel1Index, setCurrentHotel1Index] = useState(0);
    const [currentHotel2Index, setCurrentHotel2Index] = useState(0);
    
    const optionsEntertainment = [
        {value: 'Entertainment 1', Image: Entertainment1, description: 'Visit the Surabaya City Museum to explore the rich cultural heritage of Surabaya. Located in the heart of the city, this museum offers fascinating exhibits that showcase the history, art, and traditional artifacts of East Java.'},
        {value: 'Entertainment 2', Image: Entertainment1, description: "Experience Surabaya's modern attractions including shopping malls, parks, and vibrant street markets that showcase the dynamic culture of Indonesia's second-largest city."},
        {value: 'Entertainment 3', Image: Entertainment1, description: "Discover Surabaya's colonial architecture with guided tours of historic buildings and monuments that reflect the city's Dutch colonial past."},
        {value: 'Entertainment 4', Image: Entertainment1, description: "Take a cultural journey through Surabaya's diverse religious sites, including the iconic Cheng Hoo Mosque and the historic Arab Quarter."},
    ];

    const [selectedOptionFood, setSelectedOptionFood] = useState('FOOD 1');
    const [selectedOptionFood2, setSelectedOptionFood2] = useState('FOOD 1');

    const optionsFood = [
        {value: 'FOOD 1', Image: Entertainment1, description: 'Try authentic East Javanese cuisine at renowned local restaurants. Taste specialties like Rawon (black beef soup), Soto Ayam (chicken soup), and the famous Rujak Cingur (mixed fruit and vegetable salad with beef nose).'},
        {value: 'FOOD 2', Image: Entertainment1, description: "Experience Surabaya's street food scene with guided food tours exploring the city's vibrant night markets and food stalls offering delicious local snacks and specialties."},
        {value: 'FOOD 3', Image: Entertainment1, description: "Indulge in seafood feasts at coastal restaurants featuring fresh catches from the Java Sea, prepared with traditional spices and cooking techniques."},
        {value: 'FOOD 4', Image: Entertainment1, description: "Enjoy modern dining experiences at Surabaya's upscale restaurants that blend contemporary cuisine with traditional Indonesian flavors."},
    ];

    const [selectedOptionHotel, setSelectedOptionHotel] = useState('HOTEL 1');
    const [selectedOptionHotel2, setSelectedOptionHotel2] = useState('HOTEL 1');

    const optionsHotel = [
        {value: 'HOTEL 1', Image: Entertainment1, description: 'Enjoy luxury accommodations at 5-star hotels in Surabaya, offering premium amenities, stunning city views, and world-class service to ensure a comfortable stay during the conference.'},
        {value: 'HOTEL 2', Image: Entertainment1, description: "Choose from a selection of mid-range hotels conveniently located near the conference venue, providing comfortable rooms, essential amenities, and excellent value for conference attendees."},
        {value: 'HOTEL 3', Image: Entertainment1, description: "Experience local hospitality at boutique hotels that showcase traditional Indonesian design elements while providing modern comforts and personalized service."},
        {value: 'HOTEL 4', Image: Entertainment1, description: "Find budget-friendly accommodations perfect for students and young professionals, with clean, comfortable rooms and convenient access to public transportation."},
    ];

    // Navigation functions
    const handleNext = (currentIndex: number, setIndex: (index: number) => void, options: { value: string; Image: any; description: string }[]) => {
        setIndex((currentIndex + 1) % options.length);
    };
    
    const handlePrev = (currentIndex: number, setIndex: (index: number) => void, options: { value: string; Image: any; description: string }[]) => {
        setIndex((currentIndex - 1 + options.length) % options.length);
    };

    // Circle indicator function
    const handleCircleClick = (index: number, setIndex: (index: number) => void) => {
        setIndex(index);
    };

    return(
        <div>
            <div className="Dekstop hidden xl:block">
                <h1 className="text-center text-4xl font-semibold mt-20 text-amber-50 md:text-6xl">LOCATIONS & ACCOMMODATION</h1>
                <div id="Competition" className="Dekstop w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row gap-[1.5vw]">
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">ENTERTAINMENT 1</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                                <button onClick={() => handlePrev(currentEntertainment1Index, setCurrentEntertainment1Index, optionsEntertainment)}>
                                    <Image className="w-full" src={ArrowButton} alt="ArrowLeft" />
                                </button>
                                <Image className="w-[70%]" src={optionsEntertainment[currentEntertainment1Index].Image} alt="Entertainment1" />
                                <button onClick={() => handleNext(currentEntertainment1Index, setCurrentEntertainment1Index, optionsEntertainment)}>
                                    <Image className="w-full rotate-180" src={ArrowButton} alt="ArrowRight" />
                                </button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                {optionsEntertainment[currentEntertainment1Index].value}
                            </p>
                            <p className="mt-2 text-amber-50 text-center max-w-[90%] text-[16px] pl-2 pr-2">
                                {optionsEntertainment[currentEntertainment1Index].description}
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            {optionsEntertainment.map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`rounded-full w-8 h-8 cursor-pointer ${index === currentEntertainment1Index ? 'bg-amber-50' : 'bg-[#205E58]'}`}
                                    onClick={() => handleCircleClick(index, setCurrentEntertainment1Index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">ENTERTAINMENT 2</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                                <button onClick={() => handlePrev(currentEntertainment2Index, setCurrentEntertainment2Index, optionsEntertainment)}>
                                    <Image className="w-full" src={ArrowButton} alt="ArrowLeft" />
                                </button>
                                <Image className="w-[70%]" src={optionsEntertainment[currentEntertainment2Index].Image} alt="Entertainment2" />
                                <button onClick={() => handleNext(currentEntertainment2Index, setCurrentEntertainment2Index, optionsEntertainment)}>
                                    <Image className="w-full rotate-180" src={ArrowButton} alt="ArrowRight" />
                                </button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                {optionsEntertainment[currentEntertainment2Index].value}
                            </p>
                            <p className="mt-2 text-amber-50 text-center max-w-[90%] text-[16px] pl-2 pr-2">
                                {optionsEntertainment[currentEntertainment2Index].description}
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            {optionsEntertainment.map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`rounded-full w-8 h-8 cursor-pointer ${index === currentEntertainment2Index ? 'bg-amber-50' : 'bg-[#205E58]'}`}
                                    onClick={() => handleCircleClick(index, setCurrentEntertainment2Index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div id="Food" className="Dekstop w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row gap-[1.5vw]">
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">FOOD 1</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                                <button onClick={() => handlePrev(currentFood1Index, setCurrentFood1Index, optionsFood)}>
                                    <Image className="w-full" src={ArrowButton} alt="ArrowLeft" />
                                </button>
                                <Image className="w-[70%]" src={optionsFood[currentFood1Index].Image} alt="Food1" />
                                <button onClick={() => handleNext(currentFood1Index, setCurrentFood1Index, optionsFood)}>
                                    <Image className="w-full rotate-180" src={ArrowButton} alt="ArrowRight" />
                                </button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                {optionsFood[currentFood1Index].value}
                            </p>
                            <p className="mt-2 text-amber-50 text-center max-w-[90%] text-[16px] pl-2 pr-2">
                                {optionsFood[currentFood1Index].description}
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            {optionsFood.map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`rounded-full w-8 h-8 cursor-pointer ${index === currentFood1Index ? 'bg-amber-50' : 'bg-[#205E58]'}`}
                                    onClick={() => handleCircleClick(index, setCurrentFood1Index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">FOOD 2</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                                <button onClick={() => handlePrev(currentFood2Index, setCurrentFood2Index, optionsFood)}>
                                    <Image className="w-full" src={ArrowButton} alt="ArrowLeft" />
                                </button>
                                <Image className="w-[70%]" src={optionsFood[currentFood2Index].Image} alt="Food2" />
                                <button onClick={() => handleNext(currentFood2Index, setCurrentFood2Index, optionsFood)}>
                                    <Image className="w-full rotate-180" src={ArrowButton} alt="ArrowRight" />
                                </button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                {optionsFood[currentFood2Index].value}
                            </p>
                            <p className="mt-2 text-amber-50 text-center max-w-[90%] text-[16px] pl-2 pr-2">
                                {optionsFood[currentFood2Index].description}
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            {optionsFood.map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`rounded-full w-8 h-8 cursor-pointer ${index === currentFood2Index ? 'bg-amber-50' : 'bg-[#205E58]'}`}
                                    onClick={() => handleCircleClick(index, setCurrentFood2Index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div id="LocationsAndAccomodations" className="Dekstop w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row gap-[1.5vw]">
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">ACCOMODATION 1</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                                <button onClick={() => handlePrev(currentHotel1Index, setCurrentHotel1Index, optionsHotel)}>
                                    <Image className="w-full" src={ArrowButton} alt="ArrowLeft" />
                                </button>
                                <Image className="w-[70%]" src={optionsHotel[currentHotel1Index].Image} alt="Hotel1" />
                                <button onClick={() => handleNext(currentHotel1Index, setCurrentHotel1Index, optionsHotel)}>
                                    <Image className="w-full rotate-180" src={ArrowButton} alt="ArrowRight" />
                                </button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                {optionsHotel[currentHotel1Index].value}
                            </p>
                            <p className="mt-2 text-amber-50 text-center max-w-[90%] text-[16px] pl-2 pr-2">
                                {optionsHotel[currentHotel1Index].description}
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            {optionsHotel.map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`rounded-full w-8 h-8 cursor-pointer ${index === currentHotel1Index ? 'bg-amber-50' : 'bg-[#205E58]'}`}
                                    onClick={() => handleCircleClick(index, setCurrentHotel1Index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">ACCOMODATION 2</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                                <button onClick={() => handlePrev(currentHotel2Index, setCurrentHotel2Index, optionsHotel)}>
                                    <Image className="w-full" src={ArrowButton} alt="ArrowLeft" />
                                </button>
                                <Image className="w-[70%]" src={optionsHotel[currentHotel2Index].Image} alt="Hotel2" />
                                <button onClick={() => handleNext(currentHotel2Index, setCurrentHotel2Index, optionsHotel)}>
                                    <Image className="w-full rotate-180" src={ArrowButton} alt="ArrowRight" />
                                </button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                {optionsHotel[currentHotel2Index].value}
                            </p>
                            <p className="mt-2 text-amber-50 text-center max-w-[90%] text-[16px] pl-2 pr-2">
                                {optionsHotel[currentHotel2Index].description}
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                                Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            {optionsHotel.map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`rounded-full w-8 h-8 cursor-pointer ${index === currentHotel2Index ? 'bg-amber-50' : 'bg-[#205E58]'}`}
                                    onClick={() => handleCircleClick(index, setCurrentHotel2Index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

          </div>

          <div className="Mobile block xl:hidden">
            <h1 className="text-center text-4xl font-semibold mt-20 text-amber-50 md:text-6xl">LOCATIONS & ACCOMMODATIONS</h1>
                <div id="FunActivities" className="FunActivities w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row">
                <SelectedOptions selectedOption={selectedOptionEntertainment} setSelectedOption={setSelectedOptionEntertainment} options={optionsEntertainment} />
                <SelectedOptions selectedOption={selectedOptionEntertainment2} setSelectedOption={setSelectedOptionEntertainment2} options={optionsEntertainment} />

                <SelectedOptions selectedOption={selectedOptionFood} setSelectedOption={setSelectedOptionFood} options={optionsFood} />
                <SelectedOptions selectedOption={selectedOptionFood2} setSelectedOption={setSelectedOptionFood2} options={optionsFood} />

                <SelectedOptions selectedOption={selectedOptionHotel} setSelectedOption={setSelectedOptionHotel} options={optionsHotel} />
                <SelectedOptions selectedOption={selectedOptionHotel2} setSelectedOption={setSelectedOptionHotel2} options={optionsHotel} />
                </div>
            </div>
        </div>
    );
}