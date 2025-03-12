import React from 'react';

const AddConstructor = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="card-body  border-4 border-green-400 rounded-4xl">
                    <h1 className='text-2xl font-bold border-b text-center my-10'>Add Construtor information</h1>
                    <form action="" className='text-center' >


                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div>
                                <input type="text" placeholder="Course Constructor Name" className="input input-neutral my-2" />

                                <input type="text" placeholder="Experience(Year)" className="input input-neutral my-2" />
                                <input type="text" placeholder="Entrol Money Need" className="input input-neutral my-2" />
                                <input type="text" placeholder="Rating No(1 to 5)" className="input input-neutral my-2" />
                            </div>
                            <div>
                                <textarea name="" className='input h-52 my-2' placeholder='Course description' id=""></textarea>
                                <input type="file" className="file-input file-input-success" />
                            </div>
                        </div>

                        <input type="submit" className='btn w-1/2 my-10 btn-outline' value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddConstructor;