import React from 'react'

const SearchBox = (props) => {
    return(
        <div className = 'pa2'>
            <input 
            className = 'pa2 ba b--green bg-lightest-blue'
            type = 'search' 
            placeholder = 'search robots'
            onChange = {props.searchChange}
            />
        </div>
    );
}

export default SearchBox;