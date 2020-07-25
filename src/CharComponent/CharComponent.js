import React from 'react';

const CharComponent = (props) =>{ // the component which will have a list of components
    return (
        <div className="CharComponent">
            
            <p onClick={props.click}>{props.char}</p>


        </div>
        
    );
}

export default CharComponent; 