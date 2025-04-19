import React from 'react';

const User = ({user}) => {

    return (
        <div>
        <div className="overflow-x-auto">
            <table className="table text-center">
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={user.photourl}
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        
                        <td>{user.displayName}</td>
                        <td>
                            <button className="btn btn-ghost btn-xs">{user.email}</button>
                        </td>
                    
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default User;