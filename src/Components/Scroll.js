import React from 'react';

const Scroll = (props) => {
    return (
        <div className="ma2 br3"style={{overflowY: 'scroll', border: '5px solid rgba(229, 255, 0, 0.3)', height: '75vh'}}>
            {props.children}
        </div>
    )
};

export default Scroll; 