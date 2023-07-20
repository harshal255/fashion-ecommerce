/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { ShoppingBasket } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import { green } from '@mui/material/colors';
import Cookies from 'js-cookie';

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
    Option

} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,

} from "@heroicons/react/24/solid";
import '../css/navbar.css';
import axios from "axios";
import { FaFacebookF, FaPinterestP, FaTelegram } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';
import { MdMail, MdAddShoppingCart } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgShoppingBag } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiHelpCircle } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import AddtoCart from "./AddtoCart";
import AuthContext from "../AuthContext";

export default function NavbarCom() {

    const { isLoggedIN, setIsLoggedIn } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState(null);
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [anchorEl, setAnchorEl] = useState(null);
    const openProfile = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        closeDrawerLogin();

        try {
            // console.log(name, email, password);
            const response = await axios.post('http://localhost:4000/api/v1/register', {
                name,
                email,
                password,
            });
            alert('Registration successful');
            // console.log(response);
            setIsRegister(false);
            navigate('/login');

        } catch (error) {
            alert(error.response.data.message);
            console.error('Registration failed:', error);
        }
    };
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        closeDrawerLogin();

        try {
            const response = await axios.post('http://localhost:4000/api/v1/login', {
                email,
                password,
            });
            // console.log(response);

            // Set the refresh token in the cookie
            alert("Log In Successfull");
            const Token = response.data.token;
            Cookies.set('token', Token);

            if (response.data.user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/');
            }

            setIsLoggedIn(true); // Update isLoggedIn state in the Navbar component
        } catch (error) {
            alert(error.response.data.message);
            console.error('Login failed:', error);
        }
    };

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/me', {
                headers: {
                    Authorization : `Bearer ${Cookies.get('token')}`,
                },
            });
            console.log(Cookies.get('token'));
            const userDetails = response.data.user;
            setUserDetails(userDetails); // Set the user details in the state variable
            alert(`Name: ${userDetails.name}\nEmail: ${userDetails.email}`);
        } catch (error) {
            alert('Failed to fetch user details: ' + error.response.data.message);
            console.error('Failed to fetch user details:', error);
        }
    };


    const handleLogout = async () => {
        
        try {
            const response = await axios.get('http://localhost:4000/api/v1/logout', {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            });
            console.log(response);
            // If the response status is 200, it means the logout was successful
            if (response.status === 200) {
                setIsLoggedIn(false); // Remove the logged-in state
                alert(response.data.message);
                Cookies.remove('token'); // Remove the token from the cookie
            }
        } catch (error) {
            alert(error.response.data.message);
            console.error(error);
        }
    };
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

    const handleRglClick = () => {
        const path = isRegister ? '/register' : '/login';
        navigate(path);
    }

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList1 = (
        <>
            <GiHamburgerMenu onClick={openDrawerNavbar} className="m-2 lg:hidden hover:cursor-pointer hover:text-pink-500 hover:scale-125 duration-100"></GiHamburgerMenu>
            <ul className="hidden mb-4 mt-2 lg:flex h-10  gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center justify-around sm:gap-8">
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
            {isLoggedIN ? (
                <section>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 1 }}
                                aria-controls={openProfile ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openProfile ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32, bgcolor: green[500] }}
                                    variant="rounded" >
                                    U
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={openProfile}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={() => {
                            handleClose();
                            fetchUserDetails();
                        }
                        }>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ShoppingBasket /> Orders
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </section>
            )
                : (<Typography as="li" variant="small" className="md:p-1 font-normal">
                    <a href="#" className="md:flex items-center hidden hover:cursor-pointer hover:text-pink-500 hover:scale-125 duration-100" onClick={openDrawerLogin}>
                        <VscAccount size={20} />
                    </a>
                </Typography>
                )}
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
                <span> <VscAccount className="h-5 w-5 cursor-pointer" onClick={openDrawerLogin} /></span><span>Account</span>
            </li>
            <li className="flex flex-col items-center">
                <span> <IoIosSearch className="h-5 w-5 cursor-pointer" onClick={openDrawerSearch} /></span><span>Search</span>
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
                            src="../images/logo.png"
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

                    <Link to={isRegister ? '/register' : '/login'} onClick={handleRglClick}>
                        <Typography variant="h7" onClick={handleRglClick} >
                            {isRegister ? "REGISTER" : "LOGIN"}

                        </Typography>
                    </Link>
                    <IconButton variant="text" onClick={closeDrawerLogin}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                {!isRegister ? (
                    <form className="flex flex-col gap-6 p-4" onSubmit={handleLoginSubmit}>
                        <Input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size="lg" color="pink" label={
                                <>
                                    Email <span className="text-red-500">*</span>
                                </>
                            } />
                        <Input
                            size="lg"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            color="pink"
                            label={
                                <>
                                    Password <span className="text-red-500">*</span>
                                </>
                            }
                        />
                        <Link to="/recover" className=" underline font-medium transition-colors hover:text-pink-700">
                            Forgot your password?
                        </Link>
                        <Button color="pink" type="submit">Sign In</Button>
                        <a href="#" className="link" onClick={() => { setIsRegister(true) }} >New customer? Create your account</a>
                    </form>
                ) : (
                    <form className="flex flex-col gap-6 p-4" onSubmit={handleRegisterSubmit}>
                        <Input type="text" size="lg" value={name}
                            onChange={(e) => setName(e.target.value)}
                            color="pink" label="Name" />
                        <Input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size="lg" color="pink" label={
                                <>
                                    Email <span className="text-red-500">*</span>
                                </>
                            } />
                        <Input
                            size="lg"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            color="pink"
                            label={
                                <>
                                    Password <span className="text-red-500">*</span>
                                </>
                            }
                        />
                        <Button color="pink" type="submit" >Register</Button>
                        <a href="#" className="link" onClick={() => { setIsRegister(false) }} >Already have an account? Login here</a>
                    </form>
                )
                }
            </Drawer>
            <Drawer placement="right" open={openSearch} onClose={closeDrawerSearch}>
                <div className="mb-2 flex items-center justify-between p-4">

                    <Typography variant="h7" >

                        SEARCH OUR SITE
                    </Typography>
                    <IconButton variant="text" onClick={closeDrawerSearch}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                <div className="w-61 mx-4">
                    <Select value={selected} onChange={setSelected} >
                        <Option value="All Categories">All Categories</Option>
                        <Option value="2 piece lehenga dress">2 piece lehenga dress</Option><Option value="amazon party wear saree">amazon party wear saree</Option><Option value="amazon readymade blouse">amazon readymade blouse</Option><Option value="bandhani dupatta">bandhani dupatta</Option><Option value="bandhani lehenga">bandhani lehenga</Option><Option value="bandhej design">bandhej design</Option><Option value="bandhej dupatta">bandhej dupatta</Option><Option value="batwa bag">batwa bag</Option><Option value="beautiful saree">beautiful saree</Option><Option value="best lehenga online">best lehenga online</Option><Option value="black chaniya choli">black chaniya choli</Option><Option value="black dress">black dress</Option><Option value="black dupatta">black dupatta</Option><Option value="black lehenga">black lehenga</Option><Option value="blouse design pattern">blouse design pattern</Option><Option value="blouse georgette">blouse georgette</Option><Option value="blouses for women">blouses for women</Option><Option value="blue color saree">blue color saree</Option><Option value="blue dupatta combination">blue dupatta combination</Option><Option value="bollywood lehenga choli online shopping">bollywood lehenga choli online shopping</Option><Option value="bridal lehenga choli">bridal lehenga choli</Option><Option value="bridal lehenga for reception">bridal lehenga for reception</Option><Option value="bridesmaids lehenga">bridesmaids lehenga</Option><Option value="chanderi cotton lehenga">chanderi cotton lehenga</Option><Option value="chaniya choli">chaniya choli</Option><Option value="chaniya choli design">chaniya choli design</Option><Option value="chaniya choli for navratri near me">chaniya choli for navratri near me</Option><Option value="chaniya choli for wedding">chaniya choli for wedding</Option><Option value="chaniya choli online">chaniya choli online</Option><Option value="chiffon dupatta">chiffon dupatta</Option><Option value="chiffon kurti">chiffon kurti</Option><Option value="chinon lehenga">chinon lehenga</Option><Option value="choli blouse design">choli blouse design</Option><Option value="chunri dupatta">chunri dupatta</Option><Option value="Clothing">Clothing</Option><Option value="clutches">clutches</Option><Option value="co ord sets for women">co ord sets for women</Option><Option value="co ords sets">co ords sets</Option><Option value="cord set">cord set</Option><Option value="cotton blouse flipkart">cotton blouse flipkart</Option><Option value="cotton blouse price">cotton blouse price</Option><Option value="cotton chaniya choli">cotton chaniya choli</Option><Option value="cotton gown">cotton gown</Option><Option value="cotton kurti">cotton kurti</Option><Option value="cotton lehenga">cotton lehenga</Option><Option value="cotton lehenga for wedding">cotton lehenga for wedding</Option><Option value="cotton saree blouse">cotton saree blouse</Option><Option value="crop lehenga">crop lehenga</Option><Option value="crop lehenga design">crop lehenga design</Option><Option value="crop top">crop top</Option><Option value="crop top and lehenga">crop top and lehenga</Option><Option value="crop top designs for lehenga">crop top designs for lehenga</Option><Option value="crop top dress for indian wedding">crop top dress for indian wedding</Option><Option value="crop top for women">crop top for women</Option><Option value="crop top ki design">crop top ki design</Option><Option value="crop top lehenga">crop top lehenga</Option><Option value="crop top lehenga choli">crop top lehenga choli</Option><Option value="crop top lehenga design 2020">crop top lehenga design 2020</Option><Option value="crop top lehenga with dupatta">crop top lehenga with dupatta</Option><Option value="designer blouse">designer blouse</Option><Option value="designer choli">designer choli</Option><Option value="designer clutch">designer clutch</Option><Option value="designer lehenga online">designer lehenga online</Option><Option value="designer saree">designer saree</Option><Option value="designer sarees for wedding party">designer sarees for wedding party</Option><Option value="dhavani set">dhavani set</Option><Option value="digital print chaniya choli">digital print chaniya choli</Option><Option value="digital printed dupatta">digital printed dupatta</Option><Option value="digital printed saree">digital printed saree</Option><Option value="Dola silk gown">Dola silk gown</Option><Option value="dola silk saree">dola silk saree</Option><Option value="dress for women">dress for women</Option><Option value="Dresses">Dresses</Option><Option value="dupatta">dupatta</Option><Option value="dupatta for lehenga">dupatta for lehenga</Option><Option value="dupatta for lehenga online">dupatta for lehenga online</Option><Option value="dupatta for women">dupatta for women</Option><Option value="dupatta online">dupatta online</Option><Option value="dupatta white">dupatta white</Option><Option value="elegant gowns">elegant gowns</Option><Option value="embroidery work lehenga">embroidery work lehenga</Option><Option value="fancy blouse">fancy blouse</Option><Option value="fancy dupatta">fancy dupatta</Option><Option value="fancy saree">fancy saree</Option><Option value="festival out fit">festival out fit</Option><Option value="floral lehenga">floral lehenga</Option><Option value="floral naira cut kurti">floral naira cut kurti</Option><Option value="floral printed gown">floral printed gown</Option><Option value="floral printed saree">floral printed saree</Option><Option value="gaji dupatta">gaji dupatta</Option><Option value="gaji silk bandhani dupatta online">gaji silk bandhani dupatta online</Option><Option value="gaji silk dupatta">gaji silk dupatta</Option><Option value="gaji silk lehenga">gaji silk lehenga</Option><Option value="gaji silk lehenga choli">gaji silk lehenga choli</Option><Option value="garba chaniya choli">garba chaniya choli</Option><Option value="georgette blouse">georgette blouse</Option><Option value="georgette crop top design">georgette crop top design</Option><Option value="georgette fabric lehenga">georgette fabric lehenga</Option><Option value="georgette gown amazon">georgette gown amazon</Option><Option value="georgette gown with dupatta">georgette gown with dupatta</Option><Option value="georgette lehenga">georgette lehenga</Option><Option value="georgette lehenga choli designs">georgette lehenga choli designs</Option><Option value="georgette long gown">georgette long gown</Option><Option value="georgette saree">georgette saree</Option><Option value="ghaghra chunni">ghaghra chunni</Option><Option value="ghagra choli designs">ghagra choli designs</Option><Option value="girls tops">girls tops</Option><Option value="golden dupatta">golden dupatta</Option><Option value="gota patti dupatta">gota patti dupatta</Option><Option value="gown">gown</Option><Option value="gown collection">gown collection</Option><Option value="gown dress">gown dress</Option><Option value="gown dresses">gown dresses</Option><Option value="gown for women">gown for women</Option><Option value="gown frock">gown frock</Option><Option value="green color gown">green color gown</Option><Option value="green color saree">green color saree</Option><Option value="haldi outfit">haldi outfit</Option><Option value="Haldi rasam gown">Haldi rasam gown</Option><Option value="half saree lehenga choli">half saree lehenga choli</Option><Option value="Handbags">Handbags</Option><Option value="handbags for women">handbags for women</Option><Option value="haydrabadi gown">haydrabadi gown</Option><Option value="heavy dupatta">heavy dupatta</Option><Option value="Hyderabad lehenga choli">Hyderabad lehenga choli</Option><Option value="jacquard dupatta">jacquard dupatta</Option><Option value="jacquard dupatta online">jacquard dupatta online</Option><Option value="jacquard lehenga choli">jacquard lehenga choli</Option><Option value="jacquard saree">jacquard saree</Option><Option value="jacquard silk">jacquard silk</Option><Option value="jacquard silk gown">jacquard silk gown</Option><Option value="jacquard silk lehenga">jacquard silk lehenga</Option><Option value="kaftan">kaftan</Option><Option value="kaftan dress">kaftan dress</Option><Option value="kaftan kurta">kaftan kurta</Option><Option value="kaftan online">kaftan online</Option><Option value="kaftan top">kaftan top</Option><Option value="khadi cotton dupatta">khadi cotton dupatta</Option><Option value="kurti collection">kurti collection</Option><Option value="kurti design">kurti design</Option><Option value="Kurti plazo set">Kurti plazo set</Option><Option value="lacha design">lacha design</Option><Option value="lacha dress">lacha dress</Option><Option value="ladies dupatta">ladies dupatta</Option><Option value="ladies lehenga choli">ladies lehenga choli</Option><Option value="lagadi patta saree">lagadi patta saree</Option><Option value="lancha dress for engagement">lancha dress for engagement</Option><Option value="lancha dress for wedding">lancha dress for wedding</Option><Option value="langa voni">langa voni</Option><Option value="latest chaniya choli">latest chaniya choli</Option><Option value="latest crop top lehenga designs 2021">latest crop top lehenga designs 2021</Option><Option value="latest saree design">latest saree design</Option><Option value="latest sarees with price">latest sarees with price</Option><Option value="lehenga choli">lehenga choli</Option><Option value="lehenga choli amazon">lehenga choli amazon</Option><Option value="lehenga choli design">lehenga choli design</Option><Option value="lehenga choli dress">lehenga choli dress</Option><Option value="lehenga choli for women">lehenga choli for women</Option><Option value="lehenga choli online">lehenga choli online</Option><Option value="lehenga choli online sale">lehenga choli online sale</Option><Option value="lehenga designs">lehenga designs</Option><Option value="lehenga dress for wedding">lehenga dress for wedding</Option><Option value="lehenga for women party wear">lehenga for women party wear</Option><Option value="lehenga in trend 2021">lehenga in trend 2021</Option><Option value="lehenga ka design">lehenga ka design</Option><Option value="lehenga ki design">lehenga ki design</Option><Option value="lehenga look for wedding party">lehenga look for wedding party</Option><Option value="lehenga online">lehenga online</Option><Option value="lehenga online shopping">lehenga online shopping</Option><Option value="lehenga two piece">lehenga two piece</Option><Option value="lehenga with crop top">lehenga with crop top</Option><Option value="lehenga without dupatta">lehenga without dupatta</Option><Option value="lengha dress">lengha dress</Option><Option value="long dresses for women">long dresses for women</Option><Option value="manipuri tussar saree">manipuri tussar saree</Option><Option value="maroon color lehenga">maroon color lehenga</Option><Option value="maroon color lehenga choli">maroon color lehenga choli</Option><Option value="meesho lehenga choli">meesho lehenga choli</Option><Option value="Mehendi color gown">Mehendi color gown</Option><Option value="mehendi color saree">mehendi color saree</Option><Option value="myntra anarkali gown">myntra anarkali gown</Option><Option value="myntra lehenga choli">myntra lehenga choli</Option><Option value="myntra readymade blouse">myntra readymade blouse</Option><Option value="naira cut kurti">naira cut kurti</Option><Option value="navratri chaniya choli">navratri chaniya choli</Option><Option value="navratri chaniya choli near me">navratri chaniya choli near me</Option><Option value="navratri garba dress">navratri garba dress</Option><Option value="navratri lehenga choli">navratri lehenga choli</Option><Option value="navratri special chaniya choli">navratri special chaniya choli</Option><Option value="navy blue lehenga choli">navy blue lehenga choli</Option><Option value="net crop top lehenga">net crop top lehenga</Option><Option value="net lehenga">net lehenga</Option><Option value="new collection dupatta">new collection dupatta</Option><Option value="new lehenga choli">new lehenga choli</Option><Option value="new saree design 2021">new saree design 2021</Option><Option value="online lacha">online lacha</Option><Option value="organza chex gown">organza chex gown</Option><Option value="organza gown">organza gown</Option><Option value="organza lehenga choli">organza lehenga choli</Option><Option value="organza saree">organza saree</Option><Option value="organza sarees online">organza sarees online</Option><Option value="organza shirt">organza shirt</Option><Option value="organza silk saree">organza silk saree</Option><Option value="paithani border lehenga">paithani border lehenga</Option><Option value="paithani bridal lehenga">paithani bridal lehenga</Option><Option value="paithani dupatta online">paithani dupatta online</Option><Option value="paithani ghagra">paithani ghagra</Option><Option value="paithani lehenga">paithani lehenga</Option><Option value="Paithani Lehenga Choli">Paithani Lehenga Choli</Option><Option value="paithani pattu lehenga">paithani pattu lehenga</Option><Option value="paithani saree">paithani saree</Option><Option value="Paithani saree lehenga">Paithani saree lehenga</Option><Option value="paithani silk lehenga">paithani silk lehenga</Option><Option value="party lehenga">party lehenga</Option><Option value="party wear crop top lehenga">party wear crop top lehenga</Option><Option value="party wear dress">party wear dress</Option><Option value="party wear gown">party wear gown</Option><Option value="party wear kurti">party wear kurti</Option><Option value="party wear lehenga">party wear lehenga</Option><Option value="party wear lehenga designs">party wear lehenga designs</Option><Option value="party wear saree">party wear saree</Option><Option value="party wear saree new design 2021">party wear saree new design 2021</Option><Option value="party wear sarees online">party wear sarees online</Option><Option value="patola chaniya choli">patola chaniya choli</Option><Option value="Patola design">Patola design</Option><Option value="patola dupatta">patola dupatta</Option><Option value="patola lehenga">patola lehenga</Option><Option value="patola print lehenga">patola print lehenga</Option><Option value="patola printed saree">patola printed saree</Option><Option value="pavadai dhavani set">pavadai dhavani set</Option><Option value="phulkari dupatta">phulkari dupatta</Option><Option value="pink gaji silk dupatta">pink gaji silk dupatta</Option><Option value="pink jacquard dupatta">pink jacquard dupatta</Option><Option value="pink printed dupatta">pink printed dupatta</Option><Option value="pista colour silk saree">pista colour silk saree</Option><Option value="potli bags">potli bags</Option><Option value="printed dupatta">printed dupatta</Option><Option value="Printed gown">Printed gown</Option><Option value="printed lehenga">printed lehenga</Option><Option value="pure chinon dupatta">pure chinon dupatta</Option><Option value="pure gaji silk dupatta">pure gaji silk dupatta</Option><Option value="pure viscose saree">pure viscose saree</Option><Option value="purple color saree">purple color saree</Option><Option value="purse">purse</Option><Option value="rangoli silk gown">rangoli silk gown</Option><Option value="rangoli silk saree">rangoli silk saree</Option><Option value="rani pink lehenga choli">rani pink lehenga choli</Option><Option value="readymade blouse fancy">readymade blouse fancy</Option><Option value="readymade blouse flipkart">readymade blouse flipkart</Option><Option value="readymade blouse price">readymade blouse price</Option><Option value="readymade designer blouse">readymade designer blouse</Option><Option value="readymade designer blouse online">readymade designer blouse online</Option><Option value="readymade fancy blouse">readymade fancy blouse</Option><Option value="readymade lehenga blouse">readymade lehenga blouse</Option><Option value="readymade silk blouse">readymade silk blouse</Option><Option value="reception lehenga design">reception lehenga design</Option><Option value="reception lehenga look">reception lehenga look</Option><Option value="red color dupatta">red color dupatta</Option><Option value="red colour saree">red colour saree</Option><Option value="red cotton blouse">red cotton blouse</Option><Option value="red lehenga choli">red lehenga choli</Option><Option value="red saree online">red saree online</Option><Option value="round kurti">round kurti</Option><Option value="sadi ka design">sadi ka design</Option><Option value="salwar suits">salwar suits</Option><Option value="Saree">Saree</Option><Option value="saree blouse designs">saree blouse designs</Option><Option value="saree collection">saree collection</Option><Option value="saree dress design">saree dress design</Option><Option value="saree for wedding party">saree for wedding party</Option><Option value="saree green colour">saree green colour</Option><Option value="saree mehndi colour">saree mehndi colour</Option><Option value="saree online">saree online</Option><Option value="saree orange colour">saree orange colour</Option><Option value="saree red colour">saree red colour</Option><Option value="saree shopping">saree shopping</Option><Option value="saree style for wedding">saree style for wedding</Option><Option value="sarees">sarees</Option><Option value="Saris &amp; Lehengas">Saris &amp; Lehengas</Option><Option value="satin lehenga designs">satin lehenga designs</Option><Option value="semi gaji satin saree">semi gaji satin saree</Option><Option value="sequins work lehenga choli">sequins work lehenga choli</Option><Option value="sequins work saree">sequins work saree</Option><Option value="shirt">shirt</Option><Option value="silk dupatta">silk dupatta</Option><Option value="silk dupatta flipkart">silk dupatta flipkart</Option><Option value="silk dupatta online">silk dupatta online</Option><Option value="silk fabric for lehenga">silk fabric for lehenga</Option><Option value="silk lehenga">silk lehenga</Option><Option value="silk lehenga designs 2020">silk lehenga designs 2020</Option><Option value="silk lehenga online">silk lehenga online</Option><Option value="silk printed lehenga">silk printed lehenga</Option><Option value="silk saree">silk saree</Option><Option value="silk sarees">silk sarees</Option><Option value="simple blouse designs">simple blouse designs</Option><Option value="simple lehenga choli">simple lehenga choli</Option><Option value="simple saree">simple saree</Option><Option value="sky blue colour saree">sky blue colour saree</Option><Option value="south indian collection">south indian collection</Option><Option value="south indian lehenga choli">south indian lehenga choli</Option><Option value="south indian saree">south indian saree</Option><Option value="south women fashion">south women fashion</Option><Option value="summer wear collection">summer wear collection</Option><Option value="tops">tops</Option><Option value="traditional gown">traditional gown</Option><Option value="traditional half saree lehenga">traditional half saree lehenga</Option><Option value="traditional saree">traditional saree</Option><Option value="trending collection">trending collection</Option><Option value="two piece ghagra">two piece ghagra</Option><Option value="two piece lehenga">two piece lehenga</Option><Option value="weaving work saree">weaving work saree</Option><Option value="wedding dupatta">wedding dupatta</Option><Option value="wedding gown">wedding gown</Option><Option value="wedding lehenga">wedding lehenga</Option><Option value="wedding saree">wedding saree</Option><Option value="wedding saree collection">wedding saree collection</Option><Option value="wedding wear lehenga">wedding wear lehenga</Option><Option value="weeding wear saree">weeding wear saree</Option><Option value="white color dola silk saree">white color dola silk saree</Option><Option value="white cotton blouse">white cotton blouse</Option><Option value="white dupatta">white dupatta</Option><Option value="white gown dress">white gown dress</Option><Option value="white kurti">white kurti</Option><Option value="white lehenga choli">white lehenga choli</Option><Option value="white tunic">white tunic</Option><Option value="women collection">women collection</Option><Option value="yellow blouse">yellow blouse</Option><Option value="yellow crop top">yellow crop top</Option><Option value="yellow lehenga">yellow lehenga</Option><Option value="yellow lehenga for haldi">yellow lehenga for haldi</Option><Option value="yellow readymade blouse">yellow readymade blouse</Option><Option value="yeola paithani">yeola paithani</Option><Option value="yeola semi paithani">yeola semi paithani</Option>
                    </Select>
                    <div className="search-container">
                        <Input placeholder="Search"></Input>
                        <div className="search-icon">
                            <IoIosSearch size={20} />
                        </div>
                    </div>
                </div>
                <div className="margin">
                    <a href="#" className="link block px-4 py-2 bg-gray-100 border-t border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors duration-200">

                        Search for `{selected}`

                    </a>
                </div>
            </Drawer>
            {/* openBag,closeDrawerBag */}
            <AddtoCart open={openBag} onClose={closeDrawerBag}></AddtoCart>


            <Drawer open={openNavbar} onClose={closeDrawerNavbar}>
                <div className="mb-2 flex items-center justify-between p-4">

                    <Typography variant="h7" color="blue-gray">

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

        </React.Fragment >
    );
}