import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import url from '../../url';

const UpdateInstructor = () => {
    const instructor = useLoaderData();
    const { _id, name, experience, instructor_type, education, description, file: initialFile } = instructor;

    const [file, setFile] = useState(initialFile || '');
    const [imagePreview, setImagePreview] = useState(initialFile || '');
    const [error, setError] = useState('');

    useEffect(() => {
        if (initialFile) {
            setImagePreview(initialFile);
        }
    }, [initialFile]);

    const handleFileUpload = async (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        if (!selectedFile.type.startsWith('image/')) {
            setError('Please upload a valid image file.');
            return;
        }

        setError('');
        const data = new FormData();
        data.append('file', selectedFile);
        data.append('upload_preset', 'first_time_cloudinary');
        data.append('cloud_name', 'dmtdihivi');

        try {
            const res = await fetch('https://api.cloudinary.com/v1_1/dmtdihivi/image/upload', {
                method: 'POST',
                body: data,
            });
            const uploadedImage = await res.json();
            setFile(uploadedImage.secure_url);
            setImagePreview(uploadedImage.secure_url);
        } catch (err) {
            console.error(err);
            setError('Failed to upload image. Please try again.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const experience = form.experience.value.trim();
        const instructor_type = form.type.value.trim();
        const education = form.education.value.trim();
        const description = form.description.value.trim();

        if (!name || !experience || !instructor_type || !education || !description || !file) {
            setError('Please fill out all fields and upload an image.');
            return;
        }

        const instructorData = { name, experience, instructor_type, education, description, file };
        setError('');

        fetch(`${url}/instructor/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(instructorData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount || data.acknowledged) {
                    Swal.fire({
                        title: 'Instructor updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                } else {
                    setError('No changes detected or update failed.');
                }
            })
            .catch(err => {
                console.error(err);
                setError('Something went wrong while updating the instructor.');
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="card-body border-4 border-green-400 rounded-4xl">
                    <h1 className="text-2xl font-bold border-b text-center my-10">
                        Update Instructor Information
                    </h1>
                    <form className="text-center" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Instructor Name"
                                    className="input input-neutral my-2 w-full"
                                />
                                <input
                                    type="text"
                                    name="experience"
                                    defaultValue={experience}
                                    placeholder="Experience (Years)"
                                    className="input input-neutral my-2 w-full"
                                />
                                <input
                                    type="text"
                                    name="type"
                                    defaultValue={instructor_type}
                                    placeholder="Instructor Type"
                                    className="input input-neutral my-2 w-full"
                                />
                                <input
                                    type="text"
                                    name="education"
                                    defaultValue={education}
                                    placeholder="Educational Background"
                                    className="input input-neutral my-2 w-full"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="description"
                                    defaultValue={description}
                                    className="input h-52 my-2 w-full"
                                    placeholder="Instructor Description"
                                ></textarea>
                                <input
                                    type="file"
                                    onChange={handleFileUpload}
                                    className="file-input file-input-success w-full my-2"
                                />
                                {imagePreview && (
                                    <img
                                        src={imagePreview}
                                        alt="Image Preview"
                                        className="my-4 w-32 h-32 object-cover mx-auto border"
                                    />
                                )}
                            </div>
                        </div>

                        {error && <p className="text-red-500 my-4">{error}</p>}

                        <input
                            type="submit"
                            className="btn w-1/2 my-10 btn-outline"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateInstructor;
