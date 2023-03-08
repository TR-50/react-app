import React, { useState, useEffect } from "react";
import timeZones from "../time-zones";
type Props = {
    cityCountry: string;
};
export const Timer: React.FC<Props> = ({ cityCountry }) => {
    const stylesDiv: React.CSSProperties = {
        fontSize: "1.4em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };

    const styles: React.CSSProperties = {
        backgroundColor: "coral",
        padding: "8px 16px",
        borderRadius: "5px",
        color: "#ffffff",
        fontWeight: 600,
        transition: "ease-in 0.08s",
        minWidth: "122px",
        textAlign: "center",
        marginTop: "8px",
    };

    const [time, setTime] = useState<Date>(new Date());

    function tic() {
        setTime(new Date());
    }

    useEffect(() => {
        const interval = setInterval(tic, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={stylesDiv}>
            <h2>Current Time in {cityCountry}</h2>
            <p style={styles}>
                {time.toLocaleTimeString(undefined, {
                    timeZone: timeZones[3].name,
                })}
            </p>
        </div>
    );
};
