import React from 'react';
import { useEffect } from 'react';
import Users from './Users';

const Home = (props) => {
    const {users, setUsers} = props;
    // Loading thaousand of users data
 useEffect(() => {
    fetch('https://randomuser.me/api/1.3/?results=5')
        .then(res => res.json())
        .then(data => setUsers(data.results))
}, []);
    // console.log(users);
    return (
        <>
            {
                users.map(user => <Users key={user.login.uuid} user={user}></Users>) 
            }
            
        </>
    );
};

export default Home;