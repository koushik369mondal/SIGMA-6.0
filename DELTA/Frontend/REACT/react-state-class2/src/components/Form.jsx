import { useState } from "react";

export default function Form() {
    let [fullName, setFullName] = useState("Kauhsik");

    let handleNameChange = (event) => {
        setFullName(event.target.value);
    };

    return (
        <form action="">
            <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={handleNameChange}
            />
            <button>Submit</button>
        </form>
    );
}
