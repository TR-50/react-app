import React from "react";
export const Timer: React.FC = () => {
    const styles: React.CSSProperties = {
        backgroundColor: "lightblue",
        fontSize: "2em",
    };
    setTimeout(tic, 2000);
    const [time, setTime] = React.useState(new Date());
    function tic() {
        setTime(new Date());
    }

    return (
        <div>
            <h2>Current Time</h2>
            <p style={styles}>{time.toLocaleTimeString()}</p>
        </div>
    );
};
