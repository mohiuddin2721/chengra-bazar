import React, { useState } from 'react';

const glassStyle_2 = {
    background: "rgba(207, 177, 177, 0.15)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 20px )",
    "-webkit-backdrop-filter": "blur( 20px )",
    borderRadius: "10px",

}
const glassStyle_1 = {
    background: "rgba(207, 177, 177, 0)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 20px )",
    "-webkit-backdrop-filter": "blur( 20px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
}

const Upload_Update = () => {
    const [isHovered_1, setIsHovered_1] = useState(false);
    const [isHovered_2, setIsHovered_2] = useState(false);

    const handleUploadHover_1 = () => {
        setIsHovered_1(true);
    };
    const handleUploadMouseLeave_1 = () => {
        setIsHovered_1(false);
    };
    const handleUploadHover_2 = () => {
        setIsHovered_2(true);
    };
    const handleUploadMouseLeave_2 = () => {
        setIsHovered_2(false);
    };

    return (
        <div className="">
            {/* <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md mt-4"> */}
            <section
                style={isHovered_1 ? glassStyle_1 : glassStyle_2}
                className="max-w-4xl p-6 mx-auto mt-4"
                onMouseEnter={handleUploadHover_1}
                onMouseLeave={handleUploadMouseLeave_1}
            >
                <h1 className="text-xl font-bold text-white capitalize">Upload Product</h1>
                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white ">Product name</label>
                            <input
                                required
                                id="username"
                                type="text"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Quantity</label>
                            <input
                                required
                                id="quantity"
                                type="number"
                                min="1"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Color</label>
                            <input
                                required
                                id="color"
                                type="text"
                                placeholder='Type ...'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Select unit</label>
                            <select
                                required
                                id='unit'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring">
                                <option>select one</option>
                                <option>kg</option>
                                <option>litter</option>
                                <option>pcs</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white ">Product status</label>
                            <select
                                required
                                id='status'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring">
                                <option>in-stock</option>
                                <option>out-of-stock</option>
                                <option>discontinued</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white ">Product categories</label>
                            <select
                                required
                                id='categories'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring">
                                <option>select one</option>
                                <option>Panjabi</option>
                                <option>Shirt</option>
                                <option>Pant</option>
                                <option>Sarees</option>
                                <option>Kameez</option>
                                <option>Abaya</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white ">Price $</label>
                            <input
                                required
                                id="price"
                                type="number"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Brand name</label>
                            <input
                                required
                                id="brand"
                                type="text"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Ratting</label>
                            <input
                                required
                                id="ratting"
                                type="number"
                                min="1"
                                max="5"
                                placeholder="Please enter a number between 1 and 5"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Description</label>
                            <textarea
                                required
                                id="description"
                                type="textarea"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            ></textarea>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-white">
                                Upload Image <span className='text-xs'>maximum 4 photo</span>
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2  border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload Photo</span>
                                            <input required id="file-upload" name="imageUrl" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1 text-white">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-white">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 text-white rounded-md transition-colors duration-200 transform bg-pink-500 hover:bg-pink-700"
                        >
                            Upload
                        </button>
                    </div>
                </form>
            </section>

            <section
                style={isHovered_2 ? glassStyle_1 : glassStyle_2}
                className="max-w-4xl p-6 mx-auto my-20"
                onMouseEnter={handleUploadHover_2}
                onMouseLeave={handleUploadMouseLeave_2}
            >
                <h2 className="text-lg font-semibold text-white capitalize">Add category</h2>

                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white ">Product category</label>
                            <input
                                required
                                id="username"
                                type="text"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Quantity</label>
                            <input
                                required
                                id="quantity"
                                type="number"
                                min="1"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-white">
                                Upload one photo
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2  border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload Photo</span>
                                            <input required id="file-upload" name="imageUrl" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1 text-white">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-white">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            className="px-6 py-2 text-white rounded-md transition-colors duration-200 transform bg-pink-500 hover:bg-pink-700"
                        >
                            Add category
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Upload_Update;