import { useState } from "react";

export default function Form() {
    let [fullName, setFullName] = useState("");
    let [username, setUsername] = useState("");

    let handleNameChange = (event) => {
        setFullName(event.target.value);
    };

    let handleUsername = (event) => {
        setUsername(event.target.value);
    };

    return (
        <form action="">
            <label htmlFor="fullName">Full Name</label>
            <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={handleNameChange}
                id="fullName"
            />
            <br />
            <br />
            <label htmlFor="username">Username</label>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsername}
                id="username"
            />
            <button>Submit</button>
        </form>
    );
}
