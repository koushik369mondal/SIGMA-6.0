import { useState } from "react";

export default function Counter() {
    let [stateVariable, setStateVariable] = useState(10);
    let [count, setCount] = useState(0);

    return (
        <div>
            <h3>Count: {}</h3>
            <button>Increase Count</button>
        </div>
    );
}
