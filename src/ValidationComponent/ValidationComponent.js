import React from 'react';



const ValidationComponent = (props) =>{

    let msg;

    if(props.len<5)
    {
        msg = "Text too Short"
    }
    else{
        msg = "Text Long enough"
    }

    return (<p>{msg}</p>);
    
}


export default ValidationComponent;