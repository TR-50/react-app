import React from "react";

export const Timer: React.FC = () => {
    const stylesDiv: React.CSSProperties = {
        fontSize: "2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };

    //*============== ↓ hw-31 ↓ ==============*//

    const colorsBg: string[] = ["lightblue", "coral"];
    const colorsTxt: string[] = ["#1b1b1b", "#ffffff"];
    setTimeout(ticBgColor, 5000);
    const [colorBg, setBG] = React.useState(colorsBg[0]);
    const [colorTxt, setTxt] = React.useState(colorsTxt[0]);
    function ticBgColor() {
        colorBg === colorsBg[0] ? setBG(colorsBg[1]) : setBG(colorsBg[0]);
        colorTxt === colorsTxt[0] ? setTxt(colorsTxt[1]) : setTxt(colorsTxt[0]);
    }
    const styles: React.CSSProperties = {
        backgroundColor: colorBg,
        padding: "8px 16px",
        borderRadius: "5px",
        color: colorTxt,
        fontWeight: 600,
        transition: "ease-in 0.08s",
    };

    //*============== ↑ hw-31 ↑ ==============*//

    setTimeout(tic, 1000);
    const [time, setTime] = React.useState(new Date());
    function tic() {
        setTime(new Date());
    }
    return (
        <div style={stylesDiv}>
            <h2>Current Time</h2>
            <p style={styles}>{time.toLocaleTimeString()}</p>
        </div>
    );
};
