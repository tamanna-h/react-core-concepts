import React, { useState } from 'react';

const Batsman = () => {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSignles = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        setSixes(sixes + 1);
        setRuns(updatedRuns);
    }


    return (
      <div>
            <h3>Player: Batsman</h3>
            <p><small>Sixes: {sixes}</small></p>
        {
                runs > 50 && <p>You score: 50</p>
        }
        <h1>Score: {runs} </h1>
        <button onClick={handleSignles}>singles</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
      </div>
    );
};

export default Batsman;