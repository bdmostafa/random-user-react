import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const UserDetails = (props) => {
    const { uuid } = useParams();
    const { users } = props;

    const user = users.find(user => user.login.uuid === uuid);
    // console.log(user);

    // Destructuring and Nested Destructuring
    const {
        cell,
        email,
        gender,
        nat,
        dob: { age },
        picture: { large },
        registered: { date },
        location: {
            city,
            country,
            postcode,
            street: {
                number, name
            }
        },
        login: {
            username,
            password
        },
        name: {
            title,
            first,
            last
        }
    } = user;

    const fullName = `${title} ${first} ${last}`
    const address = `
                    ${number}, ${name}
                    ${city}, ${country} - ${postcode}
                    `
    const registeredDate =  new Date().toDateString(date)
    // const daysAgo = new Date().toDateString() - registeredDate.getDate();
    // console.log(new Date().toDateString())
    return (
        <Container>
            <Card className="text-center w-50 ml-auto mr-auto">
                <Card.Header> <strong> {first}</strong>'s Detail</Card.Header>
                <Card.Img variant="top" src={large} />
                <Card.Body>
                    <Card.Title>{fullName}</Card.Title>
                    <Card.Subtitle> {email} </Card.Subtitle>
                    <br />
                    <Card.Text> Username: {username} </Card.Text>
                    <Card.Text> Password: {password} </Card.Text>
                    <Card.Text> Gender: {gender} </Card.Text>
                    <Card.Text> Mobile: {cell} </Card.Text>
                    <Card.Text> Nationality: {nat} </Card.Text>
                    <Card.Text> Age: {age} </Card.Text>
                    <Card.Text> Address: {address} </Card.Text>
                    <Card.Text> Registered at: {registeredDate} </Card.Text>
                </Card.Body>
                {/* <Card.Footer className="text-muted">{daysAgo} days ago</Card.Footer> */}
                <Link to="/"><Button> Go Back </Button> </Link>
            </Card>
        </Container>
    );
};

export default UserDetails;