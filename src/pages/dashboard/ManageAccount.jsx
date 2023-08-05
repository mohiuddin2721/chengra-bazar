import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';

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

    const handleDelete = (data) => {
        console.log(data)
    }
    const handleRole = (data, id) => {
        console.log(data)
        console.log(id)
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
        },
        {
            name: "Action",
            cell: (row) => (
                <div className='flex h-full items-center'>

                    {
                        row.role != "admin" &&
                        <button
                            className="flex mx-1 text-white p-1 rounded-md bg-blue-700 hover:bg-blue-500"
                            onClick={() => handleRole("admin", row._id)}
                        >
                            Admin
                        </button>
                    }

                    {
                        row.role != "buyer" &&
                        <button
                            className='ml-1 text-white p-1 rounded-md bg-blue-700 hover:bg-blue-500'
                            onClick={() => handleRole("buyer", row._id)}
                        >
                            Buyer
                        </button>
                    }

                    {
                        row.role != "store-manager" &&
                        <button
                            className='mx-1 text-white p-1 rounded-md bg-blue-700 hover:bg-blue-500'
                            onClick={() => handleRole("store-manager", row._id)}
                        >
                            Store-manager
                        </button>
                    }

                </div>

            )
        },
        {
            name: "Remove",
            selector: row => (
                <button
                    className='mr-1'
                    onClick={() => handleDelete(row._id)}
                >
                    <AiFillDelete className='text-red-500 text-2xl' />
                </button>
            )
        },
    ];

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
            <p>management Account span</p>
            <div className='w-[98%] overflow-hidden mx-auto mt-4 rounded'>

                <DataTable
                    title="User list"
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