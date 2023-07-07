import React from 'react';

const tableHeadline = ['Name', 'Date of Birth', 'Role', 'Salary', 'Action']

const Management = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-red-500 bg-transparent text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className='text-white'>
                            {
                                tableHeadline?.map((data, i) =>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium">
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
                                    <th className="whitespace-nowrap px-4 py-2 font-medium">
                                        {data}
                                    </th>
                                )
                            }
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default Management;