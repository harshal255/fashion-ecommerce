import React, { useState, useEffect} from "react";
import axios from "axios";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const orders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen((cur) => !cur);

    useEffect(() => {
        // Fetch data from the API
        axios
            .get("http://localhost:4000/api/v1/orders/me", {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((response) => {
                const { orders } = response.data;
                setOrders(orders);
            })
            .catch((error) => {
                alert(error.response.data.message);
                console.error("Failed to fetch orders:", error);
            });
    }, []);

    // Function to handle order click and set the selected order
    const handleOrderClick = (orderId) => {
        axios
            .get(`http://localhost:4000/api/v1/order/${orderId}`, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((response) => {
                const { order } = response.data;
                setSelectedOrder(order);
                console.log(selectedOrder);
            })
            .catch((error) => {
                alert(error.response.data.message);
                console.error("Failed to fetch selected order:", error);
            });
    };

    return (
        // <div className="lg:flex">
        //     <div className="lg:w-2/3 flex flex-col justify-center items-center m-2 lg:m-10 gap-2 lg:gap-4">
        //         <div className='border flex w-full gap-5'>
        //             <img src="./images/order.webp" alt="" className='w-28 h-30 ' />
        //             <div className='flex flex-col w-4/5 justify-evenly'>
        //                 <h1 className='text-lg'>Premium Quality Dresses</h1>
        //                 <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
        //                     <small>Adress : <span>hello world this is my address my address to much small compare to others person address</span></small>
        //                     <small>Payment Status : <span className="text-green-500">Success</span></small>
        //                     <small>Date : <span>24/11/2002</span></small>
        //                 </div>
        //                 <div className="flex justify-between items-end">
        //                     <span>Quantity : 1</span>
        //                     <span> Rs. 4500</span>
        //                 </div>

        //             </div>
        //         </div>
        //         <div className='border flex w-full gap-5'>
        //             <img src="./images/order.webp" alt="" className='w-28 h-30 ' />
        //             <div className='flex flex-col w-4/5 justify-evenly'>
        //                 <h1 className='text-lg'>Premium Quality Dresses</h1>
        //                 <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
        //                     <small>Adress : <span>hello world this is my address my address to much small compare to others person address</span></small>
        //                     <small>Payment Status : <span className="text-green-500">Success</span></small>
        //                     <small>Date : <span>24/11/2002</span></small>
        //                 </div>
        //                 <div className="flex justify-between items-end">
        //                     <span>Quantity : 1</span>
        //                     <span> Rs. 4500</span>
        //                 </div>

        //             </div>
        //         </div>
        //         <div className='border flex w-full gap-5'>
        //             <img src="./images/order.webp" alt="" className='w-28 h-30 ' />
        //             <div className='flex flex-col w-4/5 justify-evenly'>
        //                 <h1 className='text-lg'>Premium Quality Dresses</h1>
        //                 <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
        //                     <small>Adress : <span>hello world this is my address my address to much small compare to others person address</span></small>
        //                     <small>Payment Status : <span className="text-green-500">Success</span></small>
        //                     <small>Date : <span>24/11/2002</span></small>
        //                 </div>
        //                 <div className="flex justify-between items-end">
        //                     <span>Quantity : 1</span>
        //                     <span> Rs. 4500</span>
        //                 </div>

        //             </div>
        //         </div>

        //     </div>
        //     <div className="lg:w-1/3 flex flex-col gap-4 p-2 lg:p-5 lg:pr-10">
        //         <h1 className='font-semibold text-lg text-center'>Order Summery</h1>
        //         <div className='text-start'>Billing Address :</div>
        //         <div className='text-gray-500'>hello world this is my address my address to much small compare to others person address</div>
        //         <hr />
        //         <div className='flex justify-between'>
        //             <span className='font-bold'>Sub total : </span>
        //             <span>Rs. 90000</span>
        //         </div>
        //         <button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none rounded-full hover:bg-pink-800 duration-300 hover:translate-y-2 m-auto">Check out</button>
        //     </div>
        // </div>
        <>
            <div className="lg:flex">
                <div className="lg:w-2/3 flex flex-col justify-center items-center m-2 lg:m-10 gap-2 lg:gap-4">
                    {orders.map((order) => (
                        <div key={order._id} className="border flex w-full gap-5 cursor-pointer"
                            onClick={() => handleOrderClick(order._id)} >
                            <img src={order.orderItems[0].image} alt="" className="w-28 h-30" />
                            <div className="flex flex-col w-4/5 justify-evenly">
                                <h1 className="text-lg">{order.orderItems[0].name}</h1>
                                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
                                    <small>
                                        Address : <span>{order.shippingInfo.address}</span>
                                    </small>
                                    <small>
                                        Payment Status :{" "}
                                        <span className="text-green-500">
                                            {order.paymentInfo.status}
                                        </span>
                                    </small>
                                    <small>
                                        Date : <span>{order.paidAt}</span>
                                    </small>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span>Quantity : {order.orderItems[0].quantity}</span>
                                    <span> Rs. {order.totalPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedOrder && (
                <Dialog size={"xl"} open={open} handler={handleOpen} className="bg-white shadow-none mx-0">
                    <div className="">
                        <div className="flex items-center justify-between">
                            <DialogHeader variant="h5" color="pink-gray">
                                Order Details
                            </DialogHeader>
                            <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
                        </div>
                        <div>
                            <img
                                alt="team"
                                className="flex-shrink-0 my-4 w-[100px] h-[100px] object-cover object-center mb-4 rounded-full m-auto hover:cursor-pointer"
                                src={selectedOrder.orderItems[0].image} // Use the image from the orderItems
                            />
                        </div>

                        <DialogBody divider>
                            <div className="flex flex-col gap-3">
                                <Input color="pink" label="User Name" value={selectedOrder.user.name} readOnly />
                                <Input color="pink" label="User Mail" value={selectedOrder.user.email} readOnly />
                                <Input color="pink" label="Shipping Address" value={selectedOrder.shippingInfo.address} readOnly />
                                <Input color="pink" label="City" value={selectedOrder.shippingInfo.city} readOnly />
                                <Input color="pink" label="State" value={selectedOrder.shippingInfo.state} readOnly />
                                <Input color="pink" label="Country" value={selectedOrder.shippingInfo.country} readOnly />
                                <Input color="pink" label="Pin Code" value={selectedOrder.shippingInfo.pinCode} readOnly />
                                <Input color="pink" label="Phone Number" value={selectedOrder.shippingInfo.phoneNo} readOnly />
                                <Input color="pink" label="Payment Status" value={selectedOrder.paymentInfo.status} readOnly />
                                <Input color="pink" label="Paid At" value={selectedOrder.paidAt} readOnly />
                                <Input color="pink" label="Items Price" value={selectedOrder.itemsPrice} readOnly />
                                <Input color="pink" label="Tax Price" value={selectedOrder.taxPrice} readOnly />
                                <Input color="pink" label="Shipping Price" value={selectedOrder.shippingPrice} readOnly />
                                <Input color="pink" label="Total Price" value={selectedOrder.totalPrice} readOnly />
                                <Input color="pink" label="Order Status" value={selectedOrder.orderStatus} readOnly />
                            </div>
                        </DialogBody>
                    </div>
                </Dialog>
            )}
        </>
    );
}

export default orders