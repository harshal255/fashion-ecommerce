import { Link } from "react-router-dom"
import AdminPanel from "../../api/AdminPanels"
import { IoCreateOutline } from "react-icons/io5"
import { useEffect, useState } from "react"
import { AiFillDelete } from "react-icons/ai";
import { PencilIcon } from "@heroicons/react/24/solid";
import axios from "axios"

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);

    const handleUpdateOrder = async (orderId) => {

        const newStatus = prompt();

        const updateStatusUrl = `http://localhost:4000/api/v1/admin/order/${orderId}`;

        try {
            await axios.put(updateStatusUrl, { status: newStatus }, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            alert("Status updated successfully!");
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order._id === orderId ? { ...order, orderStatus: newStatus } : order
                )
            );
        }
        catch (error) {
            alert("Failed to update Status: " + error.response.data.message);
            console.error("Failed to update status:", error);
        }
    }
    const handleDeleteOrder = async (orderId) => {

        const updateStatusUrl = `http://localhost:4000/api/v1/admin/order/${orderId}`;

        try {
            await axios.delete(updateStatusUrl, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            alert("Deletion successfully!");
            setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
        }
        catch (error) {
            alert("Failed to Delete " + error.response.data.message);
            console.error("Failed to delete", error);
        }
    }

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/v1/admin/orders", {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response);
                const { orders } = response.data;
                console.log(orders);
                setOrders(orders);
            })
            .catch((error) => {
                alert(error.response.data.message);
                console.error("Failed to fetch orders:", error);
            });
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleString(undefined, options);
    };

    return (
        <div className="lg:flex justify-center">
            <div className="lg:w-2/3 flex flex-col justify-center items-center m-2 lg:m-10 gap-2 lg:gap-4">
                {orders.map((order) => (
                    <div className='border flex w-full gap-5' key={order._id}>
                        {/* Display order details from the order object */}
                        <div className='flex flex-col w-4/5 justify-evenly'>
                            <img src={order.orderItems[0].image} alt="" className="w-28 h-30" />
                            <h1 className='text-lg'>{order.orderItems[0].name}</h1>
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
                                <small>Address : <span>{order.shippingInfo.address}</span></small>
                                <small>Payment Status : <span className="text-green-500">{order.paymentInfo.status}</span></small>
                                <small>Date : <span>{formatDate(order.cretedAt)}</span></small>
                                <small>Delivery Status: <span>{order.orderStatus}</span></small>
                            </div>
                            <div className="flex justify-between items-end">
                                <span>Total: {order.totalPrice}</span>
                                <div className="flex gap-2">
                                    <PencilIcon className="w-5 h-5 cursor-pointer text-gray-600 hover:text-blue-500" onClick={() => handleUpdateOrder(order._id)} />
                                    <AiFillDelete className="w-5 h-5 cursor-pointer text-red-600 hover:text-red-500" onClick={() => handleDeleteOrder(order._id)} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminOrders