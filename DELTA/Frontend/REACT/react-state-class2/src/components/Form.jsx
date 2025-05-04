import { useState } from "react"

export default function Form() {
    let [fullName, setFullName] = useState("");
    return (
        <form action="">
            <input type="text" placeholder="Enter your full name" value={fullName}/>
            <button>Submit</button>
        </form>
    )
}