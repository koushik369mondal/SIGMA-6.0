function Title() {
    return <h1>I am Title</h1>;
}

let name = "Kaushik Mandal";

function Sum() {
    return (
        <div>
            <p> 2 + 2 = {2+2}</p>
            <p>Hi, {name.toUpperCase()}</p>
        </div>
    );
}

export { Title, Sum };
