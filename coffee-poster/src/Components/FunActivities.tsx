'use client'

import Bali from "./../Images/FunActivities/Bali.svg"
import CityTour from "./../Images/FunActivities/CityTour.svg"
import React, { useState } from "react";
import SelectedOptions from "./SelectedOptions";
export default function FunActivities(){
  const [selectedOption, setSelectedOption] = useState('Day 2 : Option 1 Bali');

  const options = [
    {value: 'Day 2 : Option 1 Bali', Image: Bali, description: 'Get ready for an unforgettable 3 Days 2 Nights adventure in Bali, starting on the second day of COFFEE 2025! Explore, taste, and experience Bali like never before!'},
    {value: 'Day 2 : Option 2 City Tour', Image: CityTour, description: "Experience a full day of inspiration, creativity, and cultural discovery on the second day of CoFFEE 2025! Start your journey at Universitas Ciputra’s Food Technology Program Lab, where you'll explore a professional lab environment filled with advanced equipment used in real-world food processing and research."},
  ];
    return(
        <div>
        <h1 className="text-center text-4xl font-semibold mt-20 text-amber-50 md:text-6xl">FUN ACTIVITES</h1>
          <div id="FunActivities" className="FunActivities w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row">
          <SelectedOptions selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={options} />
          </div>
        </div>
    );
}