import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h3>This is Home for {user?.displayName}</h3>
        </div>
    );
};

export default Home;