import React from 'react';
import { useState, useEffect } from 'react';
import Users from './Users';

const Home = () => {
    // Store data to state
    const [users, setUsers] = useState([]);


    // Loading thaousand of users data
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=100')
            .then(res => res.json())
            .then(data => setUsers(data.results))
    }, []);

    console.log(users);
    return (
        <>
            {
                users.map(user => <Users key={user.login.uuid} user={user}></Users>) 
            }
        </>
    );
};

export default Home;