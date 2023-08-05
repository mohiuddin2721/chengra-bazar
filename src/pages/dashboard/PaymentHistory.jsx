import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { AiFillDelete } from 'react-icons/ai';
import Headline from '../../components/Headline/Headline';

const PaymentHistory = () => {
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
                <Headline headline={"Payment"} margin_Y={"4"} />
            </div>
            <div className='w-[98%] md:w-[70%] overflow-hidden mx-auto mt-8 rounded'>
                <DataTable
                    title="Payment summery"
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
        </div>
    );
};

export default PaymentHistory;