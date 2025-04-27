import React from 'react';

const ContactInfo = ({ contact }) => {
    // console.log(contact)
    const { name, email, text } = contact;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    
                    <tbody>
                        
                        <tr>
                            <td>
                                <span className="badge badge-ghost badge-sm">{name}</span>
                            </td>
                            <td>{email}</td>
                            <td>
                                <button className="btn btn-ghost btn-xs">{text}</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactInfo;