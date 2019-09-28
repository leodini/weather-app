import React from 'react'

const Error = (props) =>{
    return(
        <div>
            <h3 className="weather__error">{props.error.text}</h3>
        </div>
    );
}

export default Error;