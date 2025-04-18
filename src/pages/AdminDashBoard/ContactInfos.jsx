import React, { useEffect, useState } from 'react';
import url from '../../url';
import ContactInfo from '../../components/ContactInfo';

const ContactInfos = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch(`${url}/contactinfo`)
            .then(res => res.json())
            .then(data => {
                setContacts(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center my-10 font-bold'>Contact Information</h1>
            <table className='table text-center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Description</th>
                    </tr>
                </thead>
            </table>
            {
                contacts.map(contact => <ContactInfo key={contact._id} contact={contact}></ContactInfo>)
            }
        </div>

    );
};

export default ContactInfos;