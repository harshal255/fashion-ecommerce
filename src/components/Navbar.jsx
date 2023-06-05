import React, { useState, useEffect } from "react";
import {
    Input,
    Drawer,
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import Tooltip from '@mui/material/Tooltip';
import { XMarkIcon } from "@heroicons/react/24/outline";
import '../css/navbar.css';
import { FaFacebookF, FaPinterestP, FaTelegram } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';
import { MdMail } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgShoppingBag } from 'react-icons/cg';

export default function NavbarCom() {
    const [openNav, setOpenNav] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openBag, setOpenBag] = useState(false);
    const [heartCount, setHeartCount] = useState(0);
    const [bagCount, setBagCount] = useState(0);
    const openDrawerSearch = () => setOpenSearch(true);
    const closeDrawerSearch = () => setOpenSearch(false);
    const openDrawerLogin = () => setOpenLogin(true);
    const closeDrawerLogin = () => setOpenLogin(false);
    const openDrawerBag = () => setOpenBag(true);
    const closeDrawerBag = () => setOpenBag(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList1 = (
        <ul className="mb-4 mt-2 flex h-10 flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" className="p-1 font-normal">
                <Tooltip title="Share on Facebook" followCursor placement="bottom">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://looknbookart.com" target="_blank" className="flex items-center custom-link-hover fb-icon">
                        <FaFacebookF size={20} />
                    </a>
                </Tooltip>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
                <Tooltip title="Share on Pinterest" followCursor placement="bottom">
                    <a href="http://pinterest.com/pin/create/button/?url=https://looknbookart.com&media=http://cdn.shopify.com/s/files/1/0601/9514/3900/files/designer-looknbook-art-lehenga-choli-collection_260x_8bea3106-f00d-4d0a-8a46-2e23d3cb4608.png?crop=center&height=1024&v=1682939448&width=1024&description=Looknbook%20Art" target="_blank" className="flex items-center custom-link-hover pin-icon">
                        <FaPinterestP size={20} />
                    </a>
                </Tooltip>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
                <Tooltip title="Share on Telegram" followCursor placement="bottom">
                    <a href="https://telegram.me/share/url?url=https://looknbookart.com"
                        target="_blank" className="flex items-center custom-link-hover tele-icon">
                        <FaTelegram size={20} />
                    </a>
                </Tooltip>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
                <Tooltip title="Share on Mail" followCursor placement="bottom">
                    <a href="mailto:?subject=Looknbook%20Art&body=https://looknbookart.com" target="_blank" className="flex items-center custom-link-hover mail-icon">
                        <MdMail size={20} />
                    </a>
                </Tooltip>
            </Typography>
        </ul>
    );
    const navList2 = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" className="p-1 font-normal">
                <a href="#" className="flex items-center" onClick={openDrawerSearch}>
                    <IoIosSearch size={20} />
                </a>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
                <a href="#" className="flex items-center" onClick={openDrawerLogin}>
                    <VscAccount size={20} />
                </a>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                    <AiOutlineHeart size={20} />
                    <div className="badge">{heartCount}</div>
                </a>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
                <a href="#" className="flex items-center" onClick={openDrawerBag}>
                    <CgShoppingBag size={20} />
                    <div className="badge">{bagCount}</div>
                </a>
            </Typography>
        </ul>
    );
    return (
        <React.Fragment>
            <Navbar className="max-w-screen-3xl py-3 lg:py-5">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div className="hidden lg:block">{navList1}</div>
                    <a href="/">
                        <img
                            src="./images/logo.png"
                            alt="logo"
                        />
                    </a>
                    <div className="hidden lg:block justify-end">{navList2}</div>
                </div>
                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        {navList1}
                    </div>
                </Collapse>
            </Navbar>
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
        </React.Fragment>
    );
}