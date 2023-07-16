import React from "react";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function Register() {
    return (
        <Card color="transparent" shadow={false}>
            <div className="bg-gray-200 py-4">
                <Typography variant="h4" color="white" className="px-4 text-center">
                    Register
                </Typography>
            </div>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                <div className="mb-4 flex flex-col gap-6  items-center justify-center">
                    <Input size="lg" color="pink" label="First Name" />
                    <Input size="lg" color="pink" label="Last Name" />
                    <Input size="lg" color="pink" label={
                        <>
                            Email <span className="text-red-500">*</span>
                        </>
                    } />
                    <Input
                        size="lg"
                        color="pink"
                        label={
                            <>
                                Password <span className="text-red-500">*</span>
                            </>
                        }
                    />
                </div>
                <Button className="mt-6" color="pink" fullWidth>
                    Register
                </Button>
                <Typography color="gray" className="mt-4 mx-auto font-normal">
                    <Link to="/login" className="underline font-medium text-black-500 transition-colors hover:text-pink-700">
                    Already have an account? Sign In
                    </Link>
                </Typography>
            </form>
        </Card>
    );
}
