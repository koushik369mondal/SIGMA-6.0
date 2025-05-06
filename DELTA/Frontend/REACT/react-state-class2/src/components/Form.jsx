import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
    });

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // };

    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // };

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {
                ...currData,
                [event.target.name]: event.target.value,
            };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with data:", formData);
        setFormData({
            fullName: "",
            username: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                id="fullName"
                name="fullName"
                onChange={handleInputChange}
            />
            <br />
            <br />
            <label htmlFor="username">Username</label>
            <input
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                id="username"
                name="username"
                onChange={handleInputChange}
            />
            <button>Submit</button>
        </form>
    );
}
