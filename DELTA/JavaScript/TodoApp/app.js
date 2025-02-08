let todo = [];
let running = true;

while (running) {
    let req = prompt("Please enter your request (list, add, delete, quit)");

    if (req === null || req.toLowerCase() === "quit") {
        console.log("Quitting app");
        running = false;
    } else if (req.toLowerCase() === "list") {
        console.log("----------");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("----------");
    } else if (req.toLowerCase() === "add") {
        let task = prompt("Please enter the task you want to add");
        if (task) {
            todo.push(task);
            console.log(`Task "${task}" added`);
        } else {
            console.log("No task entered");
        }
    } else if (req.toLowerCase() === "delete") {
        let idx = parseInt(prompt("Please enter the task index to delete"));
        if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
            let removed = todo.splice(idx, 1);
            console.log(`Task "${removed[0]}" deleted`);
        } else {
            console.log("Invalid index");
        }
    } else {
        console.log("Invalid request");
    }
}
