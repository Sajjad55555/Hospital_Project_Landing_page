import React from 'react';
import { FaUserMd } from 'react-icons/fa'; // Import the doctor icon
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaArrowTrendDown } from "react-icons/fa6";
export default function Card({ title, icon,icon2, percentage,iconColor,Total,doctrcolor }:any) {
  return (
    <>
      <div className="flex flex-col">
        {/* Title */}
        <div className="text-black cursor-pointer text-2xl font-medium font-['Montserrat']">{title}</div>
        
        {/* Card Container */}
        <div className="w-[267px] h-[185px] bg-white rounded-[10px] shadow mt-10">
          <div className="flex flex-col gap-5 mt-5 mx-6">
            
            {/* Doctor Icon and Percentage */}
            <div className="flex justify-between items-center mt-4">
            <div className={`${doctrcolor} w-10 h-10 rounded-[10px] flex justify-center items-center`}>
                {/* Doctor Icon */}
                <div className='text-white cursor-pointer' style={{fontSize:'40px'}}>{icon2}</div>
                
              </div>
              <div className="text-sm font-medium font-['Montserrat'] flex"><span className={iconColor}>{icon}</span>{percentage}</div>
            </div>
            
          </div>

          {/* Total Doctors */}
          <div className="text-black text-base font-medium font-['Montserrat'] mx-4 mt-6">{Total}</div>

          {/* Stats */}
          <div className="flex justify-between items-center mx-6 mt-6">
            <div className="text-[#e41b1b] text-2xl font-semibold font-['Montserrat']">500+</div>
            <div className="text-black text-sm font-medium font-['Montserrat'] flex gap-1"> <span className=" text-red-500"><FaHeart /></span>95% </div>
            <div className="text-black text-sm font-medium font-['Montserrat'] flex gap-1"><span className=" text-green-500"><FaHeart /></span>25%</div>
          </div>
        </div>
      </div>
    </>
  );
}