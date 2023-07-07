import React, { useRef, useState } from 'react';
import '../../Styles/uploadImg.css'
import Swal from 'sweetalert2';

const SendMail = () => {
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
    function uploadImages() {
        console.log(images)
    }
    return (
        <div className='card'>
            <div className='top'>
                <p>Drag & Drop image uploading</p>
            </div>
            <div className='drag-area' onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                {isDragging ? (
                    <span className='select'>Drop images here</span>
                ) : (
                    <>
                        Drag & Drop image here or {" "}
                        <span className='select' role='button' onClick={selectFiles} >
                            Browse
                        </span>
                    </>
                )}
                <input name='file' type="file" className='file' multiple ref={fileInputRef} onChange={onFileSelect} />
            </div>
            <div>
                {!imageWarning ? " " : <p style={{ color: 'red', width: 'full', display: 'flex', justifyContent: 'center' }}>{imageWarning}</p>}
            </div>
            <div className='container'>
                {images?.map((images, index) => (
                    <div key={index} className='image'>
                        <span onClick={() => deleteImage(index)} className='delete'>&times;</span>
                        <img src={images.url} alt={images.name} />
                    </div>
                ))}
            </div>
            <button type='button' onClick={uploadImages}>
                Upload
            </button>
        </div>
    );
};

export default SendMail;