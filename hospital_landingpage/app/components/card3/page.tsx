import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaArrowTrendDown } from "react-icons/fa6";

export default function Card3({ title, icon, icon2, percentage, iconColor }: any) {
  return (
    <div className="flex flex-col">
      {/* Title */}
      <div className="cursor-pointer text-black text-2xl font-medium font-['Montserrat']">{title}</div>
      
      <div className="w-[267px] h-[185px] relative mt-10">
        <div className="w-[267px] h-[185px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />

        {/* Doctors section */}
        <div className="left-[20px] top-[26px] absolute">
          <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-[#4ad608] rounded-full" />
          <div className="left-[15px] top-0 absolute text-black text-base font-medium cursor-pointer font-['Montserrat']">Doctors</div>
        </div>

        {/* Patients section */}
        <div className="left-[133px] top-[26px] absolute">
          <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-[#081dd6] rounded-full" />
          <div className="left-[15px] top-0 absolute text-black text-base font-medium cursor-pointer font-['Montserrat']">Patients</div>
        </div>

        {/* Full-width Overlapping Ups and Downs Graph */}
        <div className="w-full h-[48.07px] absolute left-0 top-[85.36px] flex justify-center">
          <svg width="267" height="50" viewBox="0 0 267 50" className="mt-2">
            {/* Doctors graph line */}
            <polyline 
              points="0,30 30,20 60,25 90,15 120,20 150,15 180,25 210,20 240,30 267,10" 
              fill="none" 
              stroke="#4ad608" 
              strokeWidth="2"
            />
            {/* Patients graph line */}
            <polyline 
              points="0,20 30,25 60,15 90,30 120,25 150,20 180,35 210,15 240,10 267,20" 
              fill="none" 
              stroke="#081dd6" 
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Weekdays */}
        <div className="left-[20px] top-[150px] absolute text-black text-xs font-normal font-['Montserrat']">Sa</div>
        <div className="left-[54px] top-[150px] absolute text-black text-xs font-normal font-['Montserrat']">Su</div>
        <div className="left-[89px] top-[150px] absolute text-black text-xs font-normal font-['Montserrat']">Mo</div>
        <div className="left-[127px] top-[150px] absolute text-black text-xs font-normal font-['Montserrat']">Tu</div>
        <div className="left-[161px] top-[150px] absolute text-black text-xs font-normal font-['Montserrat']">We</div>
        <div className="left-[200px] top-[150px] absolute text-black text-xs font-normal font-['Montserrat']">Th</div>
        <div className="left-[234px] top-[150px] absolute text-black text-xs font-normal font-['Montserrat']">Fr</div>
      </div>
    </div>
  );
}
