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
        minWidth: "40vw",
        boxSizing: "border-box",
        padding: "8px",
    };

    const styles: React.CSSProperties = {
        backgroundColor: "#d3724f",
        padding: "8px 16px",
        borderRadius: "5px",
        color: "#ffffff",
        fontWeight: 600,
        transition: "ease-in 0.08s",
        minWidth: "122px",
        textAlign: "center",
        marginTop: "8px",
    };
    const h2style: React.CSSProperties = {
        color: "#ffffff",
        textAlign: "center",
    };

    const [time, setTime] = useState<Date>(new Date());

    function tic() {
        setTime(new Date());
    }

    useEffect(() => {
        const interval = setInterval(tic, 1000);
        return () => clearInterval(interval);
    }, []);

    //* ======== ↓ HW-32 ↓ ========

    function timeZone(location: string): number {
        const placeIndex: number = timeZones.findIndex((obj) =>
            JSON.stringify(obj).includes(location)
        );
        return placeIndex;
    }
    
    type Options = { timeZone: string } | undefined;

    const options: Options =
        timeZone(cityCountry) >= 0
            ? { timeZone: timeZones[timeZone(cityCountry)].name }
            : undefined;

    return (
        <div style={stylesDiv}>
            <h2 style={h2style}>Current Time in {cityCountry}</h2>
            <p style={styles}>{time.toLocaleTimeString(undefined, options)}</p>
        </div>
    );
};
