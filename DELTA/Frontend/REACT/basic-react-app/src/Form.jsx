function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted!");
}

export default function Form() {
    return(
        <form action="" onSubmit={handleFormSubmit}>
            <input placeholder="write something" type="text" />
            <button>Submit</button>
        </form>
    )
}