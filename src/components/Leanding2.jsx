import React from 'react';


const FourImages = () => {
  return (


    <div className="flex grid-cols-2  xl:grid-cols-4 gap-2 m-2 sm:mt-5  sm:m-5  sm:w-[97vw] overflow-auto xl:flex scroll-snap-type-x mandatory scrollbar-hide">
      <div className="overflow-hidden className shadow-lg cursor-pointer relative overflow-y-hidden item flex-shrink-0 scroll-snap-align-start">
        <img className="object-cover w-full h-[15rem] sm:h-[30rem] " src="./images/PartyWearLehenga.webp" alt="Flower and sky" />

        <button className="absolute bottom-2 sm:bottom-12 mx-[20%] sm:mx-[25%]  bg-white hover:bg-black text-black  hover:text-white py-2 px-4 duration-500 hover:outline-none flex justify-center">
          Party Wear Lehenga
        </button>
      </div>

      <div className="overflow-hidden className shadow-lg cursor-pointer relative overflow-y-hidden item flex-shrink-0 scroll-snap-align-start ">
        <img className="object-cover w-full h-[15rem] sm:h-[30rem]" src="./images/SequinsLehengaCholi.webp" alt="Flower and sky" />
        <button className="absolute bottom-2 sm:bottom-12 mx-[20%] sm:mx-[25%]  bg-white hover:bg-black text-black  hover:text-white py-2 px-4 duration-500 hover:outline-none flex justify-center">
          Sequins Lehenga Choli
        </button>
      </div>

      <div className="overflow-hidden className shadow-lg cursor-pointer relative overflow-y-hidden item flex-shrink-0 scroll-snap-align-start">
        <img className="object-cover w-full h-[15rem] sm:h-[30rem]" src="./images/SimpleLehengaCholi.webp" alt="Flower and sky" />
        <button className="absolute bottom-2 sm:bottom-12 mx-[20%] sm:mx-[25%]  bg-white hover:bg-black text-black  hover:text-white py-2 px-4 duration-500 hover:outline-none flex justify-center">
          Simple Lehenga Choli
        </button>
      </div>
      <div className="overflow-hidden className shadow-lg cursor-pointer relative overflow-y-hidden item flex-shrink-0 scroll-snap-align-start">
        <img className="object-cover w-full h-[15rem] sm:h-[30rem]" src="./images/SimpleLehengaCholi.webp" alt="Flower and sky" />
        <button className="absolute bottom-2 sm:bottom-12 mx-[20%] sm:mx-[25%]  bg-white hover:bg-black text-black  hover:text-white py-2 px-4 duration-500 hover:outline-none flex justify-center">
          Simple Lehenga Choli
        </button>
      </div>

      <div className="overflow-hidden className shadow-lg cursor-pointer relative overflow-y-hidden item flex-shrink-0 scroll-snap-align-start">
        <img className="object-cover w-full h-[15rem] sm:h-[30rem]" src="./images/ChaniyaCholi.webp" alt="Flower and sky" />
        <button className="absolute bottom-2 sm:bottom-12 mx-[20%] sm:mx-[27.5%]  bg-white hover:bg-black text-black  hover:text-white py-2 px-4 duration-500 hover:outline-none flex justify-center">
          Chaniya Choli
        </button>
      </div>
      <div className="overflow-hidden className shadow-lg cursor-pointer relative overflow-y-hidden item flex-shrink-0 scroll-snap-align-start">
        <img className="object-cover w-full h-[15rem] sm:h-[30rem]" src="./images/ChaniyaCholi.webp" alt="Flower and sky" />
        <button className="absolute bottom-2 sm:bottom-12 mx-[20%] sm:mx-[27.5%]  bg-white hover:bg-black text-black  hover:text-white py-2 px-4 duration-500 hover:outline-none flex justify-center">
          Chaniya Choli
        </button>
      </div>
    </div>


  )
}

export default FourImages