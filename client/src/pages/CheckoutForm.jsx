import { useState, useRef, useEffect, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import countryStateData from '../api/countryStateData.json';
import AuthContext from "../AuthContext";
import axios from 'axios';

const setupAxiosInterceptors = (navigate) => {
    const responseInterceptor = axios.interceptors.response.use(
        (response) => response,
        (error) => {
            // If backend returns "Please login to access resources" status code
            if (error.response?.status === 401) {
                // Redirect the user to the login page
                navigate('/login');
            }
            return Promise.reject(error);
        }
    );

    // Return a cleanup function to remove the interceptor when needed
    return () => {
        axios.interceptors.response.eject(responseInterceptor);
    };
};

function CheckoutForm() {
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
    const location = useLocation();
    const { userDetails, fetchUserProfile } = useContext(AuthContext);

    const product = location.state && location.state.product;

    if (!product) {
        // Handle the case when there is no product object selected in the state
        return <div>Please Buy something</div>;
    }

    const { cartItems } = location.state;
    const [activeTab, setActiveTab] = useState('information');
    const [mail, setMail] = useState(userDetails?.email || "");
    const formRef = useRef(null);

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [selectedCountry, setSelectedCountry] = useState("select country");
    const [selectedState, setSelectedState] = useState("select state");
    const [isLoggedIn,setIsLoggedIn] = useState('');
    // const [selectedOption, setSelectedOption] = useState("standard");

    const [taxPrice, setTaxPrice] = useState(200);
    const [shippingPrice, setShippingPrice] = useState(30);
    const [total, setTotal] = useState(0);

    const navigate = useNavigate();

    const handleMailChange = (event) => {
        setMail(event.target.value);
    }
    const handleAddChange = (event) => {
        setAddress(event.target.value);
    }
    // const handleTabClick = (tab) => {
    //     setActiveTab(tab);
    // };
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedState('');
    };
    console.log(mail);
    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    // const handleOptionChange = (option, price) => {
    //     setSelectedOption(option);
    //     setShippingPrice(price);
    // };
    const calculateTotal = () => {
        let cartTotal = 0;

        // Calculate the total price for all products in the cart
        cartItems.forEach((item) => {
            cartTotal += item.product.price * item.quantity;
        });

        // Add tax and shipping price to the total
        const totalPrice = cartTotal + taxPrice + shippingPrice;
        setTotal(totalPrice);
    };

    useEffect(() => {
        calculateTotal();
        fetchUserProfile()
            .then((res) => {
                if(!res){
                    navigate('/login');
                }
                setIsLoggedIn(true); // Set isLoggedIn to true when the user profile is fetched successfully
            })
            .catch(() => {
                setIsLoggedIn(false); // Set isLoggedIn to false if there is an error (user not logged in)
            });
    }, []);

    const handleShippingInfo = (event) => {
        event.preventDefault();

        console.log("hello");
        const formData = new FormData(formRef.current);

        // Extract the values from the form data
        const city = formData.get('city');
        const pincode = formData.get('pincode');
        const phoneNo = formData.get('phoneNo');

        setCity(city);
        setPincode(pincode);
        setPhoneNo(phoneNo);

        console.log(city, pincode, phoneNo);
        setActiveTab('shipping');

    }

    useEffect(() => {
        const cleanupAxiosInterceptors = setupAxiosInterceptors(navigate);

        return () => {
            cleanupAxiosInterceptors();
        };
    }, [navigate]);

    const rzp = new Razorpay({
        key: 'rzp_test_mUYPZJhg6FYh4U',
        currency: 'INR',
    });

    const handleFormSubmit = async () => {

        const requestBody = {
            itemsPrice: 200,
            taxPrice: taxPrice,
            shippingPrice: shippingPrice,
            totalPrice: total,
            orderItems: cartItems.map((item) => ({
                product: item.product._id,
                name: item.product.name,
                price: item.product.price,
                image: item.product.images[0].url,
                quantity: item.quantity,
            })),
            shippingInfo: {
                address: address,
                city: city,
                state: selectedState,
                country: selectedCountry,
                pinCode: pincode,
                phoneNo: phoneNo
            },
            paymentInfo: {
                id: "sample payment info",
                status: "succeeded"
            }
        };

        console.log(requestBody);

        try {
            const res = await axios.post(
                "http://localhost:4000/api/v1/order/new",
                requestBody,
                {
                    withCredentials: true, // Include cookies in the request (important for authentication)
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(res.data); // Assuming the response contains the data you want to log
            // Proceed to Razorpay payment after order placement
            rzp.open({
                amount: total,
                name: 'Ribadiya Brothers',
                description: 'Test Transaction',
                handler: function (response) {
                    // Handle success
                    console.log(response);
                    setIsPaymentSuccess(true);

                    // Send Razorpay response to the server for verification
                    axios
                        .post('http://localhost:4000/api/v1/verify', { response: response }, {
                            withCredentials: true,
                        })
                        .then((vfy) => {
                            console.log(vfy);
                        })
                        .catch((err) => {
                            console.error(err);
                        });
                },
                prefill: {
                    name: userDetails.name,
                    email: userDetails.email,
                    contact: userDetails.phone,
                },
                theme: {
                    color: '#3399cc',
                },
            });
            console.log(isPaymentSuccess);
            alert("Order Placed!");
            navigate('/orders');
        }
        catch (error) {
            alert('Failed to place order' + error.response.data.message);
            console.error(error);
        }
    }
    console.log(fname + " " + lname);
    // const handleFormPaymentSubmit = async (amount) => {
    //     try{
    //         const data = {amount:amount}
    //         const res = await axios.post("http://localhost:4000/api/v1/payment",data,{
    //             withCredentials:true,
    //         })
    //         // console.log(res.data);
    //         return res.data;

    //     }
    //     catch(err){
    //         console.error(err);
    //         return null;
    //     }    

    // };

    // const handleOpenRazorpay = async(amt)=>{
    //     const data = await handleFormSubmit(amt);
    //     console.log(data.order.amount);
    //     var options = {
    //         "key": "rzp_test_mUYPZJhg6FYh4U", // Enter the Key ID generated from the Dashboard
    //         "amount": Number(data.order.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //         "currency": data.currency,
    //         "name": "Ribadiya Brothers",
    //         "description": "Test Transaction",
    //         "order_id": data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //         "handler": function (response){
    //             // alert(response.razorpay_payment_id);
    //             // alert(response.razorpay_order_id);
    //             // alert(response.razorpay_signature)
    //             axios.post("http://localhost:4000/api/v1/verify",{response:response},{
    //                 withCredentials:true,
    //             })
    //                 .then(vfy=>{
    //                     console.log(vfy);
    //                 })
    //                 .catch(err=>{
    //                     console.error(err);
    //                 })
    //         },
    //         "theme": {
    //             "color": "#3399cc"
    //         }
    //     };
    //     var rzp1 = new Razorpay(options);
    //     rzp1.on('payment.failed', function (response){
    //             alert(response.error.code);
    //             alert(response.error.description);
    //             alert(response.error.source);
    //             alert(response.error.step);
    //             alert(response.error.reason);
    //             alert(response.error.metadata.order_id);
    //             alert(response.error.metadata.payment_id);
    //     });
    //     document.getElementById('rzp-button1').onclick = function(e){
    //         rzp1.open();
    //         e.preventDefault();
    //     }
    // };
    return (
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-7/12 border flex items-center justify-center py-10">
                <div>
                    <div id="form">
                        <div className="flex gap-5  text-blue-gray-900 ml-[5rem]">
                            <a href="/" className="w-[12rem]">
                                <img
                                    src="./images/logo.png"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        {/* <ul className="flex mt-1 ml-[5rem]">
                                    <li
                                        className={`cursor-pointer ${activeTab === 'cart' ? 'font-bold' : 'font-normal'}`}
                                        onClick={() => handleTabClick('cart')}
                                    >
                                        Cart
                                    </li>
                                    <li className="mx-2">&gt;</li>
                                    <li
                                        className={`cursor-pointer ${activeTab === 'information' ? 'font-bold' : 'font-normal'}`}
                                        onClick={() => handleTabClick('information')}
                                    >
                                        Information
                                    </li>
                                    <li className="mx-2">&gt;</li>
                                    <li
                                        className={`cursor-pointer ${activeTab === 'shipping' ? 'font-bold' : 'font-normal'}`}
                                        onClick={() => handleTabClick('shipping')}
                                    >
                                        Shipping
                                    </li>
                                    <li className="mx-2">&gt;</li>
                                    <li
                                        className={`cursor-pointer ${activeTab === 'Payment' ? 'font-bold' : 'font-normal'}`}
                                        onClick={() => handleTabClick('Payment')}
                                    >
                                        Payment
                                    </li>
                                </ul> */}
                        {activeTab === 'information' && (
                            <form className="m-20 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleShippingInfo} ref={formRef} >
                                <div className="flex items-center">
                                    <Typography color="gray" className="mt-1 text-black font-bold">
                                        Contact
                                    </Typography>
                                    <Typography color="gray" className="ml-20 text-center font-normal">
                                        Already have an account?{" "}
                                        <Link to="/login" className="font-medium transition-colors hover:text-pink-700">
                                            Log In
                                        </Link>
                                    </Typography>
                                </div>
                                <header>
                                    <div className="my-6 mb-4 flex flex-col gap-6">
                                        <Input size="lg" label="Email" type='email' value={mail} onChange={handleMailChange} />
                                    </div>
                                    <Checkbox
                                        label={
                                            (
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    Email me with news and offers
                                                </Typography>
                                            )
                                        }
                                        containerProps={{ className: "-ml-2.5" }}
                                    />
                                </header>
                                <div className='main'>
                                    <div className="flex items-center">
                                        <Typography color="gray" className="mt-1 font-medium">
                                            Shipping address
                                        </Typography>
                                    </div>
                                    <div className="mb-4 flex flex-col">
                                        <Input size="lg" label="First name" color='pink' type='text' onChange={(e) => { setFname(e.target.value) }} />
                                    </div>
                                    <div className="mb-4 flex flex-col">
                                        <Input size="lg" label="Last name" color='pink' type='text' onChange={(e) => { setLname(e.target.value) }} />
                                    </div>
                                    <div className="mb-4 flex flex-col">
                                        <Input size="lg" label="Address" color='pink' type='text' onChange={handleAddChange} />

                                    </div>
                                    <div className="mb-4 flex flex-col">
                                        <Input size="lg" label="City" color='pink' type='text' name='city' onChange={(e) => { setCity(e.target.value) }} />
                                    </div>

                                    <div id="coutnryState" className="mb-4 flex flex-col gap-4">
                                        <select
                                            value={selectedCountry}
                                            onChange={handleCountryChange}
                                            className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                        >
                                            <option value="select country">Select country</option>
                                            {countryStateData.map((country) => (
                                                <option key={country.country_id} value={country.country_name}>
                                                    {country.country_name}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            value={selectedState}
                                            onChange={handleStateChange}
                                            className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                        >
                                            <option value="select state">Select state</option>
                                            {selectedCountry !== "select country" &&
                                                countryStateData
                                                    .find((country) => country.country_name === selectedCountry)
                                                    ?.states.map((state) => (
                                                        <option key={state.state_id} value={state.state_name}>
                                                            {state.state_name}
                                                        </option>
                                                    ))}
                                        </select>
                                    </div>
                                    <div className="mb-4 flex flex-col">
                                        <Input size="lg" label="PIN code" color='pink' type='number' name='pincode' onChange={(e) => { setPincode(e.target.value) }} />
                                    </div>
                                    <div className="mb-4 flex flex-col">
                                        <Input size="lg" label="Phone" color='pink' type='number' name='phoneNo' onChange={(e) => { setPhoneNo(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="flex items-center" >

                                    <Link to="/orders" className="font-medium transition-colors hover:text-pink-700 w-[50%]">
                                        &lt; Return to cart
                                    </Link>
                                    <Button className="ml-20 mt-6 bg-pink-500" id="rzp-button1" type="submit" onClick={() => { handleFormSubmit(total); }}>
                                        Continue for Payment
                                    </Button>
                                </div>
                            </form>
                        )}
                        {/* {activeTab === 'shipping' && (
                                    <div className="m-20 mb-2 w-80 max-w-screen-lg sm:w-96">
                                        <div className="flex items-center">
                                            <Typography color="gray" className="mt-1 text-black font-bold">
                                                Details
                                            </Typography>
                                        </div>
                                        <table className="table-auto border border-gray-300 rounded-lg">
                                            <tbody>
                                                <tr>
                                                    <td className="font-medium pr-2 border-b py-2">Contact:</td>
                                                    <td className="border-b py-2">{mail}</td>
                                                    <td
                                                        className="cursor-pointer border-b py-2 px-2 hover:text-pink-700"
                                                        onClick={() => setActiveTab('information')}
                                                    >
                                                        Change
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium pr-2 border-b py-2">Address:</td>
                                                    <td className="border-b py-2">{address}</td>
                                                    <td
                                                        className="cursor-pointer border-b py-2 px-2 hover:text-pink-700"
                                                        onClick={() => setActiveTab('information')}
                                                    >
                                                        Change
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="flex items-center">
                                            <Typography color="gray" className="mt-1 text-black font-bold">
                                                Shipping method
                                            </Typography>
                                        </div>
                                        <table className="table-auto border border-gray-300 rounded-lg">
                                            <tbody>
                                                <tr>
                                                    <td className="border-b py-2">
                                                        <input
                                                            type="radio"
                                                            name="shippingOption"
                                                            checked={selectedOption === 'standard'}
                                                            onChange={() => handleOptionChange('standard', 0)}
                                                            className="mr-2"
                                                        />
                                                        Standard
                                                    </td>
                                                    <td className="text-right border-b py-2">Free</td>
                                                </tr>
                                                <tr>
                                                    <td className="border-b py-2">
                                                        <input
                                                            type="radio"
                                                            name="shippingOption"
                                                            checked={selectedOption === 'cashOnDelivery'}
                                                            onChange={() => handleOptionChange('cashOnDelivery', 100)}
                                                            className="mr-2"
                                                        />
                                                        Standard Shipping (Cash on Delivery)
                                                    </td>
                                                    <td className="text-right border-b py-2">100₹</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="flex items-center" >
                                            <p className="font-medium transition-colors hover:text-pink-700 cursor-pointer" onClick={() => { setActiveTab('information') }}>
                                                &lt; Return to information
                                            </p>
                                            <Button className=" ml-20 mt-6 bg-pink-500" onClick={() => { setActiveTab('Payment'); calculateTotal(); }} >
                                                Continue to Payment
                                            </Button>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'Payment' && (
                                    <div className="m-20 mb-2 w-80 max-w-screen-lg sm:w-96">
                                        <div className="flex items-center">
                                            <Typography color="gray" className="mt-1 text-black font-bold">
                                                Details
                                            </Typography>
                                        </div>
                                        <table className="table-auto border border-gray-300 rounded-lg">
                                            <tbody>
                                                <tr>
                                                    <td className="font-medium pr-2 border-b py-2">Contact:</td>
                                                    <td className="border-b py-2">{mail}</td>
                                                    <td
                                                        className="cursor-pointer border-b py-2 px-2 hover:text-pink-700"
                                                        onClick={() => setActiveTab('information')}
                                                    >
                                                        Change
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium pr-2 border-b py-2">Ship to: </td>
                                                    <td className="border-b py-2">{address}</td>
                                                    <td
                                                        className="cursor-pointer border-b py-2 px-2 hover:text-pink-700"
                                                        onClick={() => setActiveTab('information')}
                                                    >
                                                        Change
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium pr-2 border-b py-2">Method:</td>
                                                    <td className="border-b py-2">{selectedOption}</td>
                                                    <td
                                                        className="cursor-pointer border-b py-2 px-2 hover:text-pink-700"
                                                        onClick={() => setActiveTab('shipping')}
                                                    >
                                                        Change
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="flex items-center" >
                                            <p className="font-medium transition-colors hover:text-pink-700 cursor-pointer" onClick={() => { setActiveTab('shipping') }}>
                                                &lt; Return to shipping
                                            </p>
                                            <Button className="ml-20 mt-6 bg-pink-500" id="rzp-button1" onClick={() => { handleFormSubmit(total) }} >
                                                Pay
                                            </Button>
                                        </div>
                                    </div>
                                )} */}
                        <div className='footer'>
                            <hr className="border-gray-300 my-4" />
                            <div className="footer">
                                <ul className="flex justify-center">
                                    <li className="mx-2">
                                        <a href="#">Refund Policy</a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="#">Shipping Policy</a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="#">Terms of Service</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-5/12 border bg-gray-100 p-5 sm:p-7 md:p-10 lg:p-14">
                {cartItems.map((item) => (
                    <div key={item.product._id} className="flex justify-between gap-5 items-center mb-4">
                        <div className='border bg-white px-2 relative'>
                            <img src={item.product.images[0].url} alt="img" className='h-20 w-52 lg:w-16' />
                        </div>
                        <div className="flex flex-col">
                            <span className='text-sm'>{item.product.name}</span>
                            <span className='text-[12px] text-gray-600'>{item.product.description}</span>
                            <span className='text-[12px] text-gray-600'>{item.quantity}</span>
                        </div>
                        <div>
                            {item.product.price * item.quantity}₹
                        </div>
                    </div>
                ))}
                <div className="my-3 border-t-2">
                    <div className="flex flex-col m-4 font-semibold text-lg">
                        <div className="flex justify-between items-center">
                            <span>Subtotal:</span>
                            <span>{total}₹</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckoutForm