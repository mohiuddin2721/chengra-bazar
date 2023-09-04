import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const UploadCategory = () => {
    const [selectedCategoryImage, setSelectedCategoryImage] = useState([]);
    const [imgBbLink, setImgBbLink] = useState([]);
    // console.log(selectedCategoryImage)
    const imgStorKey = 'b2184fa8da4b97e18bb82509935c6cce';

    function handleFileChange(event) {
        const files = event.target.files;
        // console.log(files)
        if (files.length === 0 || files.length > 4) {
            return setImageWarning(warningText)
        };
        for (let i = 0; i < 4; i++) {
            if (files[i]?.type.split('/')[0] !== 'image') continue;
            if (!selectedCategoryImage.some((e) => e.name === files[i].name)) {
                setSelectedCategoryImage((prevImages) => [
                    ...prevImages, files[i]
                ]);
            }
        }
        // setSelectedCategoryImage(event.target.files)
    }
    const handleCategory = async (event) => {
        event.preventDefault();
        // const formData = new FormData();

        if (!selectedCategoryImage) {
            // return window.alert("Must upload maximum 4 photos")
            return Swal.fire({
                icon: 'error',
                title: 'Image',
                text: 'Must upload a photos',
            })
        }

        // selectedCategoryImage.forEach(prop => {
        //     formData.append("image", prop)
        // })

        const uploadPromises = selectedCategoryImage?.map(file => {
            const formData = new FormData();
            formData.append('image', file);
            const url = `https://api.imgbb.com/1/upload?key=${imgStorKey}`;
            return fetch(url, {
                method: 'POST',
                body: formData,
            })
                .then((res) => res.json())
                .then((result) => {
                    return result.data.url; // Return the image URL
                });
        });
        try {
            const uploadImages = await Promise.all(uploadPromises);
            console.log(uploadImages); // This will contain all the image URLs

            const data = {
                name: event.target.name.value,
                image: uploadImages,
            }
            console.log("data", data);

            // const formData = new FormData();
            // Object.keys(data).forEach(prop => {
            //     formData.append(`${prop}`, data[prop])
            // });

            // const response = await fetch("http://localhost:5000/api/v1/products", {
            //     method: "POST",
            //     body: formData
            // });
            // const posted = await response.json();

            // if (posted.status === 'fail') {
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Error',
            //         text: 'Product is not inserted. Please try again',
            //     })
            // } else {
            //     Swal.fire({
            //         icon: 'success',
            //         title: 'Successful',
            //         text: 'Product data Successfully updated',
            //     })
            // }

            // event.target.reset();
        } catch (error) {
            console.error('Error uploading images:', error);
        }


        // Iterate through selected files and create an upload promise for each
        // for (let i = 0; i < selectedCategoryImage.length; i++) {
        //     const formData = new FormData();
        //     formData.append('image', selectedCategoryImage[i]);
        //     const url = `https://api.imgbb.com/1/upload?key=${imgStorKey}`;
        //     fetch(url, {
        //         method: 'POST',
        //         body: formData,
        //     })
        //         .then(res => res.json())
        //         .then(result => {
        //             console.log(result.data.url)
        //             uploadPromises.push(result.data.url);
        //             setImgBbLink(result.data.url);
        //         })
        // }

        // console.log(imgBbLink)
        // console.log(responses)
        // formData.append('image', selectedCategoryImage)
        // const url = `https://api.imgbb.com/1/upload?key=${imgStorKey}`;
        // fetch(url, {
        //     method: 'POST',
        //     body: formData,
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result.data.url)
        //     })

    };
    // const handleCategory = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData();

    //     if (!selectedCategoryImage) {
    //         // return window.alert("Must upload maximum 4 photos")
    //         return Swal.fire({
    //             icon: 'error',
    //             title: 'Image',
    //             text: 'Must upload a photos',
    //         })
    //     }

    //     const data = {
    //         name: event.target.name.value,
    //     }
    //     Object.keys(data).forEach(prop => {
    //         formData.append(`${prop}`, data[prop])
    //     })

    //     formData.append('image', selectedCategoryImage)

    //     fetch("http://localhost:5000/api/v1/category", {
    //         method: "POST",
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             if (data.status === 'fail') {
    //                 Swal.fire({
    //                     icon: 'error',
    //                     title: 'Error',
    //                     text: 'Category is not inserted. please try again',
    //                 })
    //             } else {
    //                 Swal.fire({
    //                     icon: 'success',
    //                     title: 'Successful',
    //                     text: 'Category data Successfully updated',
    //                 })
    //                 setSelectedCategoryImage(null)
    //                 event.target.reset();
    //             }
    //         })
    // };


    function deleteCategoryImage() {
        setSelectedCategoryImage(null)
    };

    return (
        <div>
            <h2 className="text-lg font-semibold text-white capitalize">Add category</h2>
            <form
                onSubmit={handleCategory}
            >
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-white ">Product category <span className='text-red-500 text-2xl'>*</span></label>
                        <input
                            required
                            name='name'
                            type="text"
                            placeholder="category name"
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"

                        />
                    </div>
                    <div>
                        <label className="text-white ">Upload just 1 photo <span className='text-red-500 text-2xl'>*</span></label>
                        <input
                            required
                            name='photo'
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>
                    {/* <div>
                        {
                            selectedCategoryImage ?
                                <div className='h-auto relative'>
                                    <span
                                        className='absolute left-1 top-0 text-2xl text-red-500 cursor-pointer'
                                        onClick={deleteCategoryImage}
                                    >
                                        &times;
                                    </span>
                                    <img
                                        className='w-[150px] max-h-[150px]'
                                        src={URL.createObjectURL(selectedCategoryImage)}
                                        alt="Category Image" />
                                </div>
                                :
                                " "
                        }
                    </div> */}
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        type='submit'
                        className="px-6 py-2 text-white rounded-md transition-colors duration-200 transform bg-pink-500 hover:bg-pink-700"
                    >
                        Add category
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadCategory;