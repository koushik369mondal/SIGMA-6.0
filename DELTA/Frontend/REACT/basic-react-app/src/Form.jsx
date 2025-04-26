function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted!");
}

export default function Form() {
    return(
        <form action="">
            <input placeholder="write something" type="text" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}