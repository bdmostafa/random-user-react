import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { uuid } = useParams();
    return (
        <div>
            <h3>{uuid}</h3>
        </div>
    );
};

export default UserDetails;