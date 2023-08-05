import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { AiFillDelete } from 'react-icons/ai';
import Headline from '../../components/Headline/Headline';

const MyOrder = () => {
    const [users, setUsers] = useState([])
    // console.log(filteredUsers)

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/v1/users");
            setUsers(response.data.data);
            // console.log(response)
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = (data) => {
        console.log(data)
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
            name: "Remove",
            selector: row => (
                <button
                    className='mr-1'
                    onClick={() => handleDelete(row._id)}
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

    return (
        <div>
            
            <div className='flex justify-center'>
                <Headline headline={"My Order"} margin_Y={"4"} />
            </div>
            {/* <hr className='w-[18%] bg-white h-2 rounded-md mx-auto' /> */}
            <div className='w-[98%] md:w-[70%] overflow-hidden mx-auto mt-8 rounded'>
                <DataTable
                    title="order summery"
                    columns={columns}
                    data={users}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='70vh'
                    highlightOnHover
                    customStyles={customStyles}
                    subHeaderAlign='left'
                    striped="true"
                    dense="false"
                    responsive="true"
                />
            </div>
            {/* <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-red-500 bg-transparent text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className='text-white'>
                            {
                                tableHeadline?.map((data, i) =>
                                    <th key={i} className="whitespace-nowrap px-4 py-2 font-medium">
                                        {data}
                                    </th>
                                )
                            }
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-green-500 text-white">
                        {
                            new Array(20).fill(0).map((data, i) =>
                                <tr key={i} className='hover:bg-blue-900'>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium">
                                        John Doe
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 ">24/05/1995</td>
                                    <td className="whitespace-nowrap px-4 py-2 ">Web Developer</td>
                                    <td className="whitespace-nowrap px-4 py-2 ">$120,000</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <a
                                            href="#"
                                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            View
                                        </a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className='text-white'>
                            {
                                tableHeadline?.map((data, i) =>
                                    <th key={i} className="whitespace-nowrap px-4 py-2 font-medium">
                                        {data}
                                    </th>
                                )
                            }
                        </tr>
                    </thead>
                </table>
            </div> */}
        </div>
    );
};

export default MyOrder;