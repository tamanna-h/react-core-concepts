import React, { useEffect, useState } from 'react';

const Players = () => {

    const [Players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    console.log(Players);

    return (
        <div className='card'>
            <h3>Players: {Players.length}</h3>
            <ul>
              {
                    Players.map(player =>
                        <li>{player.company.name}</li>
                    )
                }  
            </ul>
            
        </div>
    );
};

export default Players;