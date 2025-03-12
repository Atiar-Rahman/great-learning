import React, { useState } from 'react';

const AddCourse = () => {
    const [file,setFile] = useState([]);
    const handleFileUpload =async(e)=>{
        const file = e.target.files[0];
        if(!file)return;

        const data = new FormData();
        data.append('file',file)
        data.append('upload_preset','first_time_cloudinary')
        data.append('cloud_name','dmtdihivi')
        const res = await fetch('https://api.cloudinary.com/v1_1/dmtdihivi/image/upload',{
            method:"POST",
            body:data
        })
        const UploadedImageURL = await res.json();
        setFile(UploadedImageURL.url)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="card-body  border-4 border-green-400 rounded-4xl">
                    <h1 className='text-2xl font-bold border-b text-center my-10'>Add Courses</h1>
                    <form action="" className='text-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div>
                                <input type="text" placeholder="Enter Course Title" className="input input-neutral my-2" />
                                <input type="text" placeholder="Course Duration" className="input input-neutral my-2" />
                                <input type="text" placeholder="Course Constructor Name" className="input input-neutral my-2" />
                                <input type="text" placeholder="Lession No" className="input input-neutral my-2" />
                                <input type="text" placeholder="Number of Student" className="input input-neutral my-2" />
                            </div>
                            <div>
                                <input type="text" placeholder="Entrol Money Need" className="input input-neutral my-2" />
                                <input type="text" placeholder="Rating No(1 to 5)" className="input input-neutral my-2" />
                                <textarea name="" className='input h-52 my-2' placeholder='Course description' id=""></textarea>
                                <input type="file" onChange={handleFileUpload} className="file-input file-input-success" />
                            </div>
                        </div>
                        <input type="submit" className='btn w-1/2 my-10 btn-outline' value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddCourse;