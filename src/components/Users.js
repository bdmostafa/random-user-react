import React from 'react';
import { Table, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Users = (props) => {
    const { 
        name: {first}, 
        email, 
        picture: { thumbnail },
        login: { 
            uuid,
            username
        }
     } = props.user;
    console.log(props.user)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td> <Image src={thumbnail} /> </td>
                    <td>{first} </td>
                    <td>{email}</td>
                    <td> <Link to={`/user/${uuid}`}> Show Detail </Link> </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default Users;