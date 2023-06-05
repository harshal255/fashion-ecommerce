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

