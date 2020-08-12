import React from 'react';

const validationComponent = (props) => {
    let valid = 'Valid Text';

    if(props.textLength <=5){
        valid = 'Text Too Short';
    }

    return(
        <div>
            <p>{valid}</p>
        </div>
    )
}

export default validationComponent;