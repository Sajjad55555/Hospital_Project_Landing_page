import TypeAnimate from "../typeanimation/typeanimation";


export default function Header() {
    return (
      <>
      <div className="w-full h-[338px] relative bg-[#2f5f81] rounded-[10px]">
        {/* backroun video start */}
        <video
            src="/hospital bd video.mp4"
            autoPlay
            loop
            muted
            controls
            className=" hidden  md:block w-full opacity-30 md:max-h-full object-cover rounded-lg"
          >
          </video>
        {/* backroun video end */}
    <img className=" md:hidden  w-full h-[338px] left-[2px] top-0 absolute" src="/header_image.png" />
    <img className=" w-[180px] h-[180px] left-[60px] md:left-[92px] top-[70px] absolute rounded-full border-8 border-black" src="/headerlogo_image.png" />
    <div className="md:hidden md:left-[521px] left-[250px] top-[68px] absolute text-center text-white text-[40px] font-bold font-['Montserrat'] uppercase">
      Your Health is <br/>our priority</div>
      <div className="hidden md:block md:left-[521px] sm:left-[400px] left-[250px] top-[68px] absolute text-center text-white text-[40px] font-bold font-['Montserrat'] uppercase"><TypeAnimate/></div>
  </div>
      
      </>
    )
  }
