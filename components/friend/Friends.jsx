import React from 'react';
import Friend from "./Friend";

const Friends = (props) => {
    console.log('friends props: ', props);
    const {friends} = props;
    return (
        <>
            {friends.map((f, idx) => <Friend key={idx} friend={f} />)}
        </>
    )
}
export default Friends;
