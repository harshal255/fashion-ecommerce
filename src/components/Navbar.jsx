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
import '../css/navbar.css';
import { FaFacebookF, FaPinterestP, FaTelegram } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';
import { MdMail } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgShoppingBag } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiHelpCircle } from 'react-icons/fi';



export default function NavbarCom() {


    const [openNav, setOpenNav] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openBag, setOpenBag] = useState(false);
    const [heartCount, setHeartCount] = useState(0);
    const [bagCount, setBagCount] = useState(0);
    const [openNavbar, setOpenNavbar] = React.useState(false);
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

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

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList1 = (
        <>
            <GiHamburgerMenu onClick={openDrawerNavbar} className="m-2 md:hidden hover:cursor-pointer hover:text-pink-500 hover:scale-125 duration-100"></GiHamburgerMenu>
            <ul className="hidden mb-4 mt-2 md:flex h-10  gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center justify-around sm:gap-8">
                <Typography as="li" variant="small" className="p-1 font-normal">
                    <Tooltip title="Share on Facebook" followCursor placement="bottom">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://looknbookart.com" target="_blank" className="flex items-center custom-link-hover fb-icon" rel="noreferrer">
                            <FaFacebookF size={20} />
                        </a>
                    </Tooltip>
                </Typography>
                <Typography as="li" variant="small" className="p-1 font-normal">
                    <Tooltip title="Share on Pinterest" followCursor placement="bottom">
                        <a href="http://pinterest.com/pin/create/button/?url=https://looknbookart.com&media=http://cdn.shopify.com/s/files/1/0601/9514/3900/files/designer-looknbook-art-lehenga-choli-collection_260x_8bea3106-f00d-4d0a-8a46-2e23d3cb4608.png?crop=center&height=1024&v=1682939448&width=1024&description=Looknbook%20Art" target="_blank" className="flex items-center custom-link-hover pin-icon" rel="noreferrer">
                            <FaPinterestP size={20} />
                        </a>
                    </Tooltip>
                </Typography>
                <Typography as="li" variant="small" className="p-1 font-normal">
                    <Tooltip title="Share on Telegram" followCursor placement="bottom">
                        <a href="https://telegram.me/share/url?url=https://looknbookart.com"
                            target="_blank" className="flex items-center custom-link-hover tele-icon" rel="noreferrer">
                            <FaTelegram size={20} />
                        </a>
                    </Tooltip>
                </Typography>
                <Typography as="li" variant="small" className="p-1 font-normal">
                    <Tooltip title="Share on Mail" followCursor placement="bottom">
                        <a href="mailto:?subject=Looknbook%20Art&body=https://looknbookart.com" target="_blank" className="flex items-center custom-link-hover mail-icon" rel="noreferrer">
                            <MdMail size={20} />
                        </a>
                    </Tooltip>
                </Typography>
            </ul>
        </>
    );
    const navList2 = (
        <ul className="mb-4 mt-2 flex gap-1  md:gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 justify-around">
            <Typography as="li" variant="small" className="md:p-1 font-normal">
                <a href="#" className="flex items-center hover:cursor-pointer hover:text-pink-500 hover:scale-125 duration-100" onClick={openDrawerSearch}>
                    <IoIosSearch size={20} />
                </a>
            </Typography>
            <Typography as="li" variant="small" className="md:p-1 font-normal">
                <a href="#" className="md:flex items-center hidden hover:cursor-pointer hover:text-pink-500 hover:scale-125 duration-100" onClick={openDrawerLogin}>
                    <VscAccount size={20} />
                </a>
            </Typography>
            <Typography as="li" variant="small" className="md:p-1  font-normal relative">
                <a href="#" className="md:flex items-center hidden hover:cursor-pointer hover:text-pink-500 hover:scale-125 duration-100">
                    <AiOutlineHeart size={20} />
                    <div className="badge absolute -top-2 -right-2">{heartCount}</div>
                </a>
            </Typography>
            <Typography as="li" variant="small" className="md:p-1 font-normal">
                <a href="#" className="flex items-center relative hover:cursor-pointer hover:text-pink-500 hover:scale-125 duration-100" onClick={openDrawerBag}>
                    <CgShoppingBag size={20} />
                    <div className="badge absolute -top-2 -right-2">{bagCount}</div>
                </a>
            </Typography>
        </ul>
    );
    const BottomNavbar = (
        <ul className="flex lg:hidden justify-around h-14 w-full  items-center fixed bottom-0 left-0 z-10 bg-white">
            <li className="flex flex-col items-center">
                <span> <ShoppingBagIcon className="h-5 w-5 cursor-pointer" /></span>Shop<span></span>
            </li>
            <li className="flex flex-col items-center">
                <span className="relative">  <AiOutlineHeart className="h-5 w-5 cursor-pointer" /> <div className="badge absolute -top-2 -right-2">{heartCount}</div></span><span>WishList</span>
            </li>
            <li className="flex flex-col items-center">
                <span className="relative"><AiOutlineShoppingCart className="cursor-pointer h-5 w-5" onClick={openDrawerBag}></AiOutlineShoppingCart> <div className="badge absolute -top-2 -right-2">{bagCount}</div></span>Cart<span></span>
            </li>
            <li className="flex flex-col items-center">
                <span> <VscAccount className="h-5 w-5 cursor-pointer" onClick={openDrawerLogin}/></span><span>Account</span>
            </li>
            <li className="flex flex-col items-center">
                <span> <IoIosSearch className="h-5 w-5 cursor-pointer" onClick={openDrawerSearch}/></span><span>Search</span>
            </li>



        </ul>
    )
    return (
        <React.Fragment>
            <Navbar className="max-w-screen-3xl py-3 lg:py-5 px-0 items-center">
                <div className="flex items-center gap-5  text-blue-gray-900 justify-around mx-5">
                    <div className="">{navList1}</div>
                    <a href="/" className="w-[12rem]">
                        <img
                            src="./images/logo.png"
                            alt="logo"
                        />
                    </a>
                    <div className="justify-end">{navList2}</div>
                </div>
                <Collapse open={openNav}>
                    <div className="container ">
                        {navList1}
                    </div>
                </Collapse>
            </Navbar>
            {BottomNavbar}
            <Drawer placement="right" open={openLogin} onClose={closeDrawerLogin}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" >
                        Login
                    </Typography>
                    <IconButton variant="text" onClick={closeDrawerLogin}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                <form className="flex flex-col gap-6 p-4">
                    <Input type="email" label="Email" />
                    <Input type="password" label="Password" />
                    <a href="#" className="link">Forgot your Password?</a>
                    <Button color="pink">Sign In</Button>
                    <a href="#" className="link">New customer? Create your account</a>
                </form>
            </Drawer>
            <Drawer placement="right" open={openSearch} onClose={closeDrawerSearch}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" >
                        SEARCH OUR SITE
                    </Typography>
                    <IconButton variant="text" onClick={closeDrawerSearch}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                <form className="flex flex-col gap-6 p-4">
                    <Input type="email" label="Email" />
                    <Input type="password" label="Password" />
                    <Button color="pink">Sign In</Button>
                </form>
            </Drawer>
            <Drawer placement="right" open={openBag} onClose={closeDrawerBag}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" >
                        SHOOPING CART
                    </Typography>
                    <IconButton variant="text" onClick={closeDrawerBag}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>

            </Drawer>

            <Drawer open={openNavbar} onClose={closeDrawerNavbar}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" color="blue-gray">
                        Side Menu
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawerNavbar}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Demo
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Shop
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Product
                        <ListItemSuffix>
                            <Chip
                                value="14"
                                size="sm"
                                variant="ghost"
                                color="blue-gray"
                                className="rounded-full"
                            />
                        </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Portfolio
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Lookbook
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <AiFillHeart className="h-5 w-5" />
                        </ListItemPrefix>
                        WishList
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <IoIosSearch className="h-5 w-5" />
                        </ListItemPrefix>
                        Search
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <VscAccount className="h-5 w-5" />
                        </ListItemPrefix>
                        Login/Register
                    </ListItem>
                    <ListItem >
                        <ListItemPrefix>
                            <FiHelpCircle className="h-5 w-5" />
                        </ListItemPrefix>
                        Need Help?

                    </ListItem>
                    <ListItem >
                        +01 23456789

                    </ListItem>
                    <ListItem >
                        kalles@domain.com
                    </ListItem>
                </List>
            </Drawer>

        </React.Fragment>
    );
}