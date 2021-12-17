import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';


const Users = ({ user }) => {
    const { name, username, email, phone } = user;

    const [image, setImage] = useState('')

    useEffect(() => {
        const url = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`
        setImage(url)
    }, [username])

    return (
        <div className="col-md-5 d-flex shadow m-4 p-4 bg-light rounded">
            <img className="w-25" src={image} alt="" />
            <div className="ms-5">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Company Name:</strong> {user.company.name}</p>
                <p><strong>Company Website:</strong> {user.website}</p>
            </div>
        </div>
    );
};

export default Users;