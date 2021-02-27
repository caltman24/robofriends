import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 mb2 ba b--green br3 bg-lightest-blue tc"
                type="search" 
                placeholder="Search Robofriends" 
                onFocus={e => e.target.placeholder = ''}
                onBlur={e => e.target.placeholder = 'Search Robofriends'}
                onChange={ searchChange }/>
        </div>
    )
};

export default SearchBox; 