import React from 'react'

// anything in JSX either returns an expression or String
const Scroll = (props) => {
    return(
        <div style = {{overflowY: 'scroll' , border: '1px solid black' , height : '800px'}}>
        {props.children}        
        </div>

    );
}

export default Scroll;