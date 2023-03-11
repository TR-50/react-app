import React, { useState, useEffect, useRef } from "react";
import timeZones from "../time-zones";
import placeIndex from "./checkIndexTimeZone";

type Props = {
    cityCountry: string;
};
const stylesDiv: React.CSSProperties = {
    fontSize: "1.4em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: "12px",
};

export const Timer: React.FC<Props> = ({ cityCountry }) => {
    const [time, setTime] = useState<Date>(new Date());

    function tic() {
        setTime(new Date());
    }

    useEffect(() => {
        const interval = setInterval(tic, 1000);
        return () => clearInterval(interval);
    }, []);

    type TimeZone = { timeZone: string } | undefined;

    function timeZone(): TimeZone {
        return placeIndex(cityCountry) < 0
            ? undefined
            : { timeZone: timeZones[placeIndex(cityCountry)].name };
    }

    const timeZn = useRef<TimeZone>();

    useEffect(() => {
        timeZn.current = timeZone();
    }, [cityCountry]);

    const capitalizeCityCountry: string =
        cityCountry.charAt(0).toUpperCase() + cityCountry.slice(1);

    return (
        <div style={stylesDiv}>
            <h2 style={h2style}>Current Time in {capitalizeCityCountry}</h2>
            <p style={styles}>
                {time.toLocaleTimeString(undefined, timeZn.current)}
            </p>
        </div>
    );
};
