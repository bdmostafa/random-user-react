import React, { useState } from 'react';
import { useEffect } from 'react';
import Users from './Users';
import { Container, Table, Button, InputGroup } from 'react-bootstrap';

const Home = (props) => {
    const { users, setUsers } = props;
    const [userNum, setUserNum] = useState(15);

    // Loading thaousand of users data
    useEffect(() => {
        fetch(`https://randomuser.me/api/1.3/?results=${userNum}`)
            .then(res => res.json())
            .then(data => setUsers(data.results))
    }, []);
    // console.log(users.length);
    return (

        <Container>
            {/* <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Button variant="outline-secondary">How many users do you want</Button>
                </InputGroup.Prepend>
                <input onKeyUp={(e) => setUserNum(e.target.value)} type="number" value={userNum} className="form-control" />
            </InputGroup>
            <br /> <br /> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#No</th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, idx) => <Users key={user.login.uuid} idx={idx + 1} user={user}></Users>)
                    }
                </tbody>
            </Table>
        </Container>

    );
};

export default Home;