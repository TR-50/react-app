import React, { CSSProperties } from "react";

type Props = {
    message: string;
};

const messageStyle: CSSProperties = {
    border: "solid 1px red",
    borderRadius: '5px',
    color: "red",
    textAlign: "center",
    fontWeight: 600,
    marginTop: "12px",
    padding: "8px",
    boxSizing: "border-box",
};

export const Alert: React.FC<Props> = ({ message }) => {
    return <div style={messageStyle}>{message}</div>;
};
