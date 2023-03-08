import React from "react";

import "./App.css";
import { Timer } from "./components/Timer";

function App() {
    return (
        <div>
            <Timer cityCountry="London" />
            <Timer cityCountry="Warsaw" />
            <Timer cityCountry="Israel" />
            <Timer cityCountry="Winnipeg" />
            <Timer cityCountry="CurrentLocation" />
        </div>
    );
}

export default App;
