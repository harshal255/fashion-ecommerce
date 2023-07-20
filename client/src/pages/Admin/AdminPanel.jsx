
import Heading from "../../components/Heading";
import AdminPanels from "../../api/AdminPanels";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineDelete } from 'react-icons/ai';
import { TbArrowsCross } from 'react-icons/tb';
import { RxUpdate } from 'react-icons/rx';
import { IoCreateOutline } from 'react-icons/io5'
import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Tabs,
  TabsHeader,
  Tab
} from "@material-tailwind/react";
import { useState } from 'react'
import AdminDashboard from "./AdminDashboard";






const AdminPanel = () => {

  const [selectedButton, setSelectedButton] = useState('users');



  const handleButtonClick = (buttonName) => {
    console.log("Button is selected" + buttonName);
    setSelectedButton(buttonName);
  };
  return (

    <div>
      <Heading mainTitle={"Admin Panel"} smallTitle={"View, Delete & Edit user as well as Product"}></Heading>
      <AdminDashboard></AdminDashboard>
      <div className="buttons text-center">
        <button
          className={`bg-white  py-2 px-5 m-2 md:m-4 hover:text-black hover:border-2 hover:border-black duration-400
           ${selectedButton === 'users' ? 'text-black border-2 border-black' : 'text-gray-800 border-2 border-transparent'}  
           `}
          onClick={() => handleButtonClick('users')}
        >
          Users
        </button>
        <button
          className={`bg-white py-2 px-5 m-2 md:m-4 hover:text-black hover:border-2 hover:border-black duration-400 
          ${selectedButton === 'products' ? 'text-black border-2 border-black' : 'text-gray-800 border-2 border-transparent'}  
          `}
          onClick={() => handleButtonClick('products')}
        >
          Products
        </button>
      </div>
      {
        selectedButton === 'users' ?
          (<div className="users">
            <Card className="h-full w-full">
              <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                  <div>
                    <Typography variant="h5" color="blue-gray">
                      Members list
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                      See information about all members
                    </Typography>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <Button variant="outlined" color="blue-gray" size="sm">
                      view all
                    </Button>
                    <Button className="flex items-center gap-3" color="blue" size="sm">
                      <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <Tabs value="all" className="w-full md:w-max">
                    <TabsHeader>
                      {AdminPanels.Tabs.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                          &nbsp;&nbsp;{label}&nbsp;&nbsp;
                        </Tab>
                      ))}
                    </TabsHeader>
                  </Tabs>
                  <div className="w-full md:w-72">
                    <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                  </div>
                </div>
              </CardHeader>
              <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {AdminPanels.Table_head.map((head, index) => (
                        <th
                          key={head}
                          className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                          >
                            {head}{" "}
                            {index !== AdminPanels.Table_head.length - 1 && (
                              <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                            )}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {AdminPanels.Users.map(({ img, name, email, job, org, online, date }, index) => {
                      const isLast = index === AdminPanels.Users.length - 1;
                      const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={name}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar src={img} alt={name} size="sm" />
                              <div className="flex flex-col">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {name}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  {email}
                                </Typography>
                              </div>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="flex flex-col">
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {job}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {org}
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="w-max">
                              <Chip
                                variant="ghost"
                                size="sm"
                                value={online ? "online" : "offline"}
                                color={online ? "green" : "blue-gray"}
                              />
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {date}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Tooltip content="Edit User">
                              <IconButton variant="text" color="blue-gray">
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </CardBody>
              <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                  <Button variant="outlined" color="blue-gray" size="sm">
                    Previous
                  </Button>
                  <Button variant="outlined" color="blue-gray" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>) : ((<div className="Products">
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
          </div>))
      }
    </div>
  )
}

export default AdminPanel