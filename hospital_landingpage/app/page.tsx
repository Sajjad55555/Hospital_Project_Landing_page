import Card from "./components/card/card";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Sidebar2 from "./components/sidebar2/sidebar2";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaWheelchair } from "react-icons/fa";
import { FaUserMd } from 'react-icons/fa';
import Card3 from "./components/card3/page";
import Card2 from "./components/card2/card2";
import Foter from "./components/footer/footer";
export default function Home() {
  return (
    <div>
      {/* navbar section start */}
      <Navbar/>
      {/* navbar section end */}
      <div className="flex m-4 gap-2">
        {/* sidebar section */}
        <div className=" w-[150px] h-[1000px] bg-red-100 rounded-xl hidden md:block">
          <Sidebar/></div>
          {/* main contentnt */}
        <div className="w-full bg-slate-100 rounded-lg">
          {/* header section start */}
          <div>
            <Header/>
          </div>
          {/* header section end */}
          {/* docter section start */}
          <div className=" flex  flex-wrap mx-6 justify-center gap-8 items-center">
             <Card doctrcolor="bg-red-500" Total="Total Doctors" title="Doctors" icon2={<FaUserMd/>}  icon={<FaArrowTrendDown/>} percentage={"80"} iconColor="text-red-400"/>
             <Card doctrcolor="bg-blue-500" Total="Total Patient" title="Patients" icon2={<FaWheelchair/>}icon={<FaArrowTrendUp/>} percentage={"60"} iconColor="text-blue-400"/>
             <Card3 title="Report"/>
             <Card2 title="Balance"/>
          </div>
          {/* doctr section end */}
          <Foter/>
          
        </div>
        
      </div>
      
    </div>
  )
}
