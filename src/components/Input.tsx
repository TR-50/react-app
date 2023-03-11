import React, { useEffect, useRef, useState } from "react";
import timeZones from "../time-zones";
import { Alert } from "./Alert";
import placeIndex from "./checkIndexTimeZone";

import "./input.css";

type Props = {
    submitFn: (value: string) => string;
    placeHolder: string;
    buttonName?: string;
};
export const Input: React.FC<Props> = ({
    submitFn,
    placeHolder,
    buttonName,
}) => {
    const id = useRef<string>(Math.random().toString());
    const inputElement = useRef<HTMLInputElement | null>();
    const [message, setMessage] = useState<string>("");
    useEffect(() => {
        inputElement.current = document.getElementById(
            id.current
        ) as HTMLInputElement;
    }, []);
    function inputProcess() {
        setMessage(submitFn(inputElement.current!.value));

        if (placeIndex(inputElement.current!.value) >= 0) {
            inputElement.current!.value = "";
        }
    }
    return (
        <>
            <div className="input-field-conainer">
                <input type="text" placeholder={placeHolder} id={id.current} />
                <button onClick={inputProcess}>{buttonName || "GO"}</button>
            </div>
            {message && <Alert message={message} />}
        </>
    );
};
