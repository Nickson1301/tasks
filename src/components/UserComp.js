import React from 'react'

const UserComp = (props) => {

    if (props.user === "nickson") {
        throw new("Not a User");
    }
    return <div>{props.user}</div>
}

export default UserComp
