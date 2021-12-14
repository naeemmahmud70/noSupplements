import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    
    return (
        <section className="row d-flex justify-content-center">
            {
                users.map(user => <Users user={user} key={user.id}></Users>)
            }
        </section>
    );
};

export default Home;