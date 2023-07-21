import { useState } from "react";
import AdminPanels from "../../api/AdminPanels";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    IconButton,
    Tooltip,
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";

const AdminUsers = () => {

    const [users, setUsers] = useState([]);
    const showUsers = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/v1/admin/users", {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.data.success) {
                const usersdata = response.data.users;
                setUsers(usersdata);
                console.log(users);
            } else {
                alert("Failed to fetch user details");
                console.log(response.data.message);
            }
        } catch (error) {
            alert(error.response.data.message);
            console.error("Failed to fetch user details:", error);
        }
    }

    return (
        <div className="users">
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Members list
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                See information about all members
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <Button variant="outlined" color="blue-gray" size="sm" onClick={showUsers}>
                                view all
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader>
                                {AdminPanels.Tabs.map(({ label, value }) => (
                                    <Tab key={value} value={value}>
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                        <div className="w-full md:w-72">
                            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <div className="overflow-x-auto">
                        <table className="mt-4 w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                        >
                                            Members
                                        </Typography>
                                    </th>
                                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 hidden md:table-cell">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                        >
                                            Role
                                        </Typography>
                                    </th>
                                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                        >
                                            Update
                                        </Typography>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(({ name, email, role }, index) => {
                                    return (
                                        <tr key={name}>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex flex-col">
                                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                                            {name}
                                                        </Typography>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal opacity-70 hidden md:block"
                                                        >
                                                            {email}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50 hidden md:table-cell">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {role}
                                                </Typography>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <Tooltip content="Edit User">
                                                    <IconButton variant="text" color="blue-gray">
                                                        <PencilIcon className="h-4 w-4" />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Page 1 of 10
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" color="blue-gray" size="sm">
                            Previous
                        </Button>
                        <Button variant="outlined" color="blue-gray" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default AdminUsers