import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { AiFillDelete } from 'react-icons/ai';
import Headline from '../../components/Headline/Headline';
import { toast } from 'react-toastify';
import { toastConfig } from '../../Utils/ConstantData';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { FaImage } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Administration = () => {
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [axiosSecure] = useAxiosSecure()
    const queryClient = useQueryClient()
    // console.log(filteredUsers)

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/v1/products");
            setUsers(response.data.data.products);
            setFilteredUsers(response.data.data.products);
            // console.log(response.data.data)
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteProduct = (id) => {
        console.log(id)
    }

    const updateProduct = (id) => {

        console.log(id)
    }
    const showImages = (data) => {
        const imageElements = data?.map(link => `<img src="http://localhost:5000/${link}" alt="Image"  style="max-width: 200px; max-height: 200px; margin-right: 10px" /><br>`).join('');

        Swal.fire({
            html:
                `<div style="display: flex">${imageElements}</div>`,
            showCloseButton: false,
            focusConfirm: false,
        })
        // console.log(data)
    }

    const columns = [
        {
            name: "Name & Category & Brand",
            selector: row => (
                <div className='my-2'>
                    <p>{row?.name}</p>
                    <p>Category: {row?.categories}</p>
                    <p>Brand: {row?.brand}</p>
                </div>
            ),
            width: '230px',
        },
        {
            name: "Price $",
            selector: row => row?.price,
            sortable: true,
            center: true,
        },
        {
            name: "Quantity",
            selector: row => row?.quantity,
            sortable: true,
            center: true,
        },
        {
            name: "Images & Description",
            selector: row => (
                <div>
                    <p
                        onClick={() => showImages(row?.imageURL[0])}
                        className='cursor-pointer'>
                        <FaImage className='text-xl text-blue-500' />
                    </p>
                </div>
            ),
            sortable: true,
            center: true,
        },
        {
            name: "Action",
            cell: (row) => (
                <div className='flex h-full items-center'>
                    <button
                        className="block mr-1 text-white p-1 rounded-md bg-green-500 hover:bg-green-300"
                        onClick={() => updateProduct(row._id)}
                    >
                        Update
                    </button>
                    <button
                        className='mr-1'
                        onClick={() => handleDeleteProduct(row._id)}
                    >
                        <AiFillDelete className='text-red-500 hover:text-red-300 text-2xl' />
                    </button>

                </div>
            ),
            // center: true,
            // width: '200px',
            center: true,
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
                <Headline headline={"Products management"} margin_Y={"4"} />
            </div>
            <div className='w-[98%] md:w-[70%] overflow-hidden mx-auto mt-4 rounded'>
                <DataTable
                    title={`Total products ${filteredUsers.length}`}
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

export default Administration;