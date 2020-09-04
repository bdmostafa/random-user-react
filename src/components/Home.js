import React from 'react';
import { useEffect } from 'react';
import Users from './Users';
import { Container } from 'react-bootstrap';

const Home = (props) => {
    const {users, setUsers} = props;
    // Loading thaousand of users data
 useEffect(() => {
    fetch('https://randomuser.me/api/1.3/?results=100')
        .then(res => res.json())
        .then(data => setUsers(data.results))
}, []);
    // console.log(users);
    return (
        <Container>
            {
                users.map(user => <Users key={user.login.uuid} user={user}></Users>) 
            }
        </Container>
    );
};

export default Home;