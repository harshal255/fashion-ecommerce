/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
    Input,
    Drawer,
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Select,
    Option,
    Rating

} from "@material-tailwind/react";
import Tooltip from '@mui/material/Tooltip';
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,

} from "@heroicons/react/24/solid";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import AddtoCart from "../components/AddtoCart";
import CustomerReview from "../components/CustomerReview";


const collectionDetails = () => {
    const [openNav, setOpenNav] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openBag, setOpenBag] = useState(false);
    const [heartCount, setHeartCount] = useState(0);
    const [bagCount, setBagCount] = useState(0);
    const [openNavbar, setOpenNavbar] = useState(false);
    const [open, setOpen] = useState(0);
    const [selected, SetIsSelected] = useState("All Categories");
    const [isRegister, setIsRegister] = useState(false);
    const [counter, setCounter] = useState(1);
    const [singleprice, setSingleprice] = useState(2600);
    const [price, setPrice] = useState(singleprice);



    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const setSelected = (value) => {
        SetIsSelected(value);
    }
    const openDrawerNavbar = () => {
        setOpenNavbar(true);
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";

    }
    const closeDrawerNavbar = () => {
        setOpenNavbar(false);
        document.body.style.overflow = "";
        document.body.style.height = "";

    }
    const openDrawerSearch = () => {
        setOpenSearch(true);
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";

    }
    const closeDrawerSearch = () => {
        setOpenSearch(false);
        document.body.style.overflow = "";
        document.body.style.height = "";

    }
    const openDrawerLogin = () => {
        setOpenLogin(true);
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
    }
    const closeDrawerLogin = () => {
        setOpenLogin(false);
        document.body.style.overflow = "";
        document.body.style.height = "";
    }
    const openDrawerBag = () => {
        setOpenBag(true);
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
    }
    const closeDrawerBag = () => {
        setOpenBag(false);
        document.body.style.overflow = "";
        document.body.style.height = "";
    }


    const handleIncrement = () => {
        setCounter(counter + 1);

    };

    const handleDecrement = () => {

        if (counter > 0) {
            setCounter(counter - 1);

        }
    };

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);
    // useEffect(() => {
    //     console.log("counter and price is ", counter, price, singleprice, "counter*price", counter * singleprice);
    // }, [counter]);
    useEffect(() => {
        setPrice(counter * singleprice);
    }, [counter]);



    return (
        <>
            <div className="flex flex-col md:flex-row lg:my-5 md:gap-1 lg:gap-5 mt-5">
                <div className="md:w-1/2">
                    <img src="../images/collectiondetails.webp" alt="Detailspage" className="m-auto my-2 sm:w-1/2" />
                </div>

                <div className="md:w-1/2 w-full lg:pl-10 lg:py-[5rem] mt-6 lg:mt-0 sm:mx-5 px-5">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">SAREES</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-semibold mb-1">Grey Color Haydrabadi Patola Printed Lehenga</h1>


                    <p className="leading-relaxed ">Make your fashion sense more impressive by wearing grey color lehenga made of dola silk beautify with patola print and foil work.
                        This lehenga paired with fully unstitch similar blouse material and comes with dupatta.
                        This silk lehenga is semi-stitch with canvas and can can.
                        This white lehenga choli length is 41 inches</p>

                    <span className="title-font font-medium text-2xl text-gray-900">₹{price}</span>
                    <div className="flex mt-4 gap-2">
                        <button className="flex text-pink py-2 px-6 items-center justify-between gap-3 focus:outline-none rounded-full border border-black ">
                            <AiOutlineMinus
                                className={`hover:text-pink-500 ${counter === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={handleDecrement}
                            />

                            {counter}
                            <AiOutlinePlus className="hover:text-pink-500" onClick={handleIncrement} />

                        </button>
                        <button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none rounded-full hover:bg-pink-800 duration-300 hover:translate-y-2" onClick={openDrawerBag}>Add to Card</button>
                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                            <AiOutlineHeart className='text-pink-500' />

                        </button>
                    </div>
                    <h2 className="text-sm title-font text-gray-500 tracking-widest my-2">First Select or Update product Quality & then AddtoCart</h2>
                </div>
                <AddtoCart open={openBag} onClose={closeDrawerBag} productCount={counter} singleproductPrice={singleprice}></AddtoCart>
            </div>
            <CustomerReview></CustomerReview>


        </>
    )
}

export default collectionDetails