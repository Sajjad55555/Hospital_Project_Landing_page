
import OverviewCard from "../overviewCard/overviewcard";
import OpintmentCard from "../opintment card/opintmentcard";
import GenderCard from "../gendercard/gendarcard";
import { FaUser } from "react-icons/fa";
import { TbBed } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
export default function Foter() {
  return (
    <div className='bg-slate-100 p-4 grid grid-cols-1 md:grid-cols-12 gap-4'>
      {/* Main Section */}
      <div className='md:col-span-8 row-span-4 flex flex-col'>
        <div>
          <div className="text-black text-2xl font-medium font-['Montserrat'] mb-2">Hospital Overview</div>
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 mb-2'>
          <OverviewCard title="Total Staf" number={900} icon={LuUsers2} iconColor="text-blue-500" />
          <OverviewCard title="Total Bed" number={1000} icon={TbBed} iconColor="text-[#46d9d0]" />
          <OverviewCard title="Daily Surgry" number={100} icon={FaHandHoldingHeart} iconColor="text-green-400" />
          <OverviewCard title="New Patient" number={500} icon={FaUser} iconColor="text-orange-500" /> 
          <OverviewCard title="Daily Released" number={200} icon={FaPersonArrowUpFromLine} iconColor="text-amber-800" />
          </div>
        </div>
        <div className="mt-4 text-am">
          <OpintmentCard />
        </div>
      </div>

      {/* Sidebar Section */}
      <div className='md:col-span-4 row-span-6 flex flex-col justify-between'>
        <div>
          <div className="text-black text-2xl font-medium font-['Montserrat'] mb-4 text-left">
            Gender
          </div>
          <div>
            <GenderCard />
          </div>
        </div>
      </div>
    </div>
  );
}
