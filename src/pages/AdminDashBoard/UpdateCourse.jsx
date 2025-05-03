import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import url from '../../url';

const UpdateCourse = () => {
    const course = useLoaderData();
    const { _id, title, duration, instructorName, lessonNo, numOfStudents, money, rating, description, file: initialFile } = course;

    const [file, setFile] = useState(initialFile || '');
    const [imagePreview, setImagePreview] = useState('');
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
        const title = form.title.value.trim();
        const duration = form.duration.value.trim();
        const instructorName = form.name.value.trim();
        const lessonNo = form.lessionNo.value.trim();
        const numOfStudents = form.numOfStudents.value.trim();
        const money = form.money.value.trim();
        const rating = parseFloat(form.rating.value);
        const description = form.description.value.trim();

        if (!title || !duration || !instructorName || !lessonNo || !numOfStudents || !money || !rating || !description || !file) {
            setError('Please fill out all fields and upload an image.');
            return;
        }

        if (rating < 1 || rating > 5) {
            setError('Rating should be between 1 and 5.');
            return;
        }

        const courseData = {
            title,
            duration,
            instructorName,
            lessonNo,
            numOfStudents,
            money,
            rating,
            description,
            file,
        };

        setError('');

        fetch(`${url}/course/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(courseData),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.modifiedCount || data.acknowledged) {
                    Swal.fire({
                        title: 'Course updated successfully!',
                        icon: 'success',
                        draggable: true,
                    });
                }
            })
            .catch((err) => {
                console.error(err);
                setError('Something went wrong while updating the course.');
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="card-body border-4 border-green-400 rounded-4xl">
                    <h1 className="text-2xl font-bold border-b text-center my-10">Update Course Information</h1>
                    <form className="text-center" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <input
                                    type="text"
                                    defaultValue={title}
                                    name="title"
                                    placeholder="Enter Course Title"
                                    className="input input-neutral my-2"
                                />
                                <input
                                    type="text"
                                    name="duration"
                                    defaultValue={duration}
                                    placeholder="Course Duration"
                                    className="input input-neutral my-2"
                                />
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={instructorName}
                                    placeholder="Course Instructor Name"
                                    className="input input-neutral my-2"
                                />
                                <input
                                    type="text"
                                    name="lessionNo"
                                    defaultValue={lessonNo}
                                    placeholder="Lesson No"
                                    className="input input-neutral my-2"
                                />
                                <input
                                    type="text"
                                    name="numOfStudents"
                                    defaultValue={numOfStudents}
                                    placeholder="Number of Students"
                                    className="input input-neutral my-2"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="money"
                                    defaultValue={money}
                                    placeholder="Enrolment Money"
                                    className="input input-neutral my-2"
                                />
                                <input
                                    type="text"
                                    name="rating"
                                    defaultValue={rating}
                                    placeholder="Rating (1-5)"
                                    className="input input-neutral my-2"
                                />
                                <textarea
                                    name="description"
                                    defaultValue={description}
                                    className="input h-52 my-2"
                                    placeholder="Course Description"
                                ></textarea>
                                <input
                                    type="file"
                                    onChange={handleFileUpload}
                                    className="file-input file-input-success"
                                />
                                {imagePreview && (
                                    <img
                                        src={imagePreview}
                                        alt="Image Preview"
                                        className="my-4 w-32 h-32 object-cover"
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

export default UpdateCourse;
