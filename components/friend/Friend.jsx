import React from 'react';

const Friend = (props) => {
    console.log('friend props', props);
    const {friend} = props;
    return (
        <div>
            name: {friend.name ? friend.name : null}
        </div>
    )
}

export default Friend;