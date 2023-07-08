import React, { useRef, useState } from 'react';
import { glassStyle_1, glassStyle_2 } from '../../Styles/DashboardStyle';
import Swal from 'sweetalert2';

const Upload_Update = () => {
    const [isHovered_1, setIsHovered_1] = useState(false);
    const [isHovered_2, setIsHovered_2] = useState(false);
    const [images, setImages] = useState([]);
    const [isDragging, serIsDragging] = useState(false);
    const [imageWarning, setImageWarning] = useState("")
    const fileInputRef = useRef(null);
    const warningText = "Please select maximum 4 photos"

    function selectFiles() {
        fileInputRef.current.click();
    }
    function onFileSelect(event) {
        const files = event.target.files;
        if (files.length === 0 || files.length > 4) {
            return setImageWarning(warningText)
        };
        for (let i = 0; i < 4; i++) {
            setImageWarning("")
            if (files[i]?.type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }
    function deleteImage(index) {
        setImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        );
    }
    function onDragOver(event) {
        event.preventDefault();
        serIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }
    function onDragLeave(event) {
        event.preventDefault();
        serIsDragging(false);
    }
    function onDrop(event) {
        event.preventDefault();
        serIsDragging(false);
        const files = event.dataTransfer.files;
        if (files.length === 0 || files.length > 4) {
            return setImageWarning(warningText)
        };
        for (let i = 0; i < 4; i++) {
            setImageWarning("")
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }

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

    const handleProductSubmit = (e) => {
        e.preventDefault();
        if (!images.length) {
            // return window.alert("Must upload maximum 4 photos")
            return Swal.fire({
                icon: 'error',
                title: 'Image',
                text: 'Must upload maximum 4 photos',
            })
        }
        const formData = {
            name: e.target.unit.value,
            quantity: e.target.quantity.value,
            color: e.target.color.value,
            unit: e.target.unit.value,
            status: e.target.status.value,
            categories: e.target.categories.value,
            price: e.target.price.value,
            brand: e.target.brand.value,
            ratting: e.target.ratting.value,
            description: e.target.description.value,
            imageUrl: images,
        }
        console.log(formData)
        e.target.reset();
        setImages([])
    };

    const [selectedCategoryImage, setSelectedCategoryImage] = useState(null);
    function handleFileChange(event) {
        setSelectedCategoryImage(URL.createObjectURL(event.target.files[0]))
    }

    const handleCategory = (e) => {
        e.preventDefault();
        const categoryData = {
            name: e.target.name?.value,
            quantity: e.target.quantity?.value,
            categoryPhoto: selectedCategoryImage,
        }
        console.log(categoryData)
        e.target.reset();
        setSelectedCategoryImage(null)
    };
    function deleteCategoryImage() {
        setSelectedCategoryImage(null)
    }



    return (
        <div>
            <section
                style={isHovered_1 ? glassStyle_1 : glassStyle_2}
                className="max-w-4xl p-6 mx-auto mt-4"
                onMouseEnter={handleUploadHover_1}
                onMouseLeave={handleUploadMouseLeave_1}
            >
                <h1 className="text-xl font-bold text-white capitalize">Upload Product</h1>
                <form onSubmit={handleProductSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white ">Product name</label>
                            <input
                                required
                                name='name'
                                type="text"
                                placeholder="Product name"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Quantity</label>
                            <input
                                required
                                name='quantity'
                                min={1}
                                type="number"
                                placeholder="Product's quantity"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Color</label>
                            <input
                                required
                                name='color'
                                type="text"
                                placeholder="Type ...color"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Select unit</label>
                            <select
                                required
                                name='unit'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            >
                                <option value="select one">select one</option>
                                <option value="kg">kg</option>
                                <option value="litter">litter</option>
                                <option value="pcs">pcs</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white ">Product status</label>
                            <select
                                required
                                name='status'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            >
                                <option value="in-stock">in-stock</option>
                                <option value="out-of-stock">out-of-stock</option>
                                <option value="discontinued">discontinued</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white ">Product categories</label>
                            <select
                                required
                                name='categories'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            >
                                <option value="select one">select one</option>
                                <option value="Panjabi">Panjabi</option>
                                <option value="Shirt">Shirt</option>
                                <option value="Pant">Pant</option>
                                <option value="Sarees">Sarees</option>
                                <option value="Kameez">Kameez</option>
                                <option value="Abaya">Abaya</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white ">Price $</label>
                            <input
                                required
                                type="number"
                                name='price'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Brand name</label>
                            <input
                                required
                                type="text"
                                name='brand'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Ratting</label>
                            <input
                                required
                                type="number"
                                name='ratting'
                                max={5}
                                min={1}
                                placeholder="Please enter a number between 1 and 5"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Description</label>
                            <textarea
                                required
                                name='description'
                                type="textarea"
                                className="w-full min-h-[100px] h-auto px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            ></textarea>
                        </div>
                        <div>
                            <div>
                                <label className="text-sm font-medium text-white">
                                    Upload Image <span className='text-xs'>maximum 4 photo</span>
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2  border-dashed rounded-md">
                                    <div
                                        className="space-y-1 text-center w-full h-[100px]"
                                        style={{
                                            userSelect: "none",
                                            WebkitUserSelect: "none",
                                        }}
                                        onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}
                                    >
                                        <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div>
                                            {isDragging ? (
                                                <span className='select'>Drop images here</span>
                                            ) : (
                                                <>
                                                    <p className='text-white'>
                                                        Drag & Drop image here or {" "}
                                                        <span className='text-green-500' role='button' onClick={selectFiles} >
                                                            Browse
                                                        </span>
                                                    </p>
                                                    <p className="text-xs text-white">
                                                        PNG, JPG, JPEG up to 10MB
                                                    </p>
                                                </>
                                            )}
                                            <input
                                                name='imageUrl'
                                                type="file"
                                                style={{ display: 'none' }}
                                                multiple
                                                ref={fileInputRef}
                                                onChange={onFileSelect}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {
                                        !imageWarning ?
                                            " "
                                            :
                                            <p style={{
                                                color: 'red',
                                                fontWeight: 'bold',
                                                width: 'full',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >
                                                {imageWarning}
                                            </p>
                                    }
                                </div>
                                <div className='flex flex-wrap h-auto'>
                                    {images?.map((images, index) => (
                                        <div key={index} className='mr-2 mt-2 relative'>
                                            <span
                                                className='absolute right-1 top-0 text-2xl cursor-pointer'
                                                onClick={() => deleteImage(index)}
                                            >
                                                &times;
                                            </span>
                                            <img
                                                className='w-[100px]'
                                                src={images?.url}
                                                alt={images?.name}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button type='submit' className="px-6 py-2 text-white rounded-md transition-colors duration-200 transform bg-pink-500 hover:bg-pink-700"
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
                <form onSubmit={handleCategory}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white ">Product category</label>
                            <input
                                required
                                name='name'
                                type="text"
                                placeholder="category name"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Quantity</label>
                            <input
                                required
                                name='quantity'
                                type="text"
                                placeholder="Product quantity"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Upload just 1 photo</label>
                            <input
                                name='categoryPhoto'
                                type="file"
                                required
                                onChange={handleFileChange}
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
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
                                            src={selectedCategoryImage}
                                            alt="Category Image" />
                                    </div>
                                    :
                                    " "
                            }
                        </div>
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
            </section>
        </div>
    );
};

export default Upload_Update;