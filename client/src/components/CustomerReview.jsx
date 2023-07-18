/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
    Typography,
    Rating
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const CustomerReview = () => {

    const [rated, setRated] = useState(5);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    return (
        <>
            <div className="flex flex-col items-center gap-2 m-auto">

                <h4 className="font-bold text-slate-700">Customer reviews</h4>

                <div className="flex flex-col md:flex-row gap-10">
                    <div className=" w-full flex flex-col justify-center items-center">
                        <div className="flex items-center gap-2">
                            <Rating value={5} onChange={(value) => setRated(value)} readonly />
                            <Typography color="pink-gray" className="font-medium">
                                {rated} Rated
                            </Typography>

                        </div>
                        {/*          <!-- Helper text --> */}
                        <span className="text-xs leading-6 text-slate-400">
                            based on 147 user ratings
                        </span>
                        <button className="flex text-white bg-yellow-700 border-0 py-2 px-6 focus:outline-none rounded-full hover:bg-yellow-800 duration-300 hover:translate-y-2 my-2" onClick={handleOpen}>Write Review</button>
                    </div>

                    <Dialog
                        size={"xl"}
                        open={open}
                        handler={handleOpen}
                        className="bg-white shadow-none mx-0"

                    >
                        <div className="">
                            <div className="flex items-center justify-between">
                                <DialogHeader variant="h5" color="blue-gray">
                                    Rate us
                                </DialogHeader>
                                <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
                            </div>
                            <div className="flex justify-evenly gap-2 items-center">
                                <div className='border bg-white px-2 relative '>
                                    <div className="badge absolute -top-2 -right-2 bg-gray-600 h-6 w-6">1</div>
                                    <img src="../images/collectiondetails.webp" alt="img" className='h-14 w-16' />
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-sm'>Teal Color Plain With Lace Border Rangoli Silk Lehenga Choli Set</span>
                                    <Rating value={5} onChange={(value) => setRated(value)} readonly />
                                </div>

                            </div>
                            <DialogBody divider>
                                <div className="flex items-center gap-2 my-4">
                                    <Typography color="pink-gray" className="font-medium">
                                        {rated} Rated
                                    </Typography>
                                    <Rating value={5} onChange={(value) => setRated(value)} />
                                </div>
                                <div className="grid gap-6">
                                    <Input label="Your Name" />
                                    <Input label="Your Email" />
                                    <Input label="Review Title" />
                                    <Textarea label="Review Content" />
                                </div>
                            </DialogBody>
                            <DialogFooter className="space-x-2">

                                <button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none rounded-full hover:bg-pink-700 duration-300 hover:translate-y-2 my-2" onClick={handleOpen}>Close</button>
                                <button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none rounded-full hover:bg-pink-700 duration-300 hover:translate-y-2 my-2" onClick={handleOpen}>Submit</button>

                            </DialogFooter>
                        </div>



                    </Dialog>


                    <div className="flex w-full flex-col gap-4 pt-6">
                        <span className="flex w-full items-center gap-2">
                            <label
                                id="p03e-label"
                                htmlFor="p03e"
                                className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
                            >
                                5 star
                            </label>
                            <progress
                                aria-labelledby="p03e-label"
                                id="p03e"
                                max="100"
                                value="75"
                                className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                            >
                                75%
                            </progress>
                            <span className="w-9 text-xs font-bold text-slate-700">112 </span>
                        </span>
                        <span className="flex w-full items-center gap-2">
                            <label
                                id="p03e-label"
                                htmlFor="p03e"
                                className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
                            >
                                4 star
                            </label>
                            <progress
                                aria-labelledby="p03e-label"
                                id="p03e"
                                max="100"
                                value="28"
                                className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                            >
                                75%
                            </progress>
                            <span className="w-9 text-xs font-bold text-slate-700">17 </span>
                        </span>
                        <span className="flex w-full items-center gap-2">
                            <label
                                id="p03e-label"
                                htmlFor="p03e"
                                className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
                            >
                                3 star
                            </label>
                            <progress
                                aria-labelledby="p03e-label"
                                id="p03e"
                                max="100"
                                value="18"
                                className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                            >
                                75%
                            </progress>
                            <span className="w-9 text-xs font-bold text-slate-700">12 </span>
                        </span>
                        <span className="flex w-full items-center gap-2">
                            <label
                                id="p03e-label"
                                htmlFor="p03e"
                                className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
                            >
                                2 star
                            </label>
                            <progress
                                aria-labelledby="p03e-label"
                                id="p03e"
                                max="100"
                                value="8"
                                className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                            >
                                75%
                            </progress>
                            <span className="w-9 text-xs font-bold text-slate-700">2 </span>
                        </span>
                        <span className="flex w-full items-center gap-2">
                            <label
                                id="p03e-label"
                                htmlFor="p03e"
                                className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
                            >
                                1 star
                            </label>
                            <progress
                                aria-labelledby="p03e-label"
                                id="p03e"
                                max="100"
                                value="10"
                                className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                            >
                                75%
                            </progress>
                            <span className="w-9 text-xs font-bold text-slate-700">4 </span>
                        </span>
                    </div>

                </div>


            </div>
            {/* reviews as a comments */}
            <article className="lg:w-1/2 m-auto">
                <div className="flex items-center mb-4 space-x-4 ">
                    <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80" alt="" />
                    <div className="space-y-1 font-medium dark:text-white">
                        <p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                    </div>
                </div>
                <Rating value={5} onChange={(value) => setRated(value)} readonly />
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                <p className="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                <p className="mb-3 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>

            </article>

        </>
    )
}

export default CustomerReview