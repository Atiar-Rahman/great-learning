import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddConstructor = () => {
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
                method: "POST",
                body: data,
            });

            const uploadedImage = await res.json();
            setFile(uploadedImage.url);
            setImagePreview(URL.createObjectURL(selectedFile)); // Show preview
        } catch (err) {
            setError('Failed to upload image. Please try again.', err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const experience = form.experience.value;
        const instructor_type = form.type.value;
        const education = form.education.value;
        const description = form.description.value;

        // Basic form validation
        if (!name || !experience || !instructor_type || !education || !description || !file) {
            setError('Please fill out all fields and upload an image.');
            return;
        }

        // Submit form data
        // console.log(name, experience, instructor_type, education, description, file);
        const instructorData = { name, experience, instructor_type, education, description, file };
        setError(''); // Clear error after successful form submission

        fetch('https://great-learning-server-six.vercel.app/instructor', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(instructorData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Successfull add instructor info!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="card-body border-4 border-green-400 rounded-4xl">
                    <h1 className='text-2xl font-bold border-b text-center my-10'>Add Instructor Information</h1>
                    <form className='text-center' onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div>
                                <input type="text" name='name' placeholder="Constructor Name" className="input input-neutral my-2" />
                                <input type="text" name='experience' placeholder="Experience (Years)" className="input input-neutral my-2" />
                                <input type="text" name='type' placeholder="Instructor Type" className="input input-neutral my-2" />
                                <input type="text" name='education' placeholder="Educational Background" className="input input-neutral my-2" />
                            </div>
                            <div>
                                <textarea name="description" className='input h-52 my-2' placeholder='Course Description'></textarea>
                                <input onChange={handleFileUpload} type="file" className="file-input file-input-success" />
                                {imagePreview && <img src={imagePreview} alt="Image Preview" className="my-4 w-32 h-32 object-cover" />}
                            </div>
                        </div>

                        {error && <p className="text-red-500 my-4">{error}</p>} {/* Display error if any */}
                        <input type="submit" className='btn w-1/2 my-10 btn-outline' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddConstructor;
