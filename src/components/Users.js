import React from 'react';
import { Table, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Users = (props) => {
    const {
        name: { first },
        email,
        picture: { thumbnail },
        login: {
            uuid
        }
    } = props.user;
    // console.log(props.user)

    // Using useHistory() hook - another way to add dynamic router parameter
    // const history = useHistory();

    // const handleClick = (uuid) => {
    //     const url = `/user/${uuid}`;
    //     history.push(url)
    // }

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

                    {/* <button onClick={() => {handleClick(uuid)}}> Show Detail</button> */}

                </tr>
            </tbody>
        </Table>
    );
};

export default Users;