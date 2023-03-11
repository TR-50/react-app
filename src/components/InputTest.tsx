import React, { useState } from "react";
import { Input } from "./Input";
import { Timer } from "./Timer";

import "./InputTest.css";
import placeIndex from "./checkIndexTimeZone";

export const InputTest: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    function submit(value: string): string {
        let res = "";

        if (placeIndex(value) < 0) {
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
