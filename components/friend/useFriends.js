import {useState} from "react";

const useFriends = () => {
    const [friends, setFriends] = useState([
        {name: 'name1'},
        {name: 'name2'},
    ]);
    return {
        friends,
        setCount(count) {
            setFriends(new Array(count).fill({}).map((_, idx) => ({
                name: 'name' + (idx + 1)
            })))
        }
    };
}

export default useFriends;
