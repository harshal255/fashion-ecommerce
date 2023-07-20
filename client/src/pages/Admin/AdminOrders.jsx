import AdminPanel from "../../api/AdminPanels"
const AdminOrders = () => {
    return (
        <div className="lg:flex justify-center">
            <div className="lg:w-2/3 flex flex-col justify-center items-center m-2 lg:m-10 gap-2 lg:gap-4">
                {
                    AdminPanel.Orders.map((element) => {
                        return (
                            <div className='border flex w-full gap-5' key={element.id}>
                                <img src={element.img} alt="" className='w-28 h-30 ' />
                                <div className='flex flex-col w-4/5 justify-evenly'>
                                    <h1 className='text-lg'>{element.Product}</h1>
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
                                        <small>Adress : <span>{element.Address}</span></small>
                                        <small>Payment Status : <span className="text-green-500">{element.paymentstatus}</span></small>
                                        <small>Date : <span>{element.Date}</span></small>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span>User : {element.username}</span>
                                        <span> {element.Price}</span>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default AdminOrders