import React, { useState } from 'react';

const AddCourse = () => {
    const [file, setFile] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [error, setError] = useState('');

    const handleFileUpload = async (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        // Validate the file type (only allow images)
        if (!selectedFile.type.startsWith('image/')) {
            setError('Please upload a valid image file.');
            return;
        }

        setError(''); // Clear error if file is valid

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
            setFile(uploadedImage.url);
            setImagePreview(URL.createObjectURL(selectedFile)); // Show preview
        } catch (err) {
            setError('Failed to upload image. Please try again.',err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const duration = form.duration.value;
        const instructorName = form.name.value;
        const lessonNo = form.lessionNo.value;
        const numOfStudents = form.numOfStudents.value;
        const money = form.money.value;
        const rating = form.rating.value;
        const description = form.description.value;

        // Validate form fields
        if (
            !title ||
            !duration ||
            !instructorName ||
            !lessonNo ||
            !numOfStudents ||
            !money ||
            !rating ||
            !description ||
            !file
        ) {
            setError('Please fill out all fields and upload an image.');
            return;
        }

        if (rating < 1 || rating > 5) {
            setError('Rating should be between 1 and 5.');
            return;
        }

        // Submit form data
        console.log({
            title,
            duration,
            instructorName,
            lessonNo,
            numOfStudents,
            money,
            rating,
            description,
            file,
        });

        setError(''); // Clear error after successful form submission
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="card-body border-4 border-green-400 rounded-4xl">
                    <h1 className="text-2xl font-bold border-b text-center my-10">Add Course</h1>
                    <form className="text-center" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter Course Title"
                                    className="input input-neutral my-2"
                                />
                                <input
                                    type="text"
                                    name="duration"
                                    placeholder="Course Duration"
                                    className="input input-neutral my-2"
                                />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Course Instructor Name"
                                    className="input input-neutral my-2"
                                />
                                <input
                                    type="text"
                                    name="lessionNo"
                                    placeholder="Lesson No"
                                    className="input input-neutral my-2"
                                />
                                <input
                                    type="text"
                                    name="numOfStudents"
                                    placeholder="Number of Students"
                                    className="input input-neutral my-2"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="money"
                                    placeholder="Enrolment Money"
                                    className="input input-neutral my-2"
                                />
                                <input
                                    type="text"
                                    name="rating"
                                    placeholder="Rating (1-5)"
                                    className="input input-neutral my-2"
                                />
                                <textarea
                                    name="description"
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

export default AddCourse;
