import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
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
            <div>
                {
                    users.length === 0 && <div>
                        <Preloader></Preloader>
                    </div>
                }
            </div>
            {
                users.map(user => <Users user={user} key={user.id}></Users>)
            }
        </section>
    );
};

export default Home;