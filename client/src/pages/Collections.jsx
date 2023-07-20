import Collections from "../api/Collection";
import { Link } from "react-router-dom";
import { BsFilterCircle } from 'react-icons/bs';
import { useState } from 'react';
import {
  Drawer,
  Typography,
  IconButton,
  Rating
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Collection = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [value, setValue] = useState(12000);
  const [filteredProducts, setFilteredProducts] = useState(Collections);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filterProduct = () => {
    setOpen(false);
    const filteredProducts = Collections.filter(
      (product) => product.price <= value
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <div className="h-20 sm:h-28 w-full bg-gray-600 box-content"></div>
      <div className="flex m-5 gap-2 text-gray-600"> <BsFilterCircle className="text-2xl cursor-pointer" onClick={openDrawer} /><span>Filter</span> </div>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between border-b-2">
          <Typography variant="h5" color="blue-gray">
            Filter Products
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <span>Price</span>
        <div className="w-60 sliderContainer bg-white rounded-10px shadow-sm">
          <input
            type="range"
            min={1000}
            max={12000}
            value={value}
            onChange={handleChange}
            className="w-full h-1 bg-pink-300 appearance-none outline-none rounded-10px cursor-pointer thumb:bg-green-500"
          />
          <p className="text-center mt-2">Value: {value}</p>
        </div>
        <button className="flex text-white bg-pink-500 border-0 my-4 py-2 px-6 focus:outline-none rounded-full hover:bg-pink-800 duration-300 hover:translate-y-2 m-auto" onClick={filterProduct}>Filter Product</button>
      </Drawer>

      {(filteredProducts.length > 0) ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 m-5 sm:w-[97vw] mt-5 xl:mt-10 ">
          {filteredProducts.map((element) => {
            return (
              <div className='ease-in-out cursor-pointer h-full min-h-[18rem] w-full md:w-[18rem] lg:w-full md:h-[30.5rem] xl:h-[43rem] overflow-hidden relative' key={element.id}>
                <img alt="team" className="flex-shrink-0 viol object-center mb-4  ease-in-out object-cover h-full min-h-[18rem] w-full md:w-[18rem] lg:w-full  md:h-[30.5rem] xl:h-[43rem] hover:scale-110 duration-700 " src={element.image} />
                <Link to='/collections/details' className="absolute bottom-5 sm:bottom-12 mx-5 ml-[17.5%] sm:ml-[22.5%] md:ml-[27.55%] xl:ml-[37.5%] justify-center  bg-white hover:bg-black text-black  hover:text-white py-2 px-3 sm:px-4  duration-500 hover:outline-none ">
                  <div>{element.buttonText}</div>
                  <div>Price : {element.price} ₹</div>
                  <Rating value={element.rating} readonly />
                </Link>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="h-[50vh] w-[100vw] flex items-center justify-center text-5xl">Nothing..</div>
      )}
    </div>
  )
}

export default Collection
