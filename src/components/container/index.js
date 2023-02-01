import React from "react";


const Container = (props) => {
    console.log("PROPS", props);
    return (
        <div style={{border: "1px solid blue" }}>{props.children}
        </div>
    )
};

export default Container;