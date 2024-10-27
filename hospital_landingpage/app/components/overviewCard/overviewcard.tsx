import { TbBed } from "react-icons/tb";

export default function OverviewCard({ icon: Icon, iconColor,title,number }:any) {
  return (
    <div className="w-[130px] h-[133px] relative flex flex-col justify-start items-center">
      <div className="w-[130px] cursor-pointer bg-white h-[133px] rounded-[10px] border border-[#424242] flex flex-col items-center justify-center">
        <Icon className={`w-[100px] h-[50px] rounded-[10px] ${iconColor}`} />
        <div className="text-[#1b1b1b] text-xl font-bold font-['Montserrat']">{number}</div>
        <div className="text-[#1a1a1a] text-base font-semibold font-['Montserrat']">{title}</div>
      </div>
    </div>
  );
}
