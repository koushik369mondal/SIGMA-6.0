import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0); //initialization
    console.log("Counter component rendered");
    console.log("Count: ", count);

    let incCount = ()=> {
        setCount(count + 1);
        console.log(`inside incCount: ${count}`);
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}
