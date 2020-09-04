import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Users = (props) => {
    const { user, idx } = props;
    const {
        email,
        name: { first },
        picture: { thumbnail },
        login: { uuid }
    } = user;
    // console.log(props.user)

    // Using useHistory() hook - another way to add dynamic router parameter
    // const history = useHistory();

    // const handleClick = (uuid) => {
    //     const url = `/user/${uuid}`;
    //     history.push(url)
    // }

    return (
        <tr>
            <td> {idx} </td>
            <td> <Image src={thumbnail} /> </td>
            <td>{first} </td>
            <td>{email}</td>
            <td> <Link to={`/user/${uuid}`}> Show Detail </Link> </td>
            {/* <button onClick={() => {handleClick(uuid)}}> Show Detail</button> */}
        </tr>
    );
};

export default Users;