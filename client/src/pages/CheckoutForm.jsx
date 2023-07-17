import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

function CheckoutForm() {
    return (
        <div>
            <div id="form">
                <Card color="transparent" shadow={false}>
                    <div className="flex items-center gap-5  text-blue-gray-900 justify-around mx-5">
                        <a href="/" className="w-[12rem]">
                            <img
                                src="./images/logo.png"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <Typography color="gray" className="mt-1 font-normal">
                      <p> Here show order summery for device less than 1000 px width</p>
                    </Typography>

                    <Typography color="gray" className="mt-1 font-medium">
                       Contact
                    </Typography>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a
                            href="#"
                            className="font-medium transition-colors hover:text-pink-700"
                        >
                            Log In
                        </a>
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <Input size="lg" label="Email" />
                            <Input type="password" size="lg" label="Password" />
                        </div>
                        <Checkbox
                            label={
                                (
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex items-center font-normal"
                                    >
                                        I agree the
                                        <a
                                            href="#"
                                            className="font-medium transition-colors hover:text-blue-500"
                                        >
                                            &nbsp;Terms and Conditions
                                        </a>
                                    </Typography>
                                )
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button className="mt-6" fullWidth>
                            Register
                        </Button>
                    </form>
                </Card>
            </div>
            <div id="item">
            </div>
        </div>
    )
}

export default CheckoutForm;