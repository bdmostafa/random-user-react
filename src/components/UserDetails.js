import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const UserDetails = (props) => {
    const { uuid } = useParams();
    const { users } = props;
    
    const user = users.find(user => user.login.uuid === uuid);
    const {
        cell,
        email, 
        gender,
        nat,
        dob: {age}, 
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

    // console.log(user);

    return (
        <Container>
            <h3>User Detail here ... </h3>
            <img src={large} alt=""/>
              <p> {title} {first} {last} </p>
              <p>{cell}</p>
              <p>{email}</p>
              <p>{gender}</p>
              <p>{nat}</p>
              <p>{age}</p>
              <p>{city}</p>
              <p>{country}</p>
              <p>{postcode}</p>
              <p>{number}</p>
              <p>{name}</p>
              <p>{username}</p>
              <p>{password}</p>
              <p> Registered at: {date} </p>
        </Container>
    );
};

export default UserDetails;