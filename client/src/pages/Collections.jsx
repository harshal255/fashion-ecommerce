import Collections from "../api/Collection";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <div>
      <div className="h-20 sm:h-28 w-full bg-gray-600 box-content"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 m-5  sm:w-[97vw] mt-5 xl:mt-10 ">{
        Collections.map((element) => {
          return (
            <div className='ease-in-out cursor-pointer h-full min-h-[15rem]  w-full md:w-[18rem] lg:w-full  md:h-[27.5rem] xl:h-[40rem] overflow-hidden relative' key={element.id}>


              <img alt="team" className="flex-shrink-0 viol object-center mb-4  ease-in-out object-cover h-full min-h-[15rem] w-full md:w-[18rem] lg:w-full  md:h-[27.5rem] xl:h-[40rem] hover:scale-110 duration-700 " src={element.image} />
              <Link to='/collections/details' className=" absolute bottom-5 sm:bottom-12 mx-5 ml-[17.5%] sm:ml-[22.5%] md:ml-[27.55%] xl:ml-[37.5%] justify-center  bg-white hover:bg-black text-black  hover:text-white py-2 px-3 sm:px-4  duration-500 hover:outline-none ">
                {element.buttonText}
              </Link>
            </div>

          )
        })
      }</div>
    </div>
  )
}

export default Collection
