import React, { useState, useEffect } from "react";
import {
    Input,
    Drawer,
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import '../css/navbar.css';
import { Facebook, Pinterest, Telegram, Mail, Search, AccountCircle, Favorite, ShoppingBag } from '@mui/icons-material';

export default function NavbarCom() {
    const [openNav, setOpenNav] = useState(false);
    const [open, setOpen] = useState(false);
    const openDrawerLogin = () => setOpen(true);
    const closeDrawerLogin = () => setOpen(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList1 = (
        <ul className="mb-4 mt-2 flex h-10 flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://looknbookart.com" target="_blank" className="flex items-center custom-link-hover fb-icon">
                    <Facebook fontSize="small" />
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="http://pinterest.com/pin/create/button/?url=https://looknbookart.com&media=http://cdn.shopify.com/s/files/1/0601/9514/3900/files/designer-looknbook-art-lehenga-choli-collection_260x_8bea3106-f00d-4d0a-8a46-2e23d3cb4608.png?crop=center&height=1024&v=1682939448&width=1024&description=Looknbook%20Art" target="_blank" className="flex items-center custom-link-hover pin-icon">
                    <Pinterest fontSize="small" />
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="https://telegram.me/share/url?url=https://looknbookart.com"
                    target="_blank" className="flex items-center custom-link-hover tele-icon">
                    <Telegram fontSize="small" />
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="mailto:?subject=Looknbook%20Art&body=https://looknbookart.com" target="_blank" className="flex items-center custom-link-hover mail-icon">
                    <Mail fontSize="small" />
                </a>
            </Typography>
        </ul>
    );
    const navList2 = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                    <Search fontSize="small" />
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center" onClick={openDrawerLogin}>
                    <AccountCircle fontSize="small" />
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                    <Favorite fontSize="small" />
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                    <ShoppingBag fontSize="small" />
                </a>
            </Typography>
        </ul>
    );
    return (
        <React.Fragment>
            <Navbar className="py-3 lg:py-5">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div className="hidden lg:block">{navList1}</div>
                    <img
                        src="./images/logo.png"
                        alt="logo"
                    />
                    <div className="hidden lg:block justify-end">{navList2}</div>
                </div>
                {/* <MobileNav open={openNav}>
                    <div className="container mx-auto">
                        {navList1}
                    </div>
                </MobileNav> */}
            </Navbar>
            <Drawer placement="right" open={open} onClose={closeDrawerLogin}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" color="blue-gray">
                        Contact Us
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawerLogin}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                <form className="flex flex-col gap-6 p-4">
                    <Input type="email" label="Email" />
                    <Input type="password" label="Password" />
                    <Button>Sign In</Button>
                </form>
            </Drawer>
        </React.Fragment>
    );
}