import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-yellow dib br4 pa2 ma2 grow'>
            <img src={`https://robohash.org/${id}.png?size=200x200`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;