import React from 'react';


const Display = (props) => {

    return(
        <div>
            <h4>Balls: {props.ball}</h4>
            <h4>Strikes: {props.strike}</h4>
            <h4>Hit: {props.hit}</h4>
        </div>
    )


}

export default Display;