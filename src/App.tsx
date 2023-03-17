import { useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import states from "./states.json";

import "./App.css";

type TStates = {
    name: string;
    abbreviation: string;
};

function App() {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    return (
        <div className="App">
            <button
                className="buttonState"
                onClick={() => setIsDropdownActive(!isDropdownActive)}
            >
                Select state
                <ArrowDownIcon className="icon h-1 w-1 text-blue-500" />
            </button>
            {isDropdownActive && (
                <div className="stateContainer">
                    {states.map((item) => (
                        <GridItemContainer item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;

function GridItemContainer({ item }: { item: TStates }) {
    return (
        <div>
            <input type="checkbox" />
            <span>{item.name}</span>
        </div>
    );
}