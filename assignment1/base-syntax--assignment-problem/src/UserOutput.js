import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p onClick={props.click}>Username: {props.username}</p>
            <p>Password: password</p>
            <br/>
        </div>
    )
};

export default userOutput;