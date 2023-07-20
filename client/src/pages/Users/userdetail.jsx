import { useState, useRef } from "react";
import {

    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,

} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";


function UserDetails() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click(); // Simulate a click on the file input element
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const imageUrl = e.target.result; // Get the data URL of the selected file
            // Handle the selected image URL as needed
        };
        reader.readAsDataURL(file); // Read the selected file as a data URL
    };

    return (
        <>

            <section className="container px-5 py-10 mx-auto border justify-center items-center">

                <div className="flex flex-wrap">
                    <div className="p-4 md:w-1/2 justify-center items-center">
                        <div className="h-full py-5 lg:w-[50rem] flex flex-col items-center text-center">
                            <img alt="team" className="flex-shrink-0  w-[150px] h-[150px] object-cover object-center my-4 rounded-full" src="https://dummyimage.com/200x200" />
                            <div className="w-full flex flex-col gap-3 text-start">
                                <div className="title-font font-medium text-lg text-gray-900"><b>User Name :</b> Harshal Kahar</div>
                                <div className="title-font font-medium text-lg text-gray-900"><b>User Email :</b>harshalskahar389@gmail.com</div>
                                <div className="title-font font-medium text-lg text-gray-900"><b>User Password :</b> Password$05</div>
                                <div className="title-font font-medium text-lg text-gray-900"><b>User Role : </b>User</div>


                            </div>
                            <button className="flex text-white bg-pink-700 border-0 py-2 px-6 focus:outline-none rounded-full hover:bg-pink-800 duration-300 hover:translate-y-2 my-2" onClick={handleOpen}>Update Your Info</button>
                        </div>
                    </div>

                </div>
            </section>
            <Dialog
                size={"xl"}
                open={open}
                handler={handleOpen}
                className="bg-white shadow-none mx-0"

            >
                <div className="">
                    <div className="flex items-center justify-between">
                        <DialogHeader variant="h5" color="pink-gray">
                            Profile
                        </DialogHeader>
                        <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
                    </div>
                    <div>
                        <img
                            alt="team"
                            className="flex-shrink-0 my-4 w-[100px] h-[100px] object-cover object-center mb-4 rounded-full m-auto hover:cursor-pointer"
                            src="https://dummyimage.com/200x200"
                            onClick={handleImageClick} // Call the handleImageClick function when the image is clicked
                        />
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: 'none' }} // Hide the file input element
                            onChange={handleFileChange} // Call the handleFileChange function when a file is selected
                        />
                    </div>

                    <DialogBody divider>
                        <div className="flex flex-col gap-3">
                            <Input color="pink" label="User Name :" />
                            <Input color="pink" label="User Email" />
                            <Input color="pink" label="User Password" />
                            <Input color="pink" label="User Role" />
                        </div>

                    </DialogBody>
                    <DialogFooter className="space-x-2">

                        <button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none rounded-full hover:bg-pink-700 duration-300 hover:translate-y-2 my-2" onClick={handleOpen}>Close</button>
                        <button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none rounded-full hover:bg-pink-700 duration-300 hover:translate-y-2 my-2" onClick={handleOpen}>Update</button>

                    </DialogFooter>
                </div>



            </Dialog>
        </>

    )
}

export default UserDetails;