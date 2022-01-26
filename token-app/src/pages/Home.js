import React from 'react';
import uuid from 'react-uuid'

const Home = () => {

    const [token, setToken] = React.useState(null);
    const [isGenerated, setIsGenerated] = React.useState(false);

    const generateTokenHandler = () => {
        setToken(uuid());
        setIsGenerated(true);
    }
    return (

        <>
        <button onClick={generateTokenHandler}>Generate TOken</button>
        { isGenerated && <p>{token}</p> }
    </>
    )
};

export default Home;
