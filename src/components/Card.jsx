import React from "react";

const Card = ({ children, bg = "bg-gray-100" }) => {
    return <div className={`${bg}`}>{children}</div>;
};

export default Card;
