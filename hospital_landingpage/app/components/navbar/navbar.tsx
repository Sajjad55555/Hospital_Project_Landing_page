  export default function Navbar() {
    return (
      <div>
        <nav className='h-20 w-full bg-slate-100 flex justify-between items-center px-4'>
          <div>
            <img
              className="w-14 cursor-pointer h-14 sm:w-[59px] sm:h-[58px] hover:bg-slate-50"
              src="/Medical Logo 1.svg"
              alt="Medical Logo"
            />
          </div>
  
          {/* Centered Search Bar with Phone and Bell Icons Next to It */}
          <div className='flex-grow flex justify-center items-center'>
            <div className='relative w-full max-w-xs'>
              <input
                className="w-full h-10 md:h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Search..."
              />
              {/* Search Icon inside the Search Bar */}
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.41-1.41L21 21z" />
                </svg>
              </div>
            </div>
  
            {/* Phone and Notification Bell Icons placed next to the Search Bar */}
            <div className='flex cursor-pointer items-center ml-2 sm:ml-8'>
              {/* Phone Icon */}
              <a className='text-3xl' href='#'>&#9990;</a>
              {/* Notification Bell Icon */}
              <a className='text-3xl ml-2 sm:ml-8' href='#'>&#x1F514;</a>
            </div>
          </div>
  
          {/* Other Icons and Menu */}
          <div className="flex gap-6">
            <div className="h-14 w-14 bg-red-400 hidden rounded-full md:block"></div>
            <div className='hidden md:block items-center cursor-pointer'>login/signup</div>
            <div className='md:hidden'>
              <a className='text-4xl' href='#'>&#8801;</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  





















// export default function Navbar() {
//     return (
//       <>
//         <div className="w-full h-20 relative bg-white shadow-md flex justify-between items-center px-4 md:px-10">
//           {/* Logo */}
//           <img
//             className="w-14 h-14 md:w-[59px] md:h-[58px]"
//             src="/Medical Logo 1.svg"
//             alt="Medical Logo"
//           />
  
//           {/* Search Bar */}
//           <div className="flex-1 max-w-md md:max-w-xl mx-auto">
//             <div className="relative">
//               <input
//                 className="w-full h-10 md:h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 type="text"
//                 placeholder="Search..."
//               />
//               <div className="absolute top-0 right-0 h-full flex items-center pr-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-gray-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M10 14l2-2m0 0l2-2m-2 2a9 9 0 110-8.28 9 9 0 110 12.56l-2-2z"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
  
//           {/* User Info */}
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <img
//                 className="w-8 h-8 md:w-[30px] md:h-[30px] rounded-full"
//                 src="https://via.placeholder.com/30x30"
//                 alt="User"
//               />
//               <div className="absolute -top-1 -right-1 w-2 h-2 md:w-[7px] md:h-[7px] bg-red-500 rounded-full"></div>
//             </div>
  
//             <div className="text-black text-sm font-normal font-['Montserrat'] hidden md:block">
//               Mst. Rumi Aktar
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }



  
