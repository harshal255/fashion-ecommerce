const orders = () => {
    return (
        <div className="lg:flex">
            <div className="lg:w-2/3 flex flex-col justify-center items-center m-2 lg:m-10 gap-2 lg:gap-4">
                <div className='border flex w-full gap-5'>
                    <img src="./images/order.webp" alt="" className='w-28 h-30 ' />
                    <div className='flex flex-col w-4/5 justify-evenly'>
                        <h1 className='text-lg'>Premium Quality Dresses</h1>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
                            <small>Adress : <span>hello world this is my address my address to much small compare to others person address</span></small>
                            <small>Payment Status : <span className="text-green-500">Success</span></small>
                            <small>Date : <span>24/11/2002</span></small>
                        </div>
                        <div className="flex justify-between items-end">
                            <span>Quantity : 1</span>
                            <span> Rs. 4500</span>
                        </div>

                    </div>
                </div>
                <div className='border flex w-full gap-5'>
                    <img src="./images/order.webp" alt="" className='w-28 h-30 ' />
                    <div className='flex flex-col w-4/5 justify-evenly'>
                        <h1 className='text-lg'>Premium Quality Dresses</h1>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
                            <small>Adress : <span>hello world this is my address my address to much small compare to others person address</span></small>
                            <small>Payment Status : <span className="text-green-500">Success</span></small>
                            <small>Date : <span>24/11/2002</span></small>
                        </div>
                        <div className="flex justify-between items-end">
                            <span>Quantity : 1</span>
                            <span> Rs. 4500</span>
                        </div>

                    </div>
                </div>
                <div className='border flex w-full gap-5'>
                    <img src="./images/order.webp" alt="" className='w-28 h-30 ' />
                    <div className='flex flex-col w-4/5 justify-evenly'>
                        <h1 className='text-lg'>Premium Quality Dresses</h1>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
                            <small>Adress : <span>hello world this is my address my address to much small compare to others person address</span></small>
                            <small>Payment Status : <span className="text-green-500">Success</span></small>
                            <small>Date : <span>24/11/2002</span></small>
                        </div>
                        <div className="flex justify-between items-end">
                            <span>Quantity : 1</span>
                            <span> Rs. 4500</span>
                        </div>

                    </div>
                </div>

            </div>
            <div className="lg:w-1/3 flex flex-col gap-4 p-2 lg:p-5 lg:pr-10">
                <h1 className='font-semibold text-lg text-center'>Order Summery</h1>
                <div className='text-start'>Billing Address :</div>
                <div className='text-gray-500'>hello world this is my address my address to much small compare to others person address</div>
                <hr />
                <div className='flex justify-between'>
                    <span className='font-bold'>Sub total : </span>
                    <span>Rs. 90000</span>
                </div>
                <button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none rounded-full hover:bg-pink-800 duration-300 hover:translate-y-2 m-auto">Check out</button>
            </div>
        </div>
    )
}

export default orders