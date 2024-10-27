import React from 'react';
import { FaTachometerAlt, FaUserMd, FaUsers, FaCalendarAlt, FaCog, FaSignOutAlt, FaTrashAlt, FaMoneyBill } from 'react-icons/fa'; // Import icons

export default function Sidebar() {
  return (
    <div className="w-[134px] h-[900px] relative">
      {/* Sidebar Background */}
      <div className="w-[134px] h-[1000px] left-0 top-0 absolute bg-slate-100 rounded-[10px] shadow"
      ></div>

      {/* Dashboard Item */}
      <div className="left-[28px] cursor-pointer top-[30px] absolute flex-col justify-start items-center gap-[5px] inline-flex">
        <div className="w-6  h-6 bg-[#081dd6] rounded-[5px] flex justify-center items-center">
          <FaTachometerAlt className="text-white" /> {/* Dashboard Icon */}
        </div>
        <div className=" text-[#081dd6] text-sm font-normal font-['Montserrat']">Dashboard</div>
      </div>

      {/* Doctor Item */}
      <div className=" cursor-pointer left-[42px] top-[106px] absolute flex-col justify-start items-center gap-[5px] inline-flex">
        <div className="w-6 h-6 flex justify-center items-center">
          <FaUserMd className="text-black" /> {/* Doctor Icon */}
        </div>
        <div className="text-black text-sm font-normal font-['Montserrat']">Doctor</div>
      </div>

      {/* Patients Item */}
      <div className="left-[38px] top-[182px] cursor-pointer absolute flex-col justify-start items-center gap-[5px] inline-flex">
        <div className="w-6 h-6 flex justify-center  items-center">
          <FaUsers className="text-black " /> {/* Patients Icon */}
        </div>
        <div className="text-black text-sm font-normal font-['Montserrat']">Patients</div>
      </div>

      {/* Appointment Item */}
      <div className="left-[19px] cursor-pointer top-[258px] absolute flex-col justify-start items-center gap-[5px] inline-flex">
        <div className="w-6 h-6 flex justify-center items-center">
          <FaCalendarAlt className="text-black" /> {/* Appointment Icon */}
        </div>
        <div className="text-black text-sm font-normal font-['Montserrat']">Appointment</div>
      </div>

      {/* Payment Item */}
      <div className="left-[35px] cursor-pointer top-[334px] absolute flex-col justify-start items-center gap-[5px] inline-flex">
        <div className="w-6 h-6 flex justify-center items-center">
          <FaMoneyBill className="text-black" /> {/* Payment Icon */}
        </div>
        <div className="text-black text-sm font-normal font-['Montserrat']">Payment</div>
      </div>

      {/* Setting Item */}
      <div className="left-[41px] cursor-pointer top-[410px] absolute flex-col justify-start items-center gap-[5px] inline-flex">
        <div className="w-6 h-6 flex justify-center items-center">
          <FaCog className="text-black" /> {/* Setting Icon */}
        </div>
        <div className="text-black text-sm font-normal font-['Montserrat']">Setting</div>
      </div>

      {/* Log Out Item */}
      <div className="left-[38px] cursor-pointer top-[708px] absolute flex-col justify-start items-center gap-[5px] inline-flex">
        <div className="w-6 h-6 flex justify-center items-center">
          <FaSignOutAlt className="text-[#9d2c2c]" /> {/* Log Out Icon */}
        </div>
        <div className="text-[#9d2c2c] text-sm font-medium font-['Montserrat']">Log Out</div>
      </div>

      {/* Delete Profile Item */}
      <div className="left-[19px] cursor-pointer top-[784px] absolute flex-col justify-start items-center gap-[5px] inline-flex">
        <div className="w-6 h-6 flex justify-center items-center">
          <FaTrashAlt className="text-[#9d2c2c]" /> {/* Delete Profile Icon */}
        </div>
        <div className="text-[#9d2c2c] text-sm font-medium font-['Montserrat']">Delete Profile</div>
      </div>
    </div>
  );
}
