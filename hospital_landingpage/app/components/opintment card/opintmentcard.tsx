export default function OpintmentCard() {
  return (
    <>
      <div className="w-full max-w-[770px] h-[120px] relative mx-auto">
        <img
          src="/opintmentcard_image.png"
          alt="Appointment Card"
          className="w-full h-full object-cover rounded-[10px]"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-[#1b1b1b]/70 rounded-[10px]" />
        <div className="p-2.5 absolute right-4 top-[36px] bg-[#fff9f9] rounded-[5px] justify-center items-center">
          <div className="text-black text-lg sm:text-xl md:text-2xl cursor-pointer font-medium font-['Montserrat']">Appointment</div>
        </div>
        <div className="absolute cursor-pointer left-4 top-[31px] text-center text-white text-lg sm:text-xl md:text-2xl font-medium font-['Montserrat'] uppercase">
          Book Your Appointments <br /> with Ease
        </div>
      </div>
    </>
  );
}

