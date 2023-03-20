import { useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

import states from "./states.json";

import "./App.css";

type TStates = {
    name: string;
    abbreviation: string;
};

function App() {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [selected, setSelected] = useState<TStates[]>([] as TStates[]);

    return (
        <div className="App">
            <button
                className="buttonState"
                onClick={() => setIsDropdownActive(!isDropdownActive)}
            >
                {selected.length} Select state
                <ArrowDownIcon className="icon h-1 w-1 text-blue-500" />
            </button>
            {isDropdownActive && (
                <div className="stateContainer">
                    {states.map((item) => (
                        <GridItemContainer
                            item={item}
                            setSelected={setSelected}
                            selected={selected}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;

function GridItemContainer({
    item,
    setSelected,
    selected,
}: {
    item: TStates;
    setSelected: Function;
    selected: TStates[];
}) {
    const [isChecked, setIsChecked] = useState(false);

    function handleOnChange(item: TStates) {
        if (isChecked) {
            if (selected.includes(item)) {
                const index = selected.indexOf(item);
                const newArray = selected;
                newArray.splice(index, 1);
                setSelected([...newArray]);
                setIsChecked(!isChecked);
            }
        } else {
            setSelected([...selected, item]);
            setIsChecked(!isChecked);
        }
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => handleOnChange(item)}
            />
            <span>{item.name}</span>
        </div>
    );
}
