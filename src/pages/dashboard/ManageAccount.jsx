import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import Headline from '../../components/Headline/Headline';
import { toast } from 'react-toastify';
import { toastConfig } from '../../Utils/ConstantData';

const ManageAccount = () => {
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    // console.log(filteredUsers)

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/v1/users");
            setUsers(response.data.data);
            setFilteredUsers(response.data.data);
            // console.log(response)
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteUser = (id) => {
        // console.log(id)
        fetch(`http://localhost:5000/api/v1/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log("data.acknowledged", data.data.acknowledged);
                if (data?.data?.acknowledged) {
                    getUsers()
                    toast.success('User deleted successfully', toastConfig)
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
    }

    const giveAdminRole = (data, id) => {
        const UpdatedRole = {
            role: data
        }
        fetch(`http://localhost:5000/api/v1/users/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(UpdatedRole)
        })
            .then((res) => res.json())
            .then(result => {
                if (result?.status === 'success') {
                    getUsers()
                    toast.success('successfully make update', toastConfig)
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
        // console.log(UpdatedRole)
    }

    const giveBuyerRole = (data, id) => {
        const UpdatedRole = {
            role: data
        }
        fetch(`http://localhost:5000/api/v1/users/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(UpdatedRole)
        })
            .then((res) => res.json())
            .then(result => {
                if (result?.status === 'success') {
                    getUsers()
                    toast.success('successfully make update', toastConfig)
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
        // console.log(UpdatedRole)
    }

    const giveStoreManagerRole = (data, id) => {
        const UpdatedRole = {
            role: data
        }
        fetch(`http://localhost:5000/api/v1/users/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(UpdatedRole)
        })
            .then((res) => res.json())
            .then(result => {
                if (result?.status === 'success') {
                    getUsers()
                    toast.success('successfully make update', toastConfig)
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
        // console.log(UpdatedRole)
    }

    const columns = [
        {
            name: "Name",
            selector: row => row.name,
            sortable: true,
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true,
        },
        {
            name: "Role",
            selector: row => row.role,
            sortable: true,
            center: true,
        },
        {
            name: "Action",
            cell: (row) => (
                <div className='flex h-full items-center'>

                    {
                        row.role != "admin" &&
                        <button
                            className="block mr-1 text-white p-1 rounded-md bg-green-500 hover:bg-green-300"
                            onClick={() => giveAdminRole("admin", row._id)}
                        >
                            Admin
                        </button>
                    }

                    {
                        row.role != "buyer" &&
                        <button
                            className='block mx-1 text-white p-1 rounded-md bg-green-500 hover:bg-green-300'
                            onClick={() => giveBuyerRole("buyer", row._id)}
                        >
                            Buyer
                        </button>
                    }

                    {
                        row.role != "store-manager" &&
                        <button
                            className='block ml-1 text-white p-1 rounded-md bg-green-500 hover:bg-green-300'
                            onClick={() => giveStoreManagerRole("store-manager", row._id)}
                        >
                            Store-manager
                        </button>
                    }

                </div>
            ),
            // center: true,
            width: '200px',
        },
        {
            name: "Remove",
            selector: row => (
                <button
                    className='mr-1'
                    onClick={() => handleDeleteUser(row._id)}
                >
                    <AiFillDelete className='text-red-500 hover:text-red-300 text-2xl' />
                </button>
            ),
        },
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px',
            },
        },
        headCells: {
            style: {
                color: 'white',
                backgroundColor: '#6DAAD7',
                fontWeight: "bold",
            },
        },
    };

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        const result = users?.filter((user) => {
            return user.name.toLowerCase().match(search.toLowerCase())
        });
        setFilteredUsers(result)
    }, [search])

    return (
        <div className='text-white'>
            <div className='flex justify-center'>
                <Headline headline={"User management"} margin_Y={"4"} />
            </div>
            <div className='w-[98%] md:w-[70%] overflow-hidden mx-auto mt-4 rounded'>
                <DataTable
                    title={`Total user ${users.length}`}
                    columns={columns}
                    data={filteredUsers}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='70vh'
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                        <input
                            type='text'
                            placeholder='search by name'
                            className='w-[30%] form-control text-black border rounded-md'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    }
                    customStyles={customStyles}
                    subHeaderAlign='left'
                    striped="true"
                    dense="false"
                    responsive="true"
                />
            </div>
        </div>
    )
}

export default ManageAccount;