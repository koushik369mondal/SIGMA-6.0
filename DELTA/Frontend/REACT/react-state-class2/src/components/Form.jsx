import { useState } from "react";

export default function Form() {
    let [fullName, setFullName] = useState("");

    let handleNameChange = (event) => {
        setFullName(event.target.value);
    };

    return (
        <form action="">
            <label htmlFor="username">Full Name</label>
            <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={handleNameChange}
                id="username"
            />
            <button>Submit</button>
        </form>
    );
}
