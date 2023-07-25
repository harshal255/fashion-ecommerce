/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import {
    Drawer,
    Typography,
    Button,
    IconButton,
    Checkbox
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MdAddShoppingCart } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import { ProductContext } from "../pages/collectionDetails";
import { useNavigate } from "react-router-dom";

const AddtoCart = ({ open, onClose, productCount, singleproductPrice }) => {

    const [currentProductCount, setCurrentProductCount] = useState(productCount || 0);
    const [currentProductPrice, setCurrentProductPrice] = useState(singleproductPrice);
    const product = useContext(ProductContext);
    const navigate = useNavigate();

    // console.log(productCount, singleproductPrice);
    const ClearAll = () => {
        setCurrentProductCount(0);
        // console.log(currentProductCount);
    }

    const handleIncrement = () => {
        setCurrentProductCount(currentProductCount + 1);
    };

    const handleDecrement = () => {
        if (currentProductCount > 0) {
            setCurrentProductCount(currentProductCount - 1);
        }
    };


    useEffect(() => {
        setCurrentProductCount(productCount);
    }, [productCount]);


    // useEffect(() => {
    //     // console.log('Display counter in console:', currentProductCount);
    //     // Other logic that depends on the updated value of currentProductCount
    // }, [currentProductCount]);

    useEffect(() => {
        setCurrentProductPrice(currentProductCount * singleproductPrice);
    }, [currentProductCount]);


    const handleCheckout = () => {
        // Navigate to the checkout page with the product object as state
        navigate("/checkout", { state: { product: product,  currentProductPrice: currentProductPrice ,currentProductCount :currentProductCount } });
        window.location.href = '/checkout';
    };

    return (
        <Drawer placement="right" open={open} onClose={onClose} className="overflow-scroll">
            <div className="mb-2 flex items-center justify-between p-4 ">
                <Typography variant="h6">
                    SHOPPING CART
                </Typography>
                <IconButton variant="text" onClick={onClose}>
                    <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
            </div>
            {currentProductCount ? (
                <>
                    <div className="flex gap-2">
                        <div className="w-2/5">
                            <img src={product.images[0].url} alt="Detailspage" className="m-3" />
                        </div>
                        <div className="w-3/5 m-3">
                            <div>{product.name.slice(0, 15) + '...'}</div>
                            <div className="text-[14px] text-gray-500">₹ {currentProductPrice} </div>
                            <button className="flex text-pink py-2 px-6 items-center justify-between gap-3 focus:outline-none rounded-full border border-black my-2">
                                <AiOutlineDelete className="hover:text-pink-500" onClick={handleDecrement} />
                                {currentProductCount}
                                <AiOutlinePlus className={`hover:text-pink-500 ${currentProductCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleIncrement} />
                            </button>
                        </div>
                    </div>
                    <button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none rounded-full hover:bg-pink-800 duration-300 hover:translate-y-2 m-auto" onClick={ClearAll}>
                        Clear All
                    </button>
                </>
            ) : (
                <div className="flex flex-col m-14">
                    <MdAddShoppingCart className="mx-12 h-20 w-20" />
                    <p className="mx-4">Your cart is empty.</p>
                    <Button color="pink" className="rounded-xl" onClick={onClose}>
                        RETURN TO SHOP
                    </Button>
                </div>
            )}
            <div className="subtotal bottom-0 absolute bg-white p-4 border-t-2">
                <div className="flex justify-between m-4 font-semibold text-lg">
                    <span>Subtotal:</span>
                    <span>₹ {currentProductPrice} </span>
                </div>
                <span className="text-[12px] flex items-center">
                    <Checkbox color="pink" defaultChecked />
                    Tax included and shipping calculated at checkout I agree with the terms and conditions.
                </span>
                <button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none rounded-full hover:bg-pink-800 duration-300 hover:translate-y-2 my-4 justify-center items-center w-full" onClick={handleCheckout}>
                    Check Out
                </button>
            </div>
        </Drawer>
    )
}

export default AddtoCart