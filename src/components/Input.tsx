import React, { useEffect, useRef, useState } from "react";
import timeZones from "../time-zones";
import { Alert } from "./Alert";

import './input.css'

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

        const placeIndex: number = timeZones.findIndex((obj) =>
            JSON.stringify(obj).toLowerCase().includes(inputElement.current!.value.toLowerCase())
        );
        if (placeIndex >= 0) {
            inputElement.current!.value = ''
        }
    }
    return (
        <div className="input-field-block">
            <input type="text" placeholder={placeHolder} id={id.current} />
            <button onClick={inputProcess}>{buttonName || "GO"}</button>
            {message && <Alert message={message} />}
        </div>
    );
};
