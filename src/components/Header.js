import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = () => {
    return (
        <Jumbotron className="text-center">
            <h1>Welcome to Random User Generator</h1>
            <p>
                This is sample random user generator in which you can choose any user and see the details. Enjoy it!
        </p>
        </Jumbotron>
    );
};

export default Header;