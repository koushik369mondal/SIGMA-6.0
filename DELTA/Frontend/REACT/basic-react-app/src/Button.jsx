function printHello() {
    console.log("Hello");
}

function printBye() {
    console.log("Bye");
}

function handleDBlclick(){
    console.log("Double Clicked");
}

export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click me</button>
            <p onMouseOver={printBye}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
                ipsa accusantium explicabo, eveniet optio animi. Dicta ut fugit
                voluptate beatae nesciunt in molestiae facilis reiciendis quos nulla,
                esse perferendis nisi dolores magnam atque sunt accusantium non enim
                corrupti! Ad, quasi sequi sint possimus consequatur id quibusdam
                sapiente facere non optio?
            </p>
            <button onDoubleClick={handleDBlclick}>Double Click me</button>
        </div>
    );
}
