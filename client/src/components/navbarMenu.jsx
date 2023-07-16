import React from 'react';
import "../css/navbar.css";
import {
    Typography,
    ListItem,
} from "@material-tailwind/react";

const NavbarMenu = () => {
    return (
        <div className="py-5 hidden lg:flex justify-center gap-[16px]">
            <div className="menu-item-wrapper">
                <Typography as="div" variant="small" className="font-normal">
                    <ListItem className="flex items-center gap-2 py-2 pr-4 menu-btn">
                        <div className='menu-btn'>
                            Lehenga Choli
                        </div>
                    </ListItem>
                </Typography>
            </div>
            <div className="menu-item-wrapper">
                <Typography as="div" variant="small" className="font-normal">
                    <ListItem className="flex items-center gap-2 py-2 pr-4 menu-btn">
                        <div className='menu-btn'>
                            Sarees
                        </div>
                    </ListItem>
                </Typography>
            </div>
            <div className="menu-item-wrapper">
                <Typography as="div" variant="small" className="font-normal">
                    <ListItem className="flex items-center gap-2 py-2 pr-4 menu-btn">
                        <div className='menu-btn'>
                            Gown
                        </div>
                    </ListItem>
                </Typography>
            </div>
            <div className="menu-item-wrapper">
                <Typography as="div" variant="small" className="font-normal">
                    <ListItem className="flex items-center gap-1 py-2 pr-4 menu-btn">
                        <div className='menu-btn'>
                            Collections
                        </div>
                    </ListItem>
                </Typography>
            </div>
        </div>
    );
};

export default NavbarMenu;
