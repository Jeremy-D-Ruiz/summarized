import React from "react";

const Authenticated = (props) => {
    return (
        <div>
            <div>
                <span>User Email: {props.user.email}</span>
            </div>
            <div>
                <span>UID: {props.user.uid}</span>
            </div>
        </div>
    );
};

export default Authenticated;