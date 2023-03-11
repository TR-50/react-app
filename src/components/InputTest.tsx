import React, { useState } from "react";
import { Input } from "./Input";
import { Timer } from "./Timer";
import timeZones from "../time-zones";

import "./InputTest.css";

export const InputTest: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    function submit(value: string): string {
        let res = "";
        const placeIndex: number = timeZones.findIndex((obj) =>
            JSON.stringify(obj).toLowerCase().includes(value.toLowerCase())
        );
        if (placeIndex < 0) {
            res = `"${value}" not found`;
        } else {
            setInputValue(value);
        }

        return res;
    }
    return (
        <div className="input-main-block">
            <Input
                submitFn={submit}
                placeHolder={"enter city or country"}
                buttonName="enter"
            />
            {inputValue && <Timer cityCountry={inputValue} />}
        </div>
    );
};
