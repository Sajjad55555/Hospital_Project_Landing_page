import React from 'react';
import { RxBarChart } from "react-icons/rx"; // Import the RxBarChart icon

export default function Card2({ title }: { title: string }) {
  return (
    <div className="flex flex-col">
      {/* Title */}
      <div className="cursor-pointer text-black text-2xl font-medium font-['Montserrat']">{title}</div>

      <div className="w-[267px] h-[185px] relative mt-10">
        <div className="w-[267px] h-[185px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />

        {/* Flex Container for Income and Outcome */}
        <div className="flex justify-between absolute top-[26px] left-0 w-full px-4">
          {/* Income Section */}
          <div className="flex flex-col items-center">
            <div className="w-2.5 h-2.5 mb-2 bg-[#4ad608] rounded-full" />
            <div className="text-black text-base font-medium cursor-pointer font-['Montserrat']">Income</div>
            {/* Income Bar Chart */}
            <div className="flex justify-center items-end h-[50px]">
              <RxBarChart className="text-[#4ad608] h-[40px] w-auto" />
            </div>
          </div>

          {/* Outcome Section */}
          <div className="flex flex-col items-center">
            <div className="w-2.5 h-2.5 mb-2 bg-[#081dd6] rounded-full" />
            <div className="text-black text-base font-medium cursor-pointer font-['Montserrat']">Outcome</div>
            {/* Outcome Bar Chart */}
            <div className="flex justify-center items-end h-[50px]">
              <RxBarChart className="text-[#081dd6] h-[40px] w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
