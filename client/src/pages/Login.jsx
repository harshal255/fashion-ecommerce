
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function Login() {
   
    return (
        <Card color="transparent" shadow={false}>
            <div className="bg-gray-200 py-4">
                <Typography variant="h4" color="white" className="px-4 text-center">
                    LOGIN
                </Typography>
            </div>
                <>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                        <div className="mb-4 flex flex-col gap-6  items-center justify-center">
                            <Input size="lg" color="pink" label={
                                <>
                                    Email <span className="text-red-500">*</span>
                                </>
                            } />
                            <Input
                                size="lg"
                                color="pink"
                                type="password"
                                label={
                                    <>
                                        Password <span className="text-red-500">*</span>
                                    </>
                                }
                            />
                        </div>
                        <Typography color="gray" className="mt-2 mx-auto font-normal">
                            <Link to="/recover" className=" underline font-medium transition-colors hover:text-pink-700">
                                Forgot your password?
                            </Link>
                        </Typography>
                        <Button className="mt-6" color="pink" fullWidth>
                            SIGN IN
                        </Button>
                        <Typography color="gray" className="mt-4 mx-auto font-normal">
                            <Link to="/register" className=" underline font-medium transition-colors hover:text-pink-700">
                                New customer? Create your account
                            </Link>
                        </Typography>
                    </form>
                </>
        </Card>
    );
}
