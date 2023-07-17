import React, { useState } from 'react'
import {
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import countryStateData from '../api/countryStateData.json';

function CheckoutForm() {
    const [activeTab, setActiveTab] = useState('information');
    const [mail, setMail] = useState('');
    const [address, setAddress] = useState('');
    const [selectedCountry, setSelectedCountry] = useState("select country");
    const [selectedState, setSelectedState] = useState("select state");
    const [selectedOption, setSelectedOption] = useState("standard");

    const handleMailChange = (event) => {
        setMail(event.target.value);
    }
    const handleAddChange = (event) => {
        setAddress(event.target.value);
    }
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedState('');
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };
    return (
        <div className="flex">
            <div className="w-2/3 border items-centerflex">
                <div >
                    <div id="form">
                        <div className="flex gap-5  text-blue-gray-900">
                            <a href="/" className="w-[12rem]">
                                <img
                                    src="./images/logo.png"
                                    alt="logo"
                                />
                            </a>
                        </div>

                        <ul className="flex mt-1">
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
                        </ul>
                        {activeTab === 'information' && (
                            <form className="m-20 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="flex items-center">
                                    <Typography color="gray" className="mt-1 text-black font-bold">
                                        Contact
                                    </Typography>
                                    <Typography color="gray" className="ml-20 text-center font-normal">
                                        Already have an account?{" "}
                                        <a href="/login" className="font-medium transition-colors hover:text-pink-700">
                                            Log In
                                        </a>
                                    </Typography>
                                </div>
                                <header>
                                    <div className="my-6 mb-4 flex flex-col gap-6">
                                        <Input size="lg" label="Email" type='email' onChange={handleMailChange} />
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
                                        <Input size="lg" label="First name" color='pink' type='text' />
                                    </div>
                                    <div className="mb-4 flex flex-col">
                                        <Input size="lg" label="Last name" color='pink' type='text' />
                                    </div>
                                    <div className="mb-4 flex flex-col">
                                        <Input size="lg" label="Address" color='pink' type='text' onChange={handleAddChange} />
                                    </div>
                                    <div className="mb-4 flex flex-col">
                                        <Input size="lg" label="Apartment, suite, etc. (optional)" color='pink' type='text' />
                                    </div>
                                    <div className="mb-4 flex flex-col">
                                        <Input size="lg" label="City" color='pink' type='text' />
                                    </div>
                                    <div id="coutnryState" className="mb-4 flex flex-col">
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
                                        <Input size="lg" label="PIN code" color='pink' type='number' />
                                    </div>
                                    <div className="mb-4 flex flex-col">
                                        <Input size="lg" label="Phone" color='pink' type='number' />
                                    </div>
                                    <Checkbox
                                        label={
                                            (
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    Save this information for next time
                                                </Typography>
                                            )
                                        }
                                        containerProps={{ className: "-ml-2.5" }}
                                    />
                                </div>
                                <div className="flex items-center" >
                                    <a href="/cart" className="font-medium transition-colors hover:text-pink-700">
                                        &lt; Return to cart
                                    </a>
                                    <Button className="ml-20 mt-6 bg-pink-500" onClick={() => { setActiveTab('shipping') }} >
                                        Continue to shipping
                                    </Button>
                                </div>
                            </form>
                        )}
                        {activeTab === 'shipping' && (
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
                                                    onChange={() => setSelectedOption('standard')}
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
                                                    onChange={() => setSelectedOption('cashOnDelivery')}
                                                    className="mr-2"
                                                />
                                                Standard Shipping (Cash on Delivery)
                                            </td>
                                            <td className="text-right border-b py-2">100$</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="flex items-center" >
                                    <p className="font-medium transition-colors hover:text-pink-700 cursor-pointer" onClick={() => { setActiveTab('information') }}>
                                        &lt; Return to information
                                    </p>
                                    <Button className=" ml-20 mt-6 bg-pink-500" onClick={() => { setActiveTab('Payment') }} >
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
                                    <Button className="ml-20 mt-6 bg-pink-500" onClick={() => {/* payment interface */ }} >
                                        Complete Order
                                    </Button>
                                </div>
                            </div>
                        )}
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
                    <div id="item">
                    </div>
                </div>
            </div>
            <div className="w-1/2 border h-[100vh] items-center justify-center flex">
                I am a AddToCard Details
            </div>
        </div>
    )
}

export default CheckoutForm;