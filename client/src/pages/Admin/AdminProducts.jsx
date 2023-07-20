import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineDelete } from 'react-icons/ai';
import { TbArrowsCross } from 'react-icons/tb';
import { RxUpdate } from 'react-icons/rx';
import { IoCreateOutline } from 'react-icons/io5';
import AdminPanels from "../../api/AdminPanels";


const AdminProducts = () => {
  return (
    <div className="Products">
            <Link to='/admin/createProduct' className="flex m-5 gap-2 text-gray-600 items-center"><IoCreateOutline ></IoCreateOutline><span>Create Product</span> </Link>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:w-[97vw] mt-5 xl:mt-10 ">
              {AdminPanels.Products.map((element) => {
                return (
                  <div className="relative w-[10rem] xl:w-[22.5rem] mx-2" key={element.id}>
                    <div className="overflow-hidden shadow-lg cursor-pointer relative overflow-y-hidden group">
                      <div className="hover:scale-110 duration-1000 ease-in-out">
                        <img className="object-cover w-full  xl:h-[32rem] transition-opacity transform-none duration-1000 ease-in-out" src={element.img} alt="Flower and sky" />

                        <div className="absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100 duration-1000 ease-in-out secondContainer">
                          <img className="object-cover w-full   xl:h-[32rem] " src={element.img_hover} alt="Flower and sky" />
                          <div>
                            <div className="iconsCol absolute top-0 left-0 sm:top-6 sm:left-6 p-1 opacity-100 hover:opacity-100 transition-opacity duration-300 m-2">
                              <AiOutlineHeart
                                className="h-[16px] w-[16px] sm:w-6 sm:h-6 text-white m-1"

                              />
                              <TbArrowsCross
                                className="h-[16px] w-[16px] sm:w-6 sm:h-6 text-white m-1 "
                              />

                            </div>
                            <div className="cardButtons absolute -bottom-3 -right-1 sm:top-1/2 sm:left-1/2 sm:bottom-auto sm:right-auto transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 flex flex-col sm:gap-3  bg-white sm:bg-transparent rounded-full">

                              <Link to='/admin/updateProduct'>
                                <button className="rounded-full font-extralight text-sm bg-white text-gray-900 hover:bg-gray-900 hover:text-white  py-2  px-2 sm:px-5 flex items-center flex-col group1">
                                  <RxUpdate className="h-[16px] w-[16px] sm:w-6 sm:h-6" />
                                </button>
                              </Link>
                              <Link to=''>
                                <button className="rounded-full font-extralight text-sm bg-white text-gray-900 py-2 px-2 sm:px-5 flex items-center flex-col hover:bg-gray-900 hover:text-white">
                                  <AiOutlineDelete className="h-[16px] w-[16px] sm:w-6 sm:h-6" />
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cardFooter md:m-2 m-0 text-center text-black  transform transition-opacity flex flex-col items-center text-[12px] md:text-sm ">
                      <p className=' hover:text-blue-900 duration-700'>
                        {element.description}
                      </p>
                      <span>Price : {element.price}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
  )
}

export default AdminProducts