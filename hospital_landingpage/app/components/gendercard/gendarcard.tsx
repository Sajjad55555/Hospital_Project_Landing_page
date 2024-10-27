export default function GenderCard() {
    return (
      <>
        <div className="w-[392px] h-[283px] relative">
          {/* Background card */}
          <div className="w-[392px] h-[283px] absolute bg-white rounded-[10px] shadow" />
  
          {/* Circle chart with larger border effect */}
          <div className="w-[190px] h-[190px] absolute left-[101px] top-[15px]">
            {/* Outer colored circle acting as border */}
            <div
              className="w-[190px] h-[190px] rounded-full"
              style={{
                background: `conic-gradient(
                  #ff810d 0% 45%,    /* Male - Orange - 45% */
                  #46d9d0 45% 75%,   /* Female - Blue-green - 30% */
                  #7280ff 75% 100%   /* Child - Purple - 25% */
                )`,
              }}
            />
            
            {/* Inner white circle (smaller) */}
            <div className="w-[120px] h-[120px] bg-white rounded-full absolute left-[35px] top-[35px] flex items-center justify-center">
              {/* 100% label */}
              <div className="text-black text-2xl font-medium font-['Montserrat']">
                100%
              </div>
            </div>
          </div>
  
          {/* Legends container */}
          <div className="absolute left-[60px] top-[221px] flex justify-between w-[270px]">
            {/* Female legend */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <div className="w-[15px] h-[15px] bg-[#46d9d0] rounded-full" />
                <div className="text-black cursor-pointer text-sm font-medium font-['Montserrat']">
                  Female
                </div>
              </div>
              <div className="text-[#585757] text-sm font-medium font-['Montserrat'] mt-1">
                30%
              </div>
            </div>
  
            {/* Male legend */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <div className="w-[15px] h-[15px] bg-[#ff810d] rounded-full" />
                <div className="text-black cursor-pointer text-sm font-medium font-['Montserrat']">
                  Male
                </div>
              </div>
              <div className="text-[#585757] text-sm font-medium font-['Montserrat'] mt-1">
                45%
              </div>
            </div>
  
            {/* Child legend */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <div className="w-[15px] h-[15px] bg-[#7280ff] rounded-full" />
                <div className="text-black cursor-pointer text-sm font-medium font-['Montserrat']">
                  Child
                </div>
              </div>
              <div className="text-[#585757] text-sm font-medium font-['Montserrat'] mt-1">
                25%
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
