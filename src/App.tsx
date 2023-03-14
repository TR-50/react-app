import React from "react";

import "./App.css";
// import { InputTest } from "./components/InputTest";
import { Timer } from './components/Timer';

function App() {
    return (
        <div className="app-block">
            <Timer cityCountry="London" />
            <Timer cityCountry="Warsaw" />
            <Timer cityCountry="Winnipeg" />
            <Timer cityCountry="Alaska" />

        </div>
    );
}

export default App;
