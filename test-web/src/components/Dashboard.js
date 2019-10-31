import React from 'react';

const Dashboard = (props) => {

    return(
        <div>
            <button onClick={props.clickStrike}>Strike</button>
            <button onClick={props.clickBall}>Ball</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.clickHit}>hit</button>
            <br/>
            <button onClick={props.rest}>Rest Score</button>
        </div>
    )


}

export default Dashboard;